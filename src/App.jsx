import { Route, Routes } from "react-router-dom";
import PrivateRoute from "router/PrivateRoute";
import AuthRootComponent from "./components/auth";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import LayoutComponent from "./components/layout/Layout";
import Home from "./components/pages/home/Home";
import WatchlistComponent from "./components/pages/watchlist/Watchlist";
import NewsComponent from "./components/pages/news/News";
import SettingsComponent from "./components/pages/settings/Settings";

import "./index.scss";

const App = () => {
  const [colorMode, theme] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <LayoutComponent> */}
        <div className="app">
          <Routes>
            <Route element={<LayoutComponent />}>
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<NewsComponent />} />
                <Route path="/watchlist" element={<WatchlistComponent />} />
                <Route path="/settings" element={<SettingsComponent />} />
              </Route>
              <Route path="login" element={<AuthRootComponent />} />
              <Route path="register" element={<AuthRootComponent />} />
            </Route>
          </Routes>
        </div>
        {/* </LayoutComponent> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
