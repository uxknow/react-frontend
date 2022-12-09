import Home from "home/Home";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "router/PrivateRoute";
import AuthRootComponent from "./components/auth";

import './index.scss';

const App = () => {
  return (
  <div className="app">
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home/>}/>
      </Route>
      <Route path="login" element={<AuthRootComponent/>} />
      <Route path="register" element={<AuthRootComponent/>} />
    </Routes>
  </div>
  );
};

export default App;
