// src/pages/Home.js
import { Container, Typography, Box, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import Slider from 'react-slick';
import testimonial1 from "../assets/images/testimonials/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg"
import testimonial2 from "../assets/images/testimonials/ali-mammadli-ngAuVVO1lQ4-unsplash.jpg"
import testimonial3 from "../assets/images/testimonials/diego-hernandez-MSepzbKFz10-unsplash.jpg"
import testimonial5 from "../assets/images/testimonials/leio-mclaren-L2dTmhQzx4Q-unsplash.jpg"
import testimonial6 from "../assets/images/testimonials/mario-la-pergola-8EPtzH-utU4-unsplash.jpg"
import testimonial7 from "../assets/images/testimonials/masi-mohammadi-Ij22fLzX3ak-unsplash.jpg"
import testimonial8 from "../assets/images/testimonials/oguz-yagiz-kara-MZf0mI14RI0-unsplash.jpg"
import testimonial9 from "../assets/images/testimonials/podmatch-CgCH4V4cNGk-unsplash.jpg"
import testimonial10 from "../assets/images/testimonials/podmatch-GEnCnYhA1J4-unsplash.jpg"
import testimonial11 from "../assets/images/testimonials/tom-prejeant-x5I4yCFiZds-unsplash.jpg"


const carouselImages = [
    '../home/home1.jpg',  // Replace with actual image paths
    '../home/home2.jpg',  // Replace with actual image paths
    '../home/home3.jpg',  // Replace with actual image paths
    '../home/home4.jpg',  // Replace with actual image paths
];

const testimonials = [
    { name: "John Doe", testimonial: "Fantastic experience! Highly recommended!", avatar:testimonial1  },
    { name: "Jane Smith", testimonial: "The best travel company for European tours!", avatar: testimonial2 },
    { name: "Sam Wilson", testimonial: "Unforgettable memories with Travellers Solution!", avatar: testimonial3},
    { name: "Jane Smith", testimonial: "The best travel company for European tours!", avatar: testimonial5 },
    { name: "Sam Wilson", testimonial: "Unforgettable memories with Travellers Solution!", avatar: testimonial6},
    { name: "John Doe", testimonial: "Fantastic experience! Highly recommended!", avatar:testimonial7  },
    { name: "Jane Smith", testimonial: "The best travel company for European tours!", avatar: testimonial8 },
    { name: "Sam Wilson", testimonial: "Unforgettable memories with Travellers Solution!", avatar: testimonial9},
    { name: "John Doe", testimonial: "Fantastic experience! Highly recommended!", avatar:testimonial10  },
    { name: "Jane Smith", testimonial: "The best travel company for European tours!", avatar: testimonial11 }
];

const tours = [
    { title: "Tour 1", image: "https://source.unsplash.com/random?europe-travel-1", description: "Explore the beautiful sights of Europe." },
    { title: "Tour 2", image: "https://source.unsplash.com/random?europe-travel-2", description: "Discover the rich history of European cities." },
    { title: "Tour 3", image: "https://source.unsplash.com/random?europe-travel-3", description: "Enjoy a relaxing vacation in scenic Europe." },
];

function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,  // By default, show 1 slide
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "ease-in-out",     // Automatically transition every 3 seconds
        arrows: false,          // Show arrows for sliding
        // prevArrow: (
        //     <Button sx={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}>
        //         &#10094;
        //     </Button>
        // ),
        // nextArrow: (
        //     <Button sx={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}>
        //         &#10095;
        //     </Button>
        // ),
        responsive: [
            {
                breakpoint: 1024,  // Tablet and larger screens (default view)
                settings: {
                    slidesToShow: 1,  // 1 slide for medium and large screens
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,   // Small screens (mobile phones)
                settings: {
                    slidesToShow: 1,  // 1 slide for mobile screens
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 480,   // Extra small screens (very small mobile)
                settings: {
                    slidesToShow: 1,  // 1 slide for very small screens
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };
    const settingsTestimonials = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,  // By default, show 1 slide
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,   // Automatically transition every 3 seconds
        arrows: false,          // Show arrows for sliding
        cssEase: "ease-in-out",
        responsive: [
            {
                breakpoint: 1024,  // Tablet and larger screens (default view)
                settings: {
                    slidesToShow: 2,  // 1 slide for medium and large screens
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,   // Small screens (mobile phones)
                settings: {
                    slidesToShow: 2,  // 1 slide for mobile screens
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 480,   // Extra small screens (very small mobile)
                settings: {
                    slidesToShow: 1,  // 1 slide for very small screens
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };
    const settingsTours = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,  // By default, show 1 slide
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,   // Automatically transition every 3 seconds
        arrows: false,          // Show arrows for sliding
        cssEase: "ease-in-out",
        responsive: [
            {
                breakpoint: 1024,  // Tablet and larger screens (default view)
                settings: {
                    slidesToShow: 2,  // 1 slide for medium and large screens
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,   // Small screens (mobile phones)
                settings: {
                    slidesToShow: 2,  // 1 slide for mobile screens
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 480,   // Extra small screens (very small mobile)
                settings: {
                    slidesToShow: 1,  // 1 slide for very small screens
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };

    return (
        <>
            {/* Hero Section */}
            <Box sx={{ width: '100%', height: `${window.innerHeight}px`, marginTop: '-100px' }}>
                <Slider {...settings}>
                    {carouselImages.map((image, index) => (
                        <Box
                            key={index}
                            sx={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '100vh',  // Full screen height
                            }}
                        />
                    ))}
                </Slider>

                {/* Header and Main Content Overlapping the Carousel */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: window.innerHeight / 3,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        color: 'white',
                        zIndex: 1,
                    }}
                >
                    <Typography variant="h3" sx={{ fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' } }}>
                        Explore Europe with Travellers Solution
                    </Typography>
                    <Button variant="contained" sx={{ mt: 2, color: "#fff", fontSize: { xs: '0.8rem', md: '1rem' } }}>
                        Plan Your Trip
                    </Button>
                </Box>
            </Box>

            <Container >
                {/* Featured Tours Slider */}
                {/* <Box sx={{ my: { xs: 4, md: 4 } }}>
                    <Typography variant="h4" sx={{ mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}>
                        Featured Tours
                    </Typography>
                    <Slider {...settingsTestimonials} >
                        {tours.map((tour, index) => (
                            <Card key={index} sx={{ boxShadow:"none", height: '100%', p:0 ,width:"98% !important", margin:"auto"}}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={tour.image}
                                    alt={`Featured Tour ${tour.title}`}
                                />
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                                        {tour.title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {tour.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Slider>
                </Box> */}

<Box sx={{ textAlign: 'center',  my: { xs: 2, md: 4 } }}>
                    <Typography variant="h4" textAlign={'left'} sx={{ mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}>
                    Featured Tours
                    </Typography>
                    <Slider {...settingsTestimonials}>
                        {tours.map((testimonial, index) => (
                            <Card key={index} sx={{ borderRadius:"1rem", boxShadow:"none", textAlign: 'center',p:0 ,width:"98% !important", margin:"auto"}}>
                                <CardContent>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.title}
                                            style={{ width: '160px', height: '160px', borderRadius: '10%' }}
                                        />
                                    </Box>
                                    <Typography variant="body1" sx={{ fontSize: { xs: '1rem', sm: '1.1rem' }, fontStyle: 'italic' }}>
                                        "{testimonial.description}"
                                    </Typography>
                                    <Typography variant="h6" sx={{ mt: 2 }}>
                                        - {testimonial.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Slider>
                </Box>

                {/* Testimonials Slider */}
                <Box sx={{ textAlign: 'center',  my: { xs: 2, md: 4 } }}>
                    <Typography variant="h4" textAlign={'left'} sx={{ mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}>
                        Client Testimonials
                    </Typography>
                    <Slider {...settingsTours}>
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} sx={{ boxShadow:"none", borderRadius:"1rem", textAlign: 'center',p:0 ,width:"98% !important", margin:"auto"}}>
                                <CardContent>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            style={{ width: '100px', height: '100px', borderRadius: '50px',objectFit:"cover" }}
                                        />
                                    </Box>
                                    <Typography variant="body1" sx={{ fontSize: { xs: '1rem', sm: '1.1rem' }, fontStyle: 'italic' }}>
                                        "{testimonial.testimonial}"
                                    </Typography>
                                    <Typography variant="h6" sx={{ mt: 2 }}>
                                        - {testimonial.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Slider>
                </Box>

                {/* Company Overview */}
                <Box sx={{ textAlign: 'center', my: { xs: 2, md: 4 } }}>
                    <Typography variant="h4" sx={{ mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}>
                        About Travellers Solution
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                        Travellers Solution specializes in curating unforgettable European travel experiences. With years of
                        expertise in the industry, we guarantee personalized itineraries and exceptional service.
                    </Typography>
                </Box>

                {/* Call to Action */}
                <Box sx={{ textAlign: 'center', my: { xs: 2, md: 4 } }}>
                    <Button variant="contained"  href="#booking" sx={{ color:"#fff", fontSize: { xs: '0.9rem', md: '1.1rem' } }}>
                        Book Your Tour Now
                    </Button>
                </Box>
            </Container>
        </>
    );
}

export default Home;
