import {
  HomeOutlined,
  TrendingUpOutlined,
  MenuBookOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

export const navMenu = [
  {
    id: 1,
    name: "Главная",
    icon: <HomeOutlined />,
    path: "/",
  },
  {
    id: 2,
    name: "Избранное",
    icon: <TrendingUpOutlined />,
    path: "/watchlist",
  },
  {
    id: 3,
    name: "Новости",
    icon: <MenuBookOutlined />,
    path: "/news",
  },
  {
    id: 4,
    name: "Настройки",
    icon: <SettingsOutlined />,
    path: "/settings",
  },
];
