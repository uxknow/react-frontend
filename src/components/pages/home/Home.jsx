import { Grid } from "@mui/material";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteAssets } from "../../../store/thunks/assets";
import AreaChart from "../../charts/area-chart/AreaChart";
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

  // const uniqueAssets = [
  //   ...new Set(favoriteAssets.map((item) => JSON.stringify(item))),
  // ].map((item) => JSON.parse(item));

  // const uniqueAssets = favoriteAssets.filter(
  //   (item, idx, arr) => idx === arr.findIndex((elem) => elem.name === item.name)
  // );

  const uniqueAssets = favoriteAssets.reduce((acc, curr) => {
    if (!acc.find((elem) => elem.name === curr.name)) {
      acc.push(curr);
    }
    return acc;
  }, []);

  useEffect(() => {
    favoriteAssetName.forEach((asset) => dispatch(getFavoriteAssets(asset)));
  }, [favoriteAssetName]);

  const renderFavoriteBlock = uniqueAssets.map((item) => {
    const currentPrice = item.data.prices[0][1].toFixed(3);
    const currentCap = item.data.market_caps[0][1].toFixed(0);
    // console.log(
    //   [
    //     ...new Set(
    //       item.data.prices.map(
    //         (price) =>
    //           new Date(price[0]).getDate() +
    //           "/" +
    //           new Date(price[0]).getMonth() +
    //           "/" +
    //           new Date(price[0]).getFullYear()
    //       )
    //     ),
    //   ].filter((item, i) => i % 8 === 1)
    // );
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
            <AreaChart dataPrices={item.data.prices} />
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
