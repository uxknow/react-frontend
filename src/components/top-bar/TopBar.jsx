import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { ColorModeContext } from "../../theme";
import { useContext } from "react";
import {
  StyledAppBar,
  StyledGridSearchBlock,
  StyledIconButtonMode,
  StyledIconButtonSearch,
  StyledInputBase,
  StyledGridIconsBlock,
  StyledToolbar,
  StyledBoxMenuBlock,
} from "./styled";

const TopBarComponent = ({ setIsOpen, isOpen, isNonMobile }) => {
  const { user } = useSelector((state) => state.auth.user);
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <StyledAppBar position={isNonMobile ? "static" : "fixed"}>
      <StyledToolbar>
        <StyledBoxMenuBlock>
          {!isOpen && (
            <IconButton onClick={() => setIsOpen(true)}>
              <ChevronRightOutlinedIcon />
            </IconButton>
          )}
          <Typography variant="h3">Welcome {user?.firstName}</Typography>
        </StyledBoxMenuBlock>
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
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default TopBarComponent;
