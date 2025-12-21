import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const WhatIsRockItLearn = ({ imageUrl }) => {
  return (
    <Container id="what-is-rockitlearn" maxWidth="lg" sx={{ my: 8, pt: 2,}}>
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: 4
      }}>
        <Box sx={{ 
          flex: 1,
          textAlign: { xs: 'center', md: 'left' }
        }}>
          <Typography variant="h4" component="h2" fontWeight="bold" sx={{ mb: 4, color: '#1e2a3a'}} >
            ¿Qué es RockItLearn?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem' }}>
            RockItLearn es una plataforma de aprendizaje interactiva diseñada para ayudarte a dominar un instrumento, ya sea que seas un completo principiante o ya cuentes con experiencia.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem' }}>
            A través de una serie de instrucciones paso a paso, desarrollarás habilidades reales mientras disfrutas cada paso del camino.
          </Typography>
        </Box>
        
        <Box sx={{ flex: 1 }}>
          <Box
            component="img"
            src={imageUrl || '/images/img2.jpg'}
            alt="Persona tocando una guitarra"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              objectFit: 'cover',
              maxHeight: 400,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              display: 'block'
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default WhatIsRockItLearn;
