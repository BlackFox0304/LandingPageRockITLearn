import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Hero = () => {
  return (
    <Box 
      id="hero"
      sx={{ 
        height: 625, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        backgroundImage: 'linear-gradient(to right, rgba(14, 54, 89, 0.4), rgba(104, 50, 231, 0.2)), url(/images/img1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        mb: 8,
        position: 'relative',
        pt: 8,
      }}
    >
      <Container maxWidth="md">
        <Typography 
          variant="h2" 
          component="h1" 
          fontWeight="bold" 
          sx={{ 
            mb: 3,
            textShadow: '4px 4px 1px rgba(0, 0, 0, 0.5)' 
          }}
        >
          Empieza a tocar hoy. <br />Sin límites. Solo música.
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            textShadow: '2px 2px 1px rgba(0, 0, 0, 0.5)' 
          }}
        >
          Ya sea que estés aprendiendo a tocar un instrumento por primera vez o estés buscando mejorar tus habilidades, 
          RockItLearn te brinda las herramientas, la orientación y la motivación para que tus objetivos funcionen a tu ritmo y a tu manera.
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;
