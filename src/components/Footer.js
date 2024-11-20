// src/components/Footer.js
import React from 'react';
import { Box, Grid, Typography, Link as MuiLink, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#ECECEC',
        color: 'text.secondary',
        py: 4,
        mt: 'auto',
        width: '100%',
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        
        {/* Company Info */}
        <Grid item xs={12} sm={3} textAlign="center">
          <Typography variant="h6" gutterBottom color="primary">
            Travellers Solution
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Your trusted partner in European travel experiences. We offer tailored tours, expert advice, and a commitment to making your travel unforgettable.
          </Typography>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} sm={3} textAlign="center">
          <Typography variant="h6" gutterBottom color="primary">
            Contact Us
          </Typography>
          <Box display="flex" alignItems="center" justifyContent="center" sx={{ mt: 1 }}>
            <PhoneIcon sx={{ mr: 1 }} />
            <Typography variant="body2">(123) 456-7890</Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center" sx={{ mt: 1 }}>
            <EmailIcon sx={{ mr: 1 }} />
            <MuiLink href="mailto:info@travellerssolution.com" color="inherit" underline="none">
              info@travellerssolution.com
            </MuiLink>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center" sx={{ mt: 1 }}>
            <LocationOnIcon sx={{ mr: 1 }} />
            <Typography variant="body2">123 Travel St, Adventure City, EU</Typography>
          </Box>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={2} textAlign="center">
          <Typography variant="h6" gutterBottom color="primary">
            Quick Links
          </Typography>
          <MuiLink href="/" color="inherit" underline="none" sx={{ display: 'block', my: 1 }}>
            Home
          </MuiLink>
          <MuiLink href="/about" color="inherit" underline="none" sx={{ display: 'block', my: 1 }}>
            About Us
          </MuiLink>
          <MuiLink href="/services" color="inherit" underline="none" sx={{ display: 'block', my: 1 }}>
            Services
          </MuiLink>
          <MuiLink href="/contactus" color="inherit" underline="none" sx={{ display: 'block', my: 1 }}>
          Contact Us
          </MuiLink>
        </Grid>

        {/* Social Media Links */}
        <Grid item xs={12} sm={3} textAlign="center">
          <Typography variant="h6" gutterBottom color="primary">
            Follow Us
          </Typography>
          <Box>
            <IconButton href="https://facebook.com" target="_blank" color="primary">
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" color="primary">
              <InstagramIcon />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" color="primary">
              <TwitterIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Box textAlign="center" mt={4}>
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} Travellers Solution. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
