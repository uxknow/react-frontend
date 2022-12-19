import { Box, Grid, IconButton, InputBase, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ColorModeContext, tokens } from "../../theme";
import { useContext } from "react";

const TopBarComponent = () => {
  const {user} = useSelector(state => state.auth.user)
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  
  return (
    <Box display='flex' justifyContent='space-between' alignItems='center' px="48px" py="24px">
      <Grid>Welcome {user?.firstName}</Grid>
      <Box display='flex' alignItems='center'>
        <Grid sx={{pr: '28px', borderRight:  `1px solid ${colors.gray.DEFAULT}`}}>
            <IconButton onClick={colorMode.toggleColorMode} sx={{mr: '22px'}}>
              {theme.palette.mode === 'dark' ? (<DarkModeIcon/>) : (<LightModeIcon/>)}
            </IconButton>
            <IconButton>
              <NotificationsNoneIcon />
            </IconButton>
        </Grid>
        <Grid sx={{
          display: 'flex',
          backgroundColor: `${colors.primary[600]}`,
          borderRadius: '8px',
          ml: '28px'
        }}>
          <IconButton  sx={{marginLeft: '4px', '&:hover': {backgroundColor: 'transparent'}}}>
            <SearchIcon />
          </IconButton>
          <InputBase sx={{py:'12px', pr:'16px', width: [100, 210, 388]}} placeholder='Поиск'/>
        </Grid>
      </Box>
    </Box>
  )
}

export default TopBarComponent;