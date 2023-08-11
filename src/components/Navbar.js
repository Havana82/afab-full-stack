import React, { useState } from "react";
import { AppBar, Box, Drawer, List, ListItem, Toolbar, Typography, styled, ListItemButton, IconButton, Badge, Link } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import log from '../images/log.jpeg';
import Search from "./Search";
const Navbar = (props) =>{
    
    const StyledToolbar = styled(Toolbar)(
        {
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }
    )
    const MenuBox = styled(Box)({
        display:'flex',
        gap:30,
        cursor:'pointer'
    })

    const MenuItems = [
        {Name:"Home", Link: "/"},
        {Name:"About Us", Link: "/about"},
        {Name:"Products", Link: "/products"},
        {Name:"Contact", Link: "/contact"},

    ]

    const [openMenu, setOpenMenu] = useState(false)

    return <><AppBar color="default" position="sticky" elevation={1}>
        < StyledToolbar>
            <Box flex={{xs:25, md:1}}> 
            <img src={log} alt="pix" style={{width:'6vh'}} /> <Typography variant="h4" color={'tomato'}
            sx={{fontFamily:'Splash, cursive', textAlign:{xs:'center', md:'left'}}} >Afab African Marketplace</Typography>
            </Box> 
            <MenuBox flex={1} sx={{display:{xs:'none', md:'flex'}}}>
            
            {MenuItems.map((items)=>(
                <Link href={items.Link} sx={{textDecoration:'none', color:'black', "&:hover":{
                    color:'green',
                    transition:`all 0.45s ease`
                }}}> <Typography variant="body2" fontSize={'18px'}>
                    {items.Name}
                </Typography></Link>
            ))}
            <div>
            <Link href='/cart' sx={{textDecoration:'none'}}> 
                <IconButton aria-label="Cart Items" color='inherit'>
                    <Badge badgeContent={props.itemCount} color='secondary'>
                <ShoppingCartIcon/>
                    </Badge>
                </IconButton>
                </Link>
            </div>
            </MenuBox>
            <Box flex={1}>
            <Search/>
            <MenuIcon sx={{display:{xs:'flex', md:'none'}, cursor:'pointer'}} onClick={()=>setOpenMenu(!openMenu)} />
            </Box>
        </StyledToolbar>
        <Drawer
      anchor={'top'}
      open={openMenu}
     onClose={()=>setOpenMenu(!openMenu)}
    >
    <List>
  
        <ListItem>
        {MenuItems.map((items)=>(
            <Link href={items.Link} sx={{textDecoration:'none', color:'black'}}> 
                <ListItemButton variant="body2"  fontSize={'18px'}>
                    {items.Name}
                </ListItemButton>
                </Link>
            ))}

            <IconButton aria-label="Cart Items" color='inherit'>
                    <Badge badgeContent={props.itemCount} color='secondary'>
                    <Link href='/cart' sx={{textDecoration:'none'}}>
                        <ShoppingCartIcon/>
                    </Link>
                    </Badge>
                </IconButton>
        </ListItem>

    </List>

    </Drawer>
    </AppBar>;
    <Box sx={{display:'flex', justifyContent:'center', flexDirection:{xs:'column', md:'row'}}}>
    <Typography align='center' variant="h4" mr={1} sx={{fontFamily:'cursive'}}>
    <i> You can trust us for:</i>
    </Typography>
    <Typography align='center' variant="h4" color={'tomato'} sx={{fontFamily:'Splash, cursive'}}>
        Quality Products, Organically grown!
    </Typography>
    </Box>
  
    </>
};


export default Navbar;