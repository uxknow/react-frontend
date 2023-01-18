import {
  StyledSpanLinkText,
  StyledButtonForm,
  StyledTypographyQuestionText,
  StyledTypographySubtitle,
  StyledTypographyTitle,
  StyledTextField,
} from "../styled";

const LoginPage = (props) => {
  const { navigate, register, errorsMessage } = props;

  const handleNavigate = () => {
    navigate("/register");
  };

  return (
    <>
      <StyledTypographyTitle variant="h2">Авторизация</StyledTypographyTitle>
      <StyledTypographySubtitle variant="body2">
        Введите ваш логин и пароль
      </StyledTypographySubtitle>
      <StyledTextField
        error={!!errorsMessage.email}
        helperText={errorsMessage.email?.message}
        InputLabelProps={{ shrink: true }}
        type="email"
        autoComplete="email"
        fullWidth={true}
        margin="normal"
        label={!errorsMessage.email ? "Email" : "Error"}
        variant="outlined"
        placeholder="Введите ваш email"
        {...register("email")}
        className={errorsMessage.email ? "error" : ""}
      />
      <StyledTextField
        error={!!errorsMessage.password}
        helperText={errorsMessage.password?.message}
        InputLabelProps={{ shrink: true }}
        type="password"
        autoComplete="current-password"
        fullWidth={true}
        margin="normal"
        label={!errorsMessage.password ? "Password" : "Error"}
        variant="outlined"
        placeholder="Введите ваш пароль"
        {...register("password")}
        className={errorsMessage.password ? "error" : ""}
      />
      <StyledButtonForm type="submit" variant="contained">
        Войти
      </StyledButtonForm>
      <StyledTypographyQuestionText variant="body2">
        У вас нет аккаунта?
        <StyledSpanLinkText onClick={handleNavigate}>
          Регистрация
        </StyledSpanLinkText>
      </StyledTypographyQuestionText>
    </>
  );
};

export default LoginPage;
