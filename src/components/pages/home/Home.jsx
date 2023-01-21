import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useMemo } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteAssets } from "../../../store/thunks/assets";
import {
  StyledGridCardItem,
  StyledBoxContainer,
  StyledTypographyCardTitle,
  StyledBoxCardPriceBlock,
  StyledTypographyCardPriceText,
  StyledTypographyCardCapitalizeText,
} from "./styled";

const Home = () => {
  const { favoriteAssets } = useSelector((state) => state.assets);
  const dispatch = useDispatch();

  const favoriteAssetName = useMemo(() => ["bitcoin", "ethereum"], []);
  const uniqueAssets = [
    ...new Set(favoriteAssets.map((item) => JSON.stringify(item))),
  ].map((item) => JSON.parse(item));

  useEffect(() => {
    favoriteAssetName.forEach((asset) => dispatch(getFavoriteAssets(asset)));
  }, [favoriteAssetName]);

  const renderFavoriteBlock = uniqueAssets.map((item) => {
    const currentPrice = item.data.prices[0][1].toFixed(3);
    const currentCap = item.data.market_caps[0][1].toFixed(0);
    return (
      <Grid item lg={6} sm={6} xs={12} key={item.name}>
        <StyledGridCardItem container>
          <Grid flexDirection="column" item lg={6} sm={6} xs={12}>
            <StyledTypographyCardTitle variant="h5">
              {item.name}
            </StyledTypographyCardTitle>
            <StyledBoxCardPriceBlock>
              <StyledTypographyCardPriceText>
                ${currentPrice}
              </StyledTypographyCardPriceText>
              <StyledTypographyCardCapitalizeText>
                ${currentCap}
              </StyledTypographyCardCapitalizeText>
            </StyledBoxCardPriceBlock>
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <Typography>Chart</Typography>
          </Grid>
        </StyledGridCardItem>
      </Grid>
    );
  });

  return (
    <StyledBoxContainer>
      <Grid container spacing={4}>
        {renderFavoriteBlock}
      </Grid>
    </StyledBoxContainer>
  );
};

export default Home;
