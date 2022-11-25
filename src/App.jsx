import Home from "home/Home";
import { Route, Routes } from "react-router-dom";
import LoginPage from "login/Login";

const App = () => {
  return (
  <div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="login" element={<LoginPage/>} />
    </Routes>
  </div>
  );
};

export default App;
