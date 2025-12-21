import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const Footer = () => {
  const buttonStyles = {
    color: 'white',
    textTransform: 'none',
    '&:hover': {backgroundColor: 'rgba(255, 255, 255, 0.1)'}
  };

  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: '#0b2b55ff', 
        color: 'white', 
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between', 
            alignItems: 'center' 
          }}
        >
          {/* Navegación y Título */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 2, md: 0 } }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mr: 4 }}>
              RockItLearn
            </Typography>
          </Box>

          {/* Enlaces Legales y Redes Sociales. (REDACTAR las políticas de privacidad) */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button color="inherit" sx={{ color: 'white', textTransform: 'none', fontSize: 12, mr: 2 }}>Privacy Policy</Button>
            
            {/* Iconos de Redes Sociales. (DUDA si dejar esto o quitarlo)*/}
            <TwitterIcon sx={{ mr: 1 }} />
            <FacebookIcon sx={{ mr: 1 }} />
            <GoogleIcon />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
