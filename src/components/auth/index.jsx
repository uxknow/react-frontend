import { useLocation, useNavigate } from "react-router-dom";
import LoginPage from "login/Login";
import RegisterPage from "register/Register";
import { useDispatch, useSelector } from "react-redux";
import { AppErrors } from "../../common/errors";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, registerSchema } from "../../utils/yup";
import { StyledBoxFormBlock, StyledDivContainer, StyledForm } from "./styled";
import { loginUser, registerUser } from "../../store/thunks/auth";

const AuthRootComponent = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);

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
        await dispatch(loginUser(data));
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
          await dispatch(registerUser(userData));
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
              isLoading={isLoading}
            />
          ) : location.pathname === "/register" ? (
            <RegisterPage
              errorsMessage={errors}
              navigate={navigate}
              register={register}
              isLoading={isLoading}
            />
          ) : null}
        </StyledBoxFormBlock>
      </StyledForm>
    </StyledDivContainer>
  );
};

export default AuthRootComponent;
