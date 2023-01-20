import {
  StyledButtonForm,
  StyledSpanLinkText,
  StyledTypographyQuestionText,
  StyledTypographySubtitle,
  StyledTypographyTitle,
  StyledTextField,
} from "../styled";

const RegisterPage = (props) => {
  const { navigate, register, errorsMessage, isLoading } = props;

  const handleNavigate = () => {
    navigate("/login");
  };

  return (
    <>
      <StyledTypographyTitle variant="h3">Регистрация</StyledTypographyTitle>
      <StyledTypographySubtitle variant="body2">
        Введите данные для регистрации
      </StyledTypographySubtitle>
      <StyledTextField
        error={!!errorsMessage.name}
        helperText={errorsMessage.name?.message}
        InputLabelProps={{ shrink: true }}
        fullWidth={true}
        margin="normal"
        label="Имя"
        variant="outlined"
        placeholder="Введите ваше имя"
        {...register("name")}
        className={errorsMessage.name ? "error" : ""}
      />
      <StyledTextField
        error={!!errorsMessage.username}
        helperText={errorsMessage.username?.message}
        InputLabelProps={{ shrink: true }}
        fullWidth={true}
        margin="normal"
        label="Username"
        variant="outlined"
        placeholder="Введите ваш username"
        {...register("username")}
        className={errorsMessage.username ? "error" : ""}
      />
      <StyledTextField
        error={!!errorsMessage.email}
        helperText={errorsMessage.email?.message}
        InputLabelProps={{ shrink: true }}
        type="email"
        autoComplete="email"
        fullWidth={true}
        margin="normal"
        label="Email"
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
        fullWidth={true}
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Введите ваш пароль"
        {...register("password")}
        className={errorsMessage.password ? "error" : ""}
      />
      <StyledTextField
        error={!!errorsMessage.confirmPassword}
        helperText={errorsMessage.confirmPassword?.message}
        InputLabelProps={{ shrink: true }}
        type="password"
        fullWidth={true}
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Повторите ваш пароль"
        {...register("confirmPassword")}
        className={errorsMessage.confirmPassword ? "error" : ""}
      />
      <StyledButtonForm loading={isLoading} type="submit" variant="contained">
        Регистрация
      </StyledButtonForm>
      <StyledTypographyQuestionText variant="body2">
        У вас уже есть аккаунт?
        <StyledSpanLinkText onClick={handleNavigate}>Войти</StyledSpanLinkText>
      </StyledTypographyQuestionText>
    </>
  );
};

export default RegisterPage;
