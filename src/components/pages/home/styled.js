import { Box, styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { tokens } from "../../../theme";

export const StyledBoxContainer = styled(Box, {
  name: "StyledBoxContainer",
})({
  padding: "32px",
});

export const StyledGridCardItem = styled(Grid, {
  name: "StyledBoxCardItem",
})(({ theme }) => {
  const colors = tokens(theme.palette.mode);
  return {
    minHeight: 185,
    padding: "20px 16px",
    border: `1px solid ${colors.borderColor}`,
    borderRadius: "12px",
    background:
      theme.palette.mode === "dark"
        ? colors.primary[600]
        : colors.primary.DEFAULT,
  };
});

export const StyledTypographyCardTitle = styled(Typography, {
  name: "StyledTypographyCardTitle",
})({
  fontWeight: 600,
  textTransform: "capitalize",
  letterSpacing: 1,
});

export const StyledBoxCardPriceBlock = styled(Box, {
  name: "StyledBoxCardPriceBlock",
})({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  paddingBottom: "28px",
});

export const StyledTypographyCardPriceText = styled(Typography, {
  name: "StyledTypographyCardPriceText",
})({
  fontSize: "26px",
  fontWeight: 700,
  lineHeight: 1.6,
});

export const StyledTypographyCardCapitalizeText = styled(Typography, {
  name: "StyledTypographyCardCapitalizeText",
})(({ theme }) => {
  const colors = tokens(theme.palette.mode);

  return {
    color: colors.secondary.DEFAULT,
  };
});
