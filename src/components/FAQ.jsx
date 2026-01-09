import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = [
  { 
    q: "¿Necesito saber música para empezar?", 
    a: "¡En lo absoluto! RockItLearn está diseñado para principiantes absolutos y aprendices avanzados. Empieza desde cero y avanza a tu propio ritmo." 
  },
  { 
    q: "¿Puedo usarlo desde mi teléfono?", 
    a: "¡Claro! RockItLearn funciona en smartphones y computadoras, en cualquier momento y lugar."
  },
  { 
    q: "¿Funciona con cualquier instrumento?", 
    a: "Por ahora solo puedes usar un piano real. Solo conecta o usa tu micrófono." 
  },
  { 
    q: "¿Recibo retroalimentación cuando toco?", 
    a: "¡Sí! Nuestra plataforma escucha tu instrumento (usando tu micrófono o entrada de audio) y te da retroalimentación." 
  },
  { 
    q: "¿Es RockItLearn gratuito?", 
    a: "¡Sí! RockItLearn es completamente gratuito. ¡Así que comienza a aprender ahora!" 
  },
  { 
    q: "¿Puedo tocar canciones en tiempo real?", 
    a: "¡Sí! Con nuestra función Jam Sessions, puedes tocar junto con pistas de acompañamiento y música en tiempo real, como en una banda en vivo. Es perfecto para practicar." 
  },
];

const FAQ = () => {
  return (
    <Box id="faq" sx={{ backgroundColor: '#b3d4fcff', py: 8, pt: 10,}}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" fontWeight="bold" sx={{ mb: 4, textAlign: 'center' }}>
          Preguntas Frecuentes
        </Typography>
        
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
          {faqData.map((item, index) => (
            <Accordion 
              key={index} 
              elevation={0} 
              sx={{ 
                border: 'none', '&:before': { display: 'none' },
                backgroundColor: 'transparent', '&.MuiAccordion-root': {borderRadius: '8px'}
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '8px', '&.Mui-expanded': {borderBottomLeftRadius: 0, borderBottomRightRadius: 0, backgroundColor: 'white'}
                }}
              >
                <Typography variant="body1" fontWeight="bold">{item.q}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ 
                backgroundColor: 'white',
                borderBottomLeftRadius: '8px',
                borderBottomRightRadius: '8px',
                mt: -0.5 
              }}>
                <Typography variant="body2" color="text.secondary">
                  {item.a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;
