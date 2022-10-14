import { AccountCircle, Bookmark, Close, Home, Menu } from "@mui/icons-material";
import { AppBar, Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme, Toolbar, IconButton, Icon } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import React, { useState } from "react";
import { itemsMenu } from "./itemsSideMenu";

function SideMenu () {
  const [isOpen,setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Box sx={{display:'flex'}}>    
        <AppBar position="fixed" color="primary" sx={{zIndex:zIndex.drawer+1}}>
          <Toolbar>
            <IconButton
            size="large"
            edge='start'
            aria-label="open sideMenu"
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
            aria-label="open personMenu"
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
          elevation={3}
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
            <Toolbar />
            {/* CONTENT BOX */}
            <Box flex={1}>
              <List>
              {itemsMenu.map((value,index)=>(
                <ListItemButton>
                  <ListItemIcon>
                    {value.icon}
                  </ListItemIcon>
                  <ListItemText primary={value.name_category}/>
                </ListItemButton>
              ))}
              </List>
            </Box>
          </Box>
        </Drawer>
        <Toolbar />
      </Box>
        <Typography variant="h1" color="initial">Conteudo</Typography>
    </>
  )
  
}

export default SideMenu;