import React, { useEffect, useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, CardMedia } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation, useNavigate } from 'react-router-dom';  // Assuming you're using react-router-dom for navigation
import logo from "../assets/images/Travelers-Solution-removebg-preview.png"
const Header = () => {
  const location =  useLocation();
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);

console.log("location",location.pathname==="/")
  const [bgColor, setBgColor] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Change the color based on scroll position
      if (scrollPosition > 50) {
        setBgColor('#fff'); // Change to blue when scrolling
      } else {
        setBgColor('transparent'); // Keep transparent initially
      }
    };

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  // Toggle the Drawer open/close
  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

  return (
    <>
      {/* AppBar (Header) */}
      <AppBar 
        position="sticky"  // Makes the header sticky
        sx={{
          top: 0,  // Keeps it at the top
          left: 0,
          right: 0,
          zIndex: 10,  // Ensures header stays on top of other content
          backgroundColor:location.pathname==="/" ?  bgColor:"#fff",  // Primary color for background
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',  // Spaces out logo and nav items
            padding: { xs: '10px 20px', md: '10px 40px' },  // Padding for mobile and desktop
            borderBottom:"0.5px solid #ea7f1d "
          }}
        >
          {/* Logo */}
          <Typography variant="h6" sx={{ flexGrow: 1 ,color: location.pathname==="/" ?"#00796b":"#f7f7f7"}}>
            <CardMedia
            component={"img"}
            image={logo}
            onClick={()=>navigate("/")}
            sx={{width:{xs:"35%",sm:"20%",md:"20%",lg:"20%"},cursor:"pointer"}}
            />
          </Typography>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <Button sx={{color: location.pathname==="/" ?"primary":"primary"}} component={Link} to="/">Home</Button>
            <Button sx={{color: location.pathname==="/" ?"primary":"primary"}} component={Link} to="/about">About Us</Button>
            <Button sx={{color: location.pathname==="/" ?"primary":"primary"}} component={Link} to="/services">Services</Button>
            <Button sx={{color: location.pathname==="/" ?"primary":"primary"}} component={Link} to="/destinations">Destinations</Button>
          </Box>

          {/* Hamburger Icon for Mobile */}
          <IconButton 
            aria-label="menu" 
            onClick={toggleDrawer(true)} 
            sx={{ display: { xs: 'block', md: 'none' } ,color: bgColor ==="transparent"?"#000":"#000" }} // Show on mobile
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="right"  // You can change this to "left" if you prefer the drawer from the left side
        open={openDrawer}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}  // Close the drawer when clicking on a link
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/about">
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem button component={Link} to="/services">
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem button component={Link} to="/destinations">
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
