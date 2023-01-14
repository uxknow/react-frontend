import { Box, Grid, IconButton, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ColorModeContext } from "../../theme";
import { useContext } from "react";
import {
  StyledBoxContainer,
  StyledGridSearchBlock,
  StyledIconButtonMode,
  StyledIconButtonSearch,
  StyledInputBase,
  StyledGridIconsBlock,
} from "./styles";

const TopBarComponent = () => {
  const { user } = useSelector((state) => state.auth.user);
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <StyledBoxContainer>
      <Grid>Welcome {user?.firstName}</Grid>
      <Box display="flex" alignItems="center">
        <StyledGridIconsBlock>
          <StyledIconButtonMode onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeIcon />
            ) : (
              <LightModeIcon />
            )}
          </StyledIconButtonMode>
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>
        </StyledGridIconsBlock>
        <StyledGridSearchBlock>
          <StyledIconButtonSearch>
            <SearchIcon />
          </StyledIconButtonSearch>
          <StyledInputBase placeholder="Поиск" />
        </StyledGridSearchBlock>
      </Box>
    </StyledBoxContainer>
  );
};

export default TopBarComponent;
