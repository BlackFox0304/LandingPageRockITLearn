import React from 'react';
import { Box, Typography, Container, Grid} from '@mui/material';
import PianoIcon from '@mui/icons-material/Piano';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const steps = [
  { icon: PianoIcon, title: "Elije tu instrumento", description: "" },
  { icon: AutoStoriesIcon, title: "Sigue lecciones interactivas", description: "Guía paso a paso y retroalimentación." },
  { icon: EmojiEventsIcon, title: "Toca y aprende", description: "No solo estás aprendiendo, \nestás convirtiéndote en músico."},
];

const HowItWorks = () => {
  return (
    <Container id="how-does-it-work" maxWidth="lg" sx={{ my: 8, textAlign: 'center', pt: 2,}}>
      <Typography variant="h4" component="h2" fontWeight="bold" sx={{ mb: 6, color: '#1e2a3a' }}>
        ¿Cómo funciona?
      </Typography>

      <Grid container spacing={15} justifyContent="center">
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ p: 2 }}>
              <step.icon sx={{ fontSize: 80, color: '#0dbeb5ff', mb: 1 }} /> 
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                {step.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ whiteSpace: 'pre-line' }}> 
                {step.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HowItWorks;
