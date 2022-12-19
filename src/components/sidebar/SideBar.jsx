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
  ChevronLeftOutlined, 
  ChevronRightOutlined, 
  LogoutRounded 
} from '@mui/icons-material';
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import FlexBetween from "../flex-between/FlexBetween";
import { navMenu } from "../../common/moks/navigate";

const SideBarComponent = (props) => {
  const [active, setActive] = useState('')
  const {isNonMobile, drawerWidth, isOpen, setIsOpen} = props
  const {pathname} = useLocation()
  const navigate = useNavigate()
  const theme = useTheme()

  useEffect(() => {
    setActive(pathname.slice(1))
  }, [pathname])

  const renderNavMenu = navMenu.map(({id, name, icon, path}) => (
    <ListItem key={id}>
      <ListItemButton onClick={() => navigate(`${path}`)}>
        <ListItemIcon sx={{minWidth: '32px'}}>
          {icon}
        </ListItemIcon>
        <ListItemText sx={{mb: 0}}>
          <Typography variant='body1'>
            {name}
          </Typography>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  ))

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
              <List>{renderNavMenu}</List>
            </Box>
          </Box>
        </Drawer>
      )}
    </Box>
  )
}

export default SideBarComponent;