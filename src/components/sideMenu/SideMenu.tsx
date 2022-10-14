import { Bookmark, Home } from "@mui/icons-material";
import { AppBar, Box, CssBaseline, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme, Toolbar } from "@mui/material";
import React, { useState } from "react";

function SideMenu () {
  const [isOpen,setIsOpen] = useState<boolean>(true);

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6">
            
          </Typography>
        </Toolbar>
      </AppBar>
      {/* MENU */}
      <Drawer
        variant="permanent"
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
          }}
        >
          {/* HEADER BOX */}
          <Box
          sx={{
            width:'100%',
            height:'10%',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
          }}
          >
            <Bookmark fontSize="large"/>
            <Typography variant="h6" component='div'>
              SysBiblioteca
            </Typography>
          </Box>

          <Divider />
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
    </>
  )
  
}

export default SideMenu;