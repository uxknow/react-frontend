import { Button, Typography } from "@mui/material";
import { StyledTextField } from "../StyledTextField";

const LoginPage = (props) => {
  const { navigate, register, errorsMessage } = props;

  const handleNavigate = () => {
    navigate("/register");
  };

  return (
    <>
      <Typography
        variant="h3"
        fontFamily="Poppins"
        textAlign="center"
        color="#333"
      >
        Авторизация
      </Typography>
      <Typography
        variant="body2"
        marginBottom={3}
        fontFamily="Poppins"
        textAlign="center"
        color="#333"
      >
        Введите ваш логин и пароль
      </Typography>
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
        sx={{
          "&:hover": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: `${errorsMessage.email ? "#d32f2f" : "#03a9f4"}`,
            },
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: `${errorsMessage.email ? "#d32f2f" : "#03a9f4"}`,
              },
            },
          },
          "& .MuiInputLabel-root": {
            color: `${errorsMessage.email ? "#d32f2f" : "#777"}`,
            "&.Mui-focused": {
              color: `${errorsMessage.email ? "#d32f2f" : "#03a9f4"}`,
            },
          },
        }}
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
        sx={{
          "&:hover": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: `${errorsMessage.password ? "#d32f2f" : "#03a9f4"}`,
            },
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: `${
                  errorsMessage.password ? "#d32f2f" : "#03a9f4"
                }`,
              },
            },
          },
          "& .MuiInputLabel-root": {
            color: `${errorsMessage.password ? "#d32f2f" : "#777"}`,
            "&.Mui-focused": {
              color: `${errorsMessage.password ? "#d32f2f" : "#03a9f4"}`,
            },
          },
        }}
      />
      <Button
        type="submit"
        sx={{
          fontFamily: "Poppins",
          marginTop: 2,
          marginBottom: 2,
          width: "60%",
          borderRadius: "12px",
          backgroundColor: "#03a9f4",
          color: "#fff",
        }}
        // color="primary"
        variant="contained"
      >
        Войти
      </Button>
      <Typography
        variant="body2"
        sx={{ fontFamily: "Poppins", color: "#333", opacity: 0.8 }}
      >
        У вас нет аккаунта?
        <span className="registerLinkText" onClick={handleNavigate}>
          Регистрация
        </span>
      </Typography>
    </>
  );
};

export default LoginPage;
