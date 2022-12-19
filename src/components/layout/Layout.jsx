import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import SideBarComponent from "../sidebar/SideBar";
import TopBarComponent from "../top-bar/TopBar";


const LayoutComponent = ({children}) => {
  const location = useLocation()
  const isNonMobile = useMediaQuery('(min-width: 600px)')
  const [isOpen, setIsOpen] = useState(true)

  return (
    
        location.pathname === '/register' || location.pathname === '/login' 
        ? (
            <>
              {children}
            </>
        ) : (
            <>
              <Box sx={{
                display:{isNonMobile} ? 'flex' : 'block', 
                height: '100%'}}>
                <SideBarComponent 
                  isNonMobile={isNonMobile} 
                  drawerWidth='248px'
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                />
                <Box sx={{width:'100%'}}>
                  <TopBarComponent />
                  {children}
                </Box>
              </Box>
            </>
        )    
  )
}

export default LayoutComponent