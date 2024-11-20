// src/pages/ContactUs.js
import { Container, Typography, Box,Link as MuiLink,  TextField, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ServicesImage from '../assets/images/images/contactus.jpg';

const BackgroundContainer = styled(Container)(({ theme }) => ({
  backgroundImage: 'url(/path-to-your-background-image.jpg)', // replace with your image path
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  // padding: theme.spacing(4),
  // borderRadius: theme.shape.borderRadius,
}));

function ContactUs() {
  return (
    <>
       <Box
          sx={{
            position: "relative",
            textAlign: "center",
            height: "25rem",
          }}
        >
          <Box
            component="img"
            src={ServicesImage}
            sx={{ width: "100%", height: "100%", objectFit: "" }}
          />
          <Typography
            variant="h4"
            sx={{
              position: "absolute",
              top: "75%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              fontWeight: "bold",
              color: "white", // Ensure text is visible on the image
            }}
          >
            Contact Us
          </Typography>
        </Box>

      <Box sx={{ my: { xs: 2, md: 4 }, px: { xs: 2, md: 4 } }}>
        

        {/* Contact Form */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Contact Form
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField label="Name" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Email" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Message" fullWidth variant="outlined" multiline rows={4} />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" sx={{color:"white"}} >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Contact Details */}
        <Box sx={{ mb: 4 }}>
        <Grid item xs={12} sm={3} textAlign="center">
          <Typography variant="h6" gutterBottom color="primary">
            Contact Us
          </Typography>
          <Box display="flex" alignItems="center" justifyContent="center" sx={{ mt: 1 }}>
            <PhoneIcon color='primary' sx={{ mr: 1, }} />
            <Typography variant="body2">(123) 456-7890</Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center" sx={{ mt: 1 }}>
            <EmailIcon color='primary' sx={{ mr: 1 }} />
            <MuiLink   href="mailto:info@travellerssolution.com"  underline="none">
              <Typography  variant="body2">
              info@travellerssolution.com
              </Typography>
            </MuiLink>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center" sx={{ mt: 1 }}>
            <LocationOnIcon color='primary' sx={{ mr: 1 }} />
            <Typography variant="body2">123 Travel St, Adventure City, EU</Typography>
          </Box>
        </Grid>
       </Box>

        {/* Embedded Google Map */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Our Location
          </Typography>
          <Box
            component="iframe"
            width="100%"
            height="500"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBhAbFGb3Y99hMoltzcdFRCmPJq04N-sqs&q=19.0760,72.8777"
            style={{ border: 0,height:"20rem" }}
            allowFullScreen="true"
            loading="lazy"
          ></Box>
        </Box>
      </Box>
    </>
  );
}

export default ContactUs;
