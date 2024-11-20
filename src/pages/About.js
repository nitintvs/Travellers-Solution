// src/pages/About.js
import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Link,
  CardMedia,
} from "@mui/material";
import Slider from "react-slick";
import dummyimage from "../assets/images/testimonials/leio-mclaren-L2dTmhQzx4Q-unsplash.jpg";
import dummypartner1 from "../assets/images/parteners/SWO_Logo_Color.png";
import dummypartner2 from "../assets/images/parteners/etoa.png";
import dummypartner3 from "../assets/images/parteners/historic-royal-places.png";
import dummypartner4 from "../assets/images/parteners/iata.png";
import dummypartner5 from "../assets/images/parteners/ihg-hotels.png";
import dummypartner6 from "../assets/images/parteners/london-eye.png";
import dummypartner7 from "../assets/images/parteners/ukinbound.png";
import dummypartner8 from "../assets/images/parteners/ustoa (1).png";
import Aboutusbanner from "../assets/images/images/Aboutus.jpg";
import MissionImage from "../assets/images/images/Mission.jpg";
import Companyhistory from "../assets/images/images/companyhistory.jpg";
import { testimonials } from "./Home";

function About() {
  const teamSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  const partnersSettings = {
    dots: true,
    cssEase: "ease-in-out",
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <>
      {/* About Travellers Solution Section with Background Image */}
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          height: "20rem",
        }}
      >
        <Box
          component="img"
          src={Aboutusbanner}
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: "80%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: { xs: "1.8rem", md: "2.5rem" },
            fontWeight: "bold",
            color: "white", // Ensure text is visible on the image
          }}
        >
          About Travellers Solution
        </Typography>
      </Box>
      {/* Company History with Left Text and Right Image */}
      <Box >
        <Grid container spacing={0} alignItems="center">
          <Grid  xs={12} md={6} p={5}>
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontWeight: "bold",
              }}
            >
              Company History
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "1rem", md: "1.1rem" } }}
            >
              Established in 2010, Travellers Solution has been dedicated to
              creating exceptional travel experiences across Europe...
            </Typography>
          </Grid>
          <Grid  xs={12} md={6}>
            <Box
              component="img"
              src={Companyhistory}
              alt="Company History"
              sx={{ width: "100%", objectFit:"cover", height:"25rem" }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Vision and Mission with Right Image and Left Text */}
      <Box >
        <Grid container spacing={0} alignItems="center">
          <Grid  xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Box
              component="img"
              src={MissionImage}
              alt="Vision and Mission"
              sx={{ width: "100%", objectFit:"cover",  height:"25rem" }}
            />
          </Grid>
          <Grid  xs={12} md={6} order={{ xs: 1, md: 2 }} p={5}>
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontWeight: "bold",
              }}
            >
              Our Vision and Mission
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "1rem", md: "1.1rem" } }}
            >
              Our vision is to be the most trusted travel companion, inspiring
              journeys that embrace culture, adventure, and discovery...
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Our Team Carousel */}
      <Box sx={{ my: { xs: 3, md: 5 } }}>
        <Typography
          variant="h5"
          sx={{
            mb: 2,
            textAlign: "center",
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: "bold",
          }}
        >
          Our Team
        </Typography>
        <Slider {...teamSettings}>
          {testimonials.map((member,index) => (
            <Card
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                p: 0,
                width: "98% !important",
                margin: "auto",
                background:"#ECECEC",
                boxShadow:"none"
              }}
              key={index}
            >
              <CardMedia
                component={"img"}
                sx={{
                  width: "100%",
                  objectFit: "cover",
                  height: "20rem",
                  mb: 2,
                }}
                src={member.avatar}
                alt={`Team Member ${member.name}`}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.25rem" },
                    fontWeight: "bold",
                  }}
                >
                  {member.name}
                </Typography>
                <Typography variant="body2">
                 {member.expertise}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </Box>

      {/* Partners Carousel */}
      <Box sx={{ my: { xs: 3, md: 5 } }}>
        <Typography
          variant="h5"
          sx={{
            mb: 2,
            textAlign: "center",
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: "bold",
          }}
        >
          Our Partners
        </Typography>
        <Slider {...partnersSettings}>
          {[
            dummypartner1,
            dummypartner2,
            dummypartner3,
            dummypartner4,
            dummypartner5,
            dummypartner6,
            dummypartner7,
            dummypartner8,
          ].map((partner, index) => (
            <Box
              key={index}
              sx={{
                px: 2,
                width: "98% !important",
                margin: "auto",
              }}
            >
              <Link
                href={`https://example.com/${partner}`}
                target="_blank"
                rel="noopener"
              >
                <Box
                  component="img"
                  src={partner}
                  alt={`Partner ${index + 1}`}
                  sx={{
                    width: "100%",
                    height: "10rem",
                    objectFit: "contain",
                    // filter: "grayscale(80%)",
                    transition: "filter 0.3s",
                    // "&:hover": { filter: "grayscale(0%)" },
                  }}
                />
              </Link>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}

export default About;
