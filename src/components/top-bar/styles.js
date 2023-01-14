import { styled } from "@mui/system";
import { Box, Grid, IconButton, InputBase } from "@mui/material";
import { tokens } from "../../theme";

export const StyledBoxContainer = styled(Box, {
  name: "StyledBoxContainer",
})(({ theme }) => {
  const colors = tokens(theme.palette.mode);
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 48px",
    maxHeight: "96px",
    background: `${colors.primary.DEFAULT}`,
    borderBottom: `1px solid ${colors.borderColor}`,
  };
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
