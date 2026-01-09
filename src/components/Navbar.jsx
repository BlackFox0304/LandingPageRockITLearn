import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const Navbar = () => {
  //Estilos para los botones de navegación
  const buttonStyles = {
    color: 'white',
    textTransform: 'none',
    '&:hover': {backgroundColor: 'rgba(255, 255, 255, 0.1)'}
  };
  // Estilos para el botón que manda a RockItLearn
  const ctaButtonStyles = {
    color: 'black',
    textTransform: 'none',
    backgroundColor: '#0dbeb5ff', 
    '&:hover': {backgroundColor: '#0b938cff',},
    ml: 1, 
  };
  // Función para hacer scroll suave a una sección
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <AppBar 
      position="fixed"
      sx={{ 
        backgroundColor: '#0b2b55ff', 
        boxShadow: 'none',
        zIndex: 1200
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{ 
              flexGrow: 1, 
              fontWeight: 'bold', 
              color: 'white',
              cursor: 'pointer'
            }}
            onClick={() => scrollToSection('hero')} 
          >
            RockItLearn
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Button 
              color="inherit" 
              sx={buttonStyles}
              onClick={() => scrollToSection('hero')}
            >
              Home
            </Button>
            <Button 
              color="inherit" 
              sx={buttonStyles}
              onClick={() => scrollToSection('what-is-rockitlearn')}
            >
              ¿Qué es RockItLearn?
            </Button>
            <Button 
              color="inherit" 
              sx={buttonStyles}
              onClick={() => scrollToSection('how-does-it-work')}
            >
              ¿Cómo funciona?
            </Button>
            <Button 
              color="inherit" 
              sx={buttonStyles}
              onClick={() => scrollToSection('about-us')}
            >
              Acerca de Nosotros
            </Button>
            <Button 
              color="inherit" 
              sx={buttonStyles}
              onClick={() => scrollToSection('faq')}
            >
              F.A.Q
            </Button>
            <Button 
              color="inherit" 
              sx={ctaButtonStyles}
              variant="contained"
              // Aquí iría el enlace a RockItLearn 
              startIcon={<MusicNoteIcon />} 
            >
              Ir a RockItLearn
            </Button> 
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
