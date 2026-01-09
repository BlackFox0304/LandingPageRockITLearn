import React from 'react';
import { Box, Typography, Container, Grid} from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import VisibilityIcon from '@mui/icons-material/Visibility';

const steps = [
  { icon: RocketLaunchIcon, title: "Misión", description: "Proporcionarte una aplicación \naccesible e interactiva para aprender \ninstrumentos musicales, \nsin importar tu edad o nivel de habilidad." },
  { icon: VisibilityIcon, title: "Visión", description: "Revolucionar la forma en que se \naprenden los instrumentos musicales, \ntransformando la educación musical en \nuna experiencia interactiva y personalizada." },
];

const AboutUs = () => {
    return (
     <Box id="about-us" sx={{ backgroundColor: '#f5f5f5', py: 8, pt: 10 }}>
        <Container maxWidth="md">
            <Typography variant="h4" component="h2" fontWeight="bold" sx={{ mb: 4, textAlign: 'center' }}>
                Acerca de Nosotros
            </Typography>
            
            <Box sx={{display: 'flex',flexDirection: { xs: 'column', md: 'row' },alignItems: 'center',gap: 4}}>   
                <Box sx={{ flex: 1,textAlign: { xs: 'center', md: 'left' }}}>
                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                        ¿Quienes somos?
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        Somos un grupo de amigos y estudiantes a punto de egresar de la carrera de Ingeniería en informática. 
                        Nos apasiona la música y la tecnología, y hemos decidido combinar ambas pasiones para crear RockItLearn, una plataforma que facilita el aprendizaje de instrumentos musicales a través de métodos interactivos y accesibles.
                    </Typography>     
                </Box> 

                <Box sx={{ flex: 1 }}>
                    <Box 
                      component="img"
                      src="/images/Logo_CUCEI.png"
                      alt="Logo de UDG yCUCEI"
                        sx={{
                        width: '110%',
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

            <Container maxWidth="lg" sx={{ my: 8, textAlign: 'center', pt: 2,}}>
                <Grid container spacing={15} justifyContent="center">
                    {steps.map((step, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box sx={{ p: 2 }}>
                        <step.icon sx={{ fontSize: 110, color: '#0b2b55ff', mb: 1 }} /> 
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
       </Container>
     </Box>
    );
};

export default AboutUs;