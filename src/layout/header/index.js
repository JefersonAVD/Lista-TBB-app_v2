import { AppBar, IconButton, Toolbar, Menu } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const FilterMenu = ({children}) =>{
    const [navToogle, setNavToogle] = useState(null);
    const [menuIcon,changeMenuIcon] = useState(false);

    const openMenu = (evt)=>{
        evt.preventDefault();
        setNavToogle(document.querySelector("#header-app"));
        changeMenuIcon(true)
    }
    const closeMenu = ()=>{
        setNavToogle(null)
        changeMenuIcon(false)
    }
    
    return(
            <AppBar position="sticky" id="header-app" sx={{backdropFilter:"blur(10px)",}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters >
                        <Box justifyContent="end" sx={{flexGrow:1, display:{xs:'flex',md:'none'}}}>
                            <IconButton
                                aria-controls="menu-filter"
                                aria-haspopup="true"
                                onClick={openMenu}
                            >
                                {
                                    menuIcon ? <MenuOpenIcon sx={{color:"#fff"}}/>  : <MenuIcon sx={{color:"#fff"}}/>
                                }
                                
                                
                            </IconButton>
                            <Menu
                                id="menu-filter"
                                anchorEl={navToogle}
                                open={Boolean(navToogle)}
                                onClose={closeMenu}
                                sx={{display:{xs:'block',md:'none'}}}
                                PaperProps={{
                                    sx:{width:"100vw",background:"#00000090",backdropFilter:"blur(20px)",maxWidth:"100%",left:"0!important"}
                                }}
                            >
                            
                                {children}
                            
                        
                            </Menu>
                        </Box>
                        <Box py={1} sx={{flexGrow:1, display:{xs:'none',md:'flex'}}}>
                            {children}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
    );
}

export default FilterMenu;