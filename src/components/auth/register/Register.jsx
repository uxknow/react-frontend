import { Button, Typography } from "@mui/material";
import { StyledTextField } from "../StyledTextField";

const RegisterPage = (props) => {
  const {
    setEmail,
    setPassword,
    setRepeatPassword,
    setFirstName,
    setUsername,
    errorPassword,
    navigate,
  } = props;

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

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
        onChange={handleFirstName}
        InputLabelProps={{ shrink: true }}
        fullWidth={true}
        margin="normal"
        label="Имя"
        variant="outlined"
        placeholder="Введите ваше имя"
      />
      <StyledTextField
        onChange={handleUsername}
        InputLabelProps={{ shrink: true }}
        fullWidth={true}
        margin="normal"
        label="Username"
        variant="outlined"
        placeholder="Введите ваш username"
      />
      <StyledTextField
        onChange={handleEmail}
        InputLabelProps={{ shrink: true }}
        type="email"
        autoComplete="email"
        fullWidth={true}
        margin="normal"
        label="Email"
        variant="outlined"
        placeholder="Введите ваш email"
      />
      <StyledTextField
        onChange={handlePassword}
        InputLabelProps={{ shrink: true }}
        type="password"
        fullWidth={true}
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Введите ваш пароль"
      />
      {errorPassword ? (
        <StyledTextField
          onChange={handleRepeatPassword}
          error
          id="outlined-error-helper-text"
          label="Error"
          helperText="Incorrect password"
          InputLabelProps={{ shrink: true }}
          type="password"
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "#d32f2f",
              "&.Mui-focused": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#d32f2f",
                },
              },
            },
            "& .MuiInputLabel-root": { "&.Mui-focused": { color: "#d32f2f" } },
          }}
          fullWidth={true}
          margin="normal"
          placeholder="Повторите ваш пароль"
        />
      ) : (
        <StyledTextField
          onChange={handleRepeatPassword}
          InputLabelProps={{ shrink: true }}
          type="password"
          fullWidth={true}
          margin="normal"
          label="Password"
          variant="outlined"
          placeholder="Повторите ваш пароль"
        />
      )}
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
