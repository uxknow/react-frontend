import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
  useTheme,
} from "@mui/material";
import { ChevronLeftOutlined, LogoutRounded } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { navMenu } from "../../common/moks/navigate";
import Logo from "../../assets/images/sidebar/logo.svg";
import {
  StyledBoxLogo,
  StyledBoxNavBlock,
  StyledListItemButtonNav,
  StyledBoxFlexBetween,
  StyledListItemIconNav,
  StyledListItemTextNav,
  StyledListNavItems,
  StyledTypographyLogo,
} from "./styled";

const SideBarComponent = (props) => {
  const [active, setActive] = useState("");
  const { isNonMobile, drawerWidth, isOpen, setIsOpen } = props;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  const renderNavMenu = navMenu.map(({ id, name, icon, path }) => (
    <ListItem key={id}>
      <StyledListItemButtonNav
        onClick={() => navigate(`${path}`)}
        className={active === path ? "active" : ""}
      >
        <StyledListItemIconNav>{icon}</StyledListItemIconNav>
        <StyledListItemTextNav>
          <Typography variant="body1">{name}</Typography>
        </StyledListItemTextNav>
      </StyledListItemButtonNav>
    </ListItem>
  ));

  return (
    <Box component="nav">
      {isOpen && (
        <Drawer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary.main,
              backgroundColor: theme.palette.primary.main,
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <StyledBoxNavBlock>
              <Box>
                <StyledBoxLogo>
                  <StyledBoxFlexBetween>
                    <img src={Logo} alt="logo-icon" />
                    <StyledTypographyLogo variant="h1">
                      Demo
                    </StyledTypographyLogo>
                  </StyledBoxFlexBetween>
                  {!isNonMobile && (
                    <IconButton onClick={() => setIsOpen(!isOpen)}>
                      <ChevronLeftOutlined />
                    </IconButton>
                  )}
                </StyledBoxLogo>
              </Box>
              <StyledListNavItems>{renderNavMenu}</StyledListNavItems>
            </StyledBoxNavBlock>
            <Box width="100%">
              <List>
                <ListItem>
                  <StyledListItemButtonNav>
                    <StyledListItemIconNav>
                      <LogoutRounded />
                    </StyledListItemIconNav>
                    <StyledListItemTextNav>
                      <Typography>Logout</Typography>
                    </StyledListItemTextNav>
                  </StyledListItemButtonNav>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default SideBarComponent;
