import Home from "home/Home";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "router/PrivateRoute";
import AuthRootComponent from "./components/auth";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from '@mui/material';
import LayoutComponent from "./components/layout/Layout";

import './index.scss';

const App = () => {
  const [colorMode, theme] = useMode()
  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LayoutComponent>
        <div className="app">
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home/>}/>
            </Route>
            <Route path="login" element={<AuthRootComponent/>} />
            <Route path="register" element={<AuthRootComponent/>} />
          </Routes>
        </div>
      </LayoutComponent>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
};

export default App;
