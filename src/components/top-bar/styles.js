import { styled } from "@mui/system";
import {
  AppBar,
  Box,
  Toolbar,
  Grid,
  IconButton,
  InputBase,
} from "@mui/material";
import { tokens } from "../../theme";

export const StyledAppBar = styled(AppBar, {
  name: "StyledAppBar",
})(({ theme }) => {
  const colors = tokens(theme.palette.mode);
  return {
    position: "static",
    maxHeight: "96px",
    background: `${colors.primary.DEFAULT}`,
    borderBottom: `1px solid ${colors.borderColor}`,
    boxShadow: "none",
  };
});

export const StyledToolbar = styled(Toolbar, {
  name: "StyledToolbar",
})({
  display: "flex",
  justifyContent: "space-between",
  padding: "24px 44px",
});

export const StyledBoxMenuBlock = styled(Box, {
  name: "StyledBoxMenuBlock",
})({
  display: "flex",
  gap: "10px",
  alignItems: "center",
});

export const StyledIconButtonMode = styled(IconButton, {
  name: "StyledIconButtonMode",
})({
  marginRight: "22px",
});

export const StyledIconButtonSearch = styled(IconButton, {
  name: "StyledIconButtonSearch",
})({
  marginLeft: "4px",
  "&:hover": { backgroundColor: "transparent" },
});

export const StyledInputBase = styled(InputBase, {
  name: "StyledInputBase",
})({
  padding: "12px 16px 12px 0",
  width: "26vw", //[100, 210, 388],можно только  при записе всамом компоненте(через props sx)
});

export const StyledGridIconsBlock = styled(Grid, {
  name: "StyledGridIconsBlock",
})(({ theme }) => {
  const colors = tokens(theme.palette.mode);
  return {
    paddingRight: "28px",
    borderRight: `1px solid ${colors.borderColor}`,
  };
});

export const StyledGridSearchBlock = styled(Grid, {
  name: "StyledGridSearchContainer",
})(({ theme }) => {
  const colors = tokens(theme.palette.mode);
  return {
    display: "flex",
    backgroundColor: `${colors.primary[600]}`,
    borderRadius: "8px",
    marginLeft: "28px",
  };
});
