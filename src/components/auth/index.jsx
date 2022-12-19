import { useLocation, useNavigate } from "react-router-dom";
import LoginPage from "login/Login";
import RegisterPage from "register/Register";
import './style.scss';
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { instance } from "../../utils/axios";
import { useDispatch } from "react-redux";
import { login } from "../../store/slice/auth";
import { AppErrors } from "../../common/errors";

const AuthRootComponent = () => {
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [username, setUsername] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  

  useEffect(() => {
    const err = password !== repeatPassword && repeatPassword.length > 0 ?
      true : false;
    setErrorPassword(err)
  }, [repeatPassword])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(location.pathname === '/login') {
      try {
        const userData = {
          email,
          password,
        }
  
        const user = await instance.post('auth/login', userData);
        await dispatch(login(user.data));
        navigate('/')
      } catch(err) {
          return err
      }

    } else {
      if(password === repeatPassword) {
        try {
          const userData = {
            firstName,
            username,
            email,
            password,
          }
    
          const newUser = await instance.post('auth/register', userData);
          await dispatch(login(newUser.data))
          navigate('/')
        } catch(err) {
          return err
        }
      } else {
        throw new Error(AppErrors.PasswordDoNotMatch)
      }
    }
  }

  return (
    <div className="root">
      <form className="form" onSubmit={handleSubmit}>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          maxWidth={540}
          margin='auto'
          padding={5}
          borderRadius={5}
          boxShadow={'5px 5px 10px #ccc'}
          sx={{background:'linear-gradient(177.09deg, #FFFFFF 6.15%, #03a9f4 202.69%)'}}
        >
          {
            location.pathname === '/login' ? 
              <LoginPage setEmail={setEmail} setPassword={setPassword} navigate={navigate}/> : 
                location.pathname === '/register' ? 
                  <RegisterPage 
                    setFirstName={setFirstName} 
                    setEmail={setEmail} 
                    setPassword={setPassword} 
                    setRepeatPassword={setRepeatPassword}
                    setUsername={setUsername}
                    errorPassword={errorPassword}
                    navigate={navigate}
                    /> : 
                  null 
          }
        </Box>
      </form>
    </div>
  )
}

export default AuthRootComponent;