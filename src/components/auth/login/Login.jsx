import { Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from "@mui/material/colors";
import { StyledTextField } from "../StyledTextField";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[400],
      contrastText: '#fff',
    }, 
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: 'medium',
      },
    },
  },
});

const LoginPage = (props) => {
  const {setEmail, setPassword, navigate} = props;

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleNavigate = () => {
    navigate('/register')
  }

  const helperTextPass = 'Do not share your password with anyone'; 

  return (
    <>
      <Typography variant="h3" fontFamily='Poppins' textAlign='center' color="#333">Авторизация</Typography>
      <Typography variant="body2" marginBottom={3} fontFamily='Poppins' textAlign='center' color="#333">Введите ваш логин и пароль</Typography>
      <StyledTextField onChange={handleEmail} InputLabelProps={{shrink: true}} type="email" autoComplete="email" fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder="Введите ваш email"/>
      <StyledTextField onChange={handlePassword} helperText={helperTextPass} InputLabelProps={{shrink: true}} type="password" autoComplete="current-password" fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder="Введите ваш пароль"/>
      <ThemeProvider theme={theme}>
        <Button type="submit" sx={{fontFamily:'Poppins', marginTop: 2, marginBottom: 2, width: '60%', borderRadius: '12px'}} color='primary' variant="contained">Войти</Button>
      </ThemeProvider>
      <Typography variant="body2" sx={{fontFamily:'Poppins', color:"#333", opacity: 0.8}}>У вас нет аккаунта?<span className="registerLinkText" onClick={handleNavigate}>Регистрация</span></Typography>
    </>
  )
}

export default LoginPage;