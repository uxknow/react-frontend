import { useLocation, useNavigate } from "react-router-dom";
import LoginPage from "login/Login";
import RegisterPage from "register/Register";
import { instance } from "../../utils/axios";
import { useDispatch } from "react-redux";
import { login } from "../../store/slice/auth";
import { AppErrors } from "../../common/errors";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, registerSchema } from "../../utils/yup";
import { StyledBoxFormBlock, StyledDivContainer, StyledForm } from "./styled";

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
    <StyledDivContainer>
      <StyledForm onSubmit={handleSubmit(handleSubmitForm)}>
        <StyledBoxFormBlock>
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
        </StyledBoxFormBlock>
      </StyledForm>
    </StyledDivContainer>
  );
};

export default AuthRootComponent;
