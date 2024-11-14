// src/pages/Services.js
import { Container, Typography, Box, Grid, Paper } from '@mui/material';

function Services() {
  return (
    <Container>
    <>
      {/* "Our Services" Header Section with Background */}
      <Box
        sx={{
          py: 4,
          color: "white",
          textAlign: "center",
          backgroundImage: 'url("https://your-image-url.com")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography variant="h4">Our Services</Typography>
      </Box>

      {/* Service List with Alternating Layout */}
      <Box>
        {/* Free Independent Travel (FIT) */}
        <Grid container spacing={4} sx={{ my: 2 }}>
          <Grid item xs={12} md={6}>
            <img
              src="https://via.placeholder.com/300"
              alt="Free Independent Travel"
              width="100%"
            />
          </Grid>
          <Grid item xs={12} md={6}>
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
        <Grid container spacing={4} direction="row-reverse" sx={{ my: 2 }}>
          <Grid item xs={12} md={6}>
            <img
              src="https://via.placeholder.com/300"
              alt="Ad-hoc Tours"
              width="100%"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Ad-hoc Tours
            </Typography>
            <Typography variant="body1">
              Our Ad-hoc Tours are specially organized with flexible itineraries
              to suit your needs. Whether you're interested in cultural
              landmarks, local experiences, or hidden gems, we craft a tour that
              aligns with your travel aspirations.
            </Typography>
          </Grid>
        </Grid>

        {/* Van Tours */}
        <Grid container spacing={4} sx={{ my: 2 }}>
          <Grid item xs={12} md={6}>
            <img
              src="https://via.placeholder.com/300"
              alt="Van Tours"
              width="100%"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Van Tours
            </Typography>
            <Typography variant="body1">
              Experience the best of small group travel with our Van Tours. Our
              tours provide personalized services, allowing you to connect with
              other travelers and enjoy an intimate experience as you explore
              scenic routes and historic sites.
            </Typography>
          </Grid>
        </Grid>

        {/* Self-drive Tours */}
        <Grid container spacing={4} direction="row-reverse" sx={{ my: 2 }}>
          <Grid item xs={12} md={6}>
            <img
              src="https://via.placeholder.com/300"
              alt="Self-drive Tours"
              width="100%"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Self-drive Tours
            </Typography>
            <Typography variant="body1">
              Discover the freedom of Self-drive Tours, with a thoughtfully
              planned route tailored to your interests. Enjoy the convenience of
              arranged accommodations along the way, allowing you to focus on
              the journey at your own pace.
            </Typography>
          </Grid>
        </Grid>

        {/* Rail Europe & Swiss Products */}
        <Grid container spacing={4} sx={{ my: 2 }}>
          <Grid item xs={12} md={6}>
            <img
              src="https://via.placeholder.com/300"
              alt="Rail Europe & Swiss Products"
              width="100%"
            />
          </Grid>
          <Grid item xs={12} md={6}>
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
      </Container>
  );
}

export default Services;
