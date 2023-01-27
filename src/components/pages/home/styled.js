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

export const StyledBoxCardPricePercentText = styled(Box, {
  name: "StyledBoxCardPricePercentText",
})(({ theme }) => {
  const colors = tokens(theme.palette.mode);

  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    color: "#037400",
    background: "#A9FFA7",
    borderRadius: "4px",
    padding: "3px 8px",
    width: "100px",
    marginBottom: "14px",
    "&.pricePercentMinus": {
      background: "#FFA7A7",
      color: "#740000",
    },
  };
});
