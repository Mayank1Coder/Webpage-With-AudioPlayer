import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button, Container } from '@mui/material';
import { isValidElement } from 'react';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
    return (
      <Box sx={{ display: 'flex' , bgcolor:`Green`}}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              <Button variant="h6" >Login</Button>
              <Button variant="h6" >Sign up </Button>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <List>
            {[`Home`,`Search`].map((val, index) => (
              <ListItem key={val} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <HomeIcon/> : <SearchIcon/>}
                  </ListItemIcon>
                  <ListItemText primary={val} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['YourLibrary', 'Favorite',].map((val, index) => (
              <ListItem key={isValidElement} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <LibraryAddIcon/> : <FavoriteIcon/>}
                  </ListItemIcon>
                  <ListItemText primary={val} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
        </Box>
      </Box>
    );
  }
<button onClick={() => window.location.href = './Welcome'}>Go Back</button>

  