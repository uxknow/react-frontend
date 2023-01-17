import { Button, Typography } from "@mui/material";
import { StyledTextField } from "../StyledTextField";

const RegisterPage = (props) => {
  const { navigate, register, errorsMessage } = props;

  // const handleRepeatPassword = (e) => {
  //   setRepeatPassword(e.target.value);
  // };

  const handleNavigate = () => {
    navigate("/login");
  };

  return (
    <>
      <Typography
        variant="h3"
        fontFamily="Poppins"
        textAlign="center"
        color="#333"
      >
        Регистрация
      </Typography>
      <Typography
        variant="body2"
        marginBottom={3}
        fontFamily="Poppins"
        textAlign="center"
        color="#333"
      >
        Введите данные для регистрации
      </Typography>
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
      />
      <Button
        type="submit"
        sx={{
          color: "#fff",
          fontFamily: "Poppins",
          marginTop: 2,
          marginBottom: 2,
          width: "60%",
          backgroundColor: "#03a9f4",
          borderRadius: "12px",
        }}
        variant="contained"
      >
        Регистрация
      </Button>
      <Typography
        variant="body2"
        sx={{ fontFamily: "Poppins", color: "#333", opacity: 0.8 }}
      >
        У вас уже есть аккаунт?
        <span className="registerLinkText" onClick={handleNavigate}>
          Войти
        </span>
      </Typography>
    </>
  );
};

export default RegisterPage;

//<StyledTextField onChange={handleRepeatPassword} sx={error ? {"& .MuiOutlinedInput-root":{'&.Mui-focused':{"& .MuiOutlinedInput-notchedOutline":{ borderColor: 'red'}}}, '& fieldset': {borderColor: 'red'}} : ''} helperText={error} InputLabelProps={{shrink: true}} type="password" fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder="Повторите ваш пароль"/>
