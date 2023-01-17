import { useLocation, useNavigate } from "react-router-dom";
import LoginPage from "login/Login";
import RegisterPage from "register/Register";
import "./style.scss";
import { Box } from "@mui/system";
import { instance } from "../../utils/axios";
import { useDispatch } from "react-redux";
import { login } from "../../store/slice/auth";
import { AppErrors } from "../../common/errors";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, registerSchema } from "../../utils/yup";

const AuthRootComponent = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur" || "onSubmit",
    resolver: yupResolver(
      location.pathname === "/login" ? loginSchema : registerSchema
    ),
  });

  const handleSubmitForm = async (data) => {
    if (location.pathname === "/login") {
      try {
        const userData = {
          email: data.email,
          password: data.password,
        };

        const user = await instance.post("auth/login", userData);
        await dispatch(login(user.data));
        navigate("/");
      } catch (err) {
        return err;
      }
    } else {
      if (data.password === data.confirmPassword) {
        try {
          const userData = {
            firstName: data.name,
            username: data.username,
            email: data.email,
            password: data.password,
          };
          const newUser = await instance.post("auth/register", userData);
          await dispatch(login(newUser.data));
          navigate("/");
        } catch (err) {
          return err;
        }
      } else {
        throw new Error(AppErrors.PasswordDoNotMatch);
      }
    }
  };

  return (
    <div className="root">
      <form className="form" onSubmit={handleSubmit(handleSubmitForm)}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={540}
          margin="auto"
          padding={5}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            background:
              "linear-gradient(177.09deg, #FFFFFF 6.15%, #03a9f4 202.69%)",
          }}
        >
          {location.pathname === "/login" ? (
            <LoginPage
              errorsMessage={errors}
              navigate={navigate}
              register={register}
            />
          ) : location.pathname === "/register" ? (
            <RegisterPage
              errorsMessage={errors}
              navigate={navigate}
              register={register}
            />
          ) : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthRootComponent;
