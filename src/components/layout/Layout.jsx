import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SideBarComponent from "../sidebar/SideBar";
import TopBarComponent from "../top-bar/TopBar";
import { StyledBoxMainSection } from "./styled";

const LayoutComponent = (/*{ children }*/) => {
  const location = useLocation();
  const isNonMobile = useMediaQuery("(min-width: 870px)");
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    !isNonMobile ? setIsOpen(false) : setIsOpen(true);
  }, [isNonMobile]);

  return location.pathname === "/register" || location.pathname === "/login" ? (
    <>
      <Outlet />
      {/* {children} */}
    </>
  ) : (
    <>
      <Box
        sx={{
          display: `${isNonMobile ? "flex" : "block"}`,
          height: "100%",
        }}
      >
        <SideBarComponent
          isNonMobile={isNonMobile}
          drawerWidth="248px"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <StyledBoxMainSection>
          <TopBarComponent
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isNonMobile={isNonMobile}
          />
          {/* {children} */}
          <Box
            sx={{
              marginTop: `${isNonMobile ? "0px" : "90px"}`,
            }}
          >
            <Outlet />
          </Box>
        </StyledBoxMainSection>
      </Box>
    </>
  );
};

export default LayoutComponent;
