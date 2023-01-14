import { styled } from "@mui/system";
import {
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
  Typography,
} from "@mui/material";
import { tokens } from "../../theme";

export const StyledBoxNavBlock = styled(Box, {
  name: "StyledBoxNavBlock",
})(({ theme }) => {
  const colors = tokens(theme.palette.mode);
  return {
    borderBottom: `1px solid ${colors.borderColor}`,
  };
});

export const StyledBoxFlexBetween = styled(Box, {
  name: "StyledBoxFlexBetween",
})({
  display: "flex",
  alignItems: "center",
  gap: "16px",
});

export const StyledBoxLogo = styled(Box, {
  name: "StyledBoxLogo",
})({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px",
  marginLeft: "16px",
  marginTop: "30px",
  cursor: "pointer",
});

// import styled from "@emotion/styled";              другой вариант
/*export const StyledBoxLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 16px;
  margin-top: 30px;
  cursor: pointer;
`;*/

export const StyledListItemButtonNav = styled(ListItemButton, {
  name: "StyledListItemButtonNav",
})(({ theme }) => {
  const colors = tokens(theme.palette.mode);
  return {
    "&:hover": {
      background: "#1900D5",
      color: `${colors.white.DEFAULT}`,
      borderRadius: "4px",
      cursor: "pointer",
      "& .MuiSvgIcon-root": {
        color: `${colors.white.DEFAULT}`,
      },
    },
  };
});

export const StyledListItemIconNav = styled(ListItemIcon, {
  name: "StyledListItemIconNav",
})({
  minWidth: "32px",
});

export const StyledListItemTextNav = styled(ListItemText, {
  name: "StyledListItemTextNav",
})({
  marginBottom: 0,
});

export const StyledListNavItems = styled(List, {
  name: "StyledListNavItems",
})({
  marginBottom: "50px",
});

export const StyledTypographyLogo = styled(Typography, {
  name: "StyledTypographyLogo",
})(({ theme }) => {
  const colors = tokens(theme.palette.mode);
  return {
    color: `${
      theme.palette.mode === "dark"
        ? colors.white.DEFAULT
        : colors.black.DEFAULT
    }`,
  };
});
