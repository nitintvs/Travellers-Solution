// src/pages/Services.js
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  CardMedia,
} from "@mui/material";
import IndependeImage from "../assets/images/images/Free Independent Travel (2).jpg";
import AdhocTours from "../assets/images/images/Adhoc tours.jpg";
import VanTours from "../assets/images/images/Van tours.jpg";
import SelfDriving from "../assets/images/images/Self driving tours.jpg";
import Swissrail from "../assets/images/images/Swiss rail.jpg";
import ServicesImage from "../assets/images/images/OurServices.png";
function Services() {
  return (
    <>
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
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Typography
            variant="h4"
            sx={{
              position: "absolute",
              top: "70%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              fontWeight: "bold",
              color: "white", // Ensure text is visible on the image
            }}
          >
            Our Services
          </Typography>
        </Box>

        {/* Service List with Alternating Layout */}
        <Box>
          {/* Free Independent Travel (FIT) */}
          <Grid container spacing={0}>
            <Grid  xs={12} md={6}>
              <CardMedia
                component={"img"}
                src={IndependeImage}
                alt="Free Independent Travel"
                sx={{ width: "100%", objectFit: "cover" ,height:"25rem" }}
              />
            </Grid>
            <Grid  xs={12} md={6} sx={{display:"flex",flexDirection:"column", p:5, justifyContent:"center",alignItems:"flex-start"}}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                Free Independent Travel (FIT)
              </Typography>
              <Typography variant="body1">
                Our Free Independent Travel (FIT) service offers customizable
                travel experiences tailored to your preferences. Enjoy a
                personalized itinerary with recommendations on attractions,
                accommodations, and dining, all designed to create a unique
                adventure.
              </Typography>
            </Grid>
          </Grid>

          {/* Ad-hoc Tours */}
          <Grid container spacing={0} direction="row-reverse" >
            <Grid  xs={12} md={6}>
              <CardMedia
                component={"img"}
                src={AdhocTours}
                alt="Free Independent Travel"
                sx={{ width: "100%", objectFit: "cover",height:"25rem" }}
              />
            </Grid>
            <Grid  xs={12} md={6} sx={{display:"flex",flexDirection:"column", p:5, justifyContent:"center",alignItems:"flex-start"}}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                Ad-hoc Tours
              </Typography>
              <Typography variant="body1">
                Our Ad-hoc Tours are specially organized with flexible
                itineraries to suit your needs. Whether you're interested in
                cultural landmarks, local experiences, or hidden gems, we craft
                a tour that aligns with your travel aspirations.
              </Typography>
            </Grid>
          </Grid>

          {/* Van Tours */}
          <Grid container spacing={0} >
            <Grid  xs={12} md={6}>
              <CardMedia
                component={"img"}
                src={VanTours}
                alt="Free Independent Travel"
                sx={{ width: "100%", objectFit: "cover",height:"25rem" }}
              />
            </Grid>
            <Grid  xs={12} md={6} sx={{display:"flex",flexDirection:"column", p:5, justifyContent:"center",alignItems:"flex-start"}}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                Van Tours
              </Typography>
              <Typography variant="body1">
                Experience the best of small group travel with our Van Tours.
                Our tours provide personalized services, allowing you to connect
                with other travelers and enjoy an intimate experience as you
                explore scenic routes and historic sites.
              </Typography>
            </Grid>
          </Grid>

          {/* Self-drive Tours */}
          <Grid container spacing={0} direction="row-reverse" >
            <Grid  xs={12} md={6} >
              <CardMedia
                component={"img"}
                src={SelfDriving}
                alt="Free Independent Travel"
                sx={{ width: "100%", objectFit: "cover",height:"25rem" }}
              />
            </Grid>
            <Grid  xs={12} md={6} sx={{display:"flex",flexDirection:"column", p:5, justifyContent:"center",alignItems:"flex-start"}}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                Self-drive Tours
              </Typography>
              <Typography variant="body1">
                Discover the freedom of Self-drive Tours, with a thoughtfully
                planned route tailored to your interests. Enjoy the convenience
                of arranged accommodations along the way, allowing you to focus
                on the journey at your own pace.
              </Typography>
            </Grid>
          </Grid>

          {/* Rail Europe & Swiss Products */}
          <Grid container spacing={0} >
            <Grid  xs={12} md={6}>
              <CardMedia
                component={"img"}
                src={Swissrail}
                alt="Free Independent Travel"
                sx={{ width: "100%", objectFit: "cover",height:"25rem" }}
              />
            </Grid>
            <Grid  xs={12} md={6} sx={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"flex-start", p:5}}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                Rail Europe & Swiss Products
              </Typography>
              <Typography variant="body1">
                Explore Europe like never before with our Rail Europe and Swiss
                travel products. Enjoy unlimited access to Switzerland's
                world-famous rail network, covering breathtaking landscapes,
                charming towns, and cultural landmarks.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </>
    </>
  );
}

export default Services;
