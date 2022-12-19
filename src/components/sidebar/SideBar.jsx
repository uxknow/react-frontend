import {
  Box, 
  Drawer, 
  Divider, 
  IconButton, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
  Typography,
  useTheme
} from "@mui/material";
import { 
  HomeOutlined, 
  ChevronLeftOutlined, 
  ChevronRightOutlined, 
  TrendingUpOutlined,
  MenuBookOutlined,
  SettingsOutlined,
  LogoutRounded 
} from '@mui/icons-material';
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import FlexBetween from "../flex-between/FlexBetween";

const SideBarComponent = (props) => {
  const [active, setActive] = useState('')
  const {isNonMobile, drawerWidth, isOpen, setIsOpen} = props
  const {pathname} = useLocation()
  const navigate = useNavigate()
  const theme = useTheme()

  useEffect(() => {
    setActive(pathname.slice(1))
  }, [pathname])

  return (
    <Box component='nav'>
      {isOpen && (
        <Drawer
          open={isOpen} 
          onClose={() => setIsOpen(false)}
          variant='persistent'
          anchor='left'
          sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': {
              color: theme.palette.secondary.main,
              backgroundColor: theme.palette.primary.main,
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
        >
          <Box width='100%'>
            <Box>
              <FlexBetween>
                <Box display='flex' alignItems='center' gap='10px'>
                  <Typography>Demo</Typography>
                  {!isNonMobile && (
                    <IconButton onClick={() => setIsOpen(!isOpen)}>
                      <ChevronLeftOutlined />
                    </IconButton>
                  )}
                </Box>
              </FlexBetween>
            </Box>
          </Box>
        </Drawer>
      )}
    </Box>
  )
}

export default SideBarComponent;