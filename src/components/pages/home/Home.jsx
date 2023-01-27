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
  StyledBoxCardPricePercentText,
} from "./styled";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

const Home = () => {
  const { favoriteAssets } = useSelector((state) => state.assets);
  const dispatch = useDispatch();

  const favoriteAssetName = useMemo(() => ["bitcoin", "ethereum"], []);

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
    console.log(item.singleAsset);
    const currentPrice = item.singleAsset[0].current_price;
    const changePrice = +item.singleAsset
      .map((elem) => elem.price_change_percentage_24h)
      .join("");

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
              <StyledBoxCardPricePercentText
                className={changePrice < 0 && "pricePercentMinus"}
              >
                {changePrice > 0 ? <TrendingUpIcon /> : <TrendingDownIcon />}
                {changePrice.toFixed(2)}%
              </StyledBoxCardPricePercentText>
            </StyledBoxCardPriceBlock>
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <AreaChart dataPrices={item.data} />
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
