import { AccountCircle, Bookmark, Close, Home, Menu } from "@mui/icons-material";
import { AppBar, Box, CssBaseline, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme, Toolbar, IconButton } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import React, { useState } from "react";

function SideMenu () {
  const [isOpen,setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Box sx={{display:'flex',bgcolor:'black'}}>    
        <AppBar position="fixed" color="primary" sx={{zIndex:zIndex.drawer+1}}>
          <Toolbar>
            <IconButton
            size="large"
            edge='start'
            onClick={()=>{setIsOpen(!isOpen)}}
            >
              {isOpen ? <Close /> : <Menu/>}
            </IconButton>


            <Bookmark fontSize="large"/>
            <Typography variant="h6" component='div' sx={{flexGrow:1}} >
              SysBiblioteca
            </Typography>

            <IconButton
            size="large"
            edge='start'
            >
              <AccountCircle fontSize="large"/>
            </IconButton>
          </Toolbar>
        </AppBar>
        {/* MENU */}
        <Drawer
          variant="temporary"
          anchor="left"
          open={isOpen}
          onClose={()=>{setIsOpen(false)}}
          >
          {/* ALL MENU BOX  */}
          <Box
            bgcolor='primary.main'
            sx={{
              width:'250px',
              height:'100vh',
              display:'flex',
              flexDirection:'column',
              position:'relative',
            }}
            >
            {/* CONTENT BOX */}
            <Box flex={1}>
              <List component='nav'>
                <ListItemButton>
                  <ListItemIcon>
                    <Home/>
                  </ListItemIcon>
                  <ListItemText primary='Pagina Inicial'/>
                </ListItemButton>
              </List>
            </Box>
            
            
          </Box>
          
        </Drawer>
      </Box>
    </>
  )
  
}

export default SideMenu;