import { Container, Typography, ImageList, ImageListItem } from '@mui/material';

const srcset = (image, size, rows = 1, cols = 1) => ({
  src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
  srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
});

const itemData = [
  {
    img: '/images/img3.jpg',
    title: 'Profesor y un estudiante',
    cols: 2,
    rows: 3,
  },
  {
    img: '/images/img5.jpg',
    title: 'Joven tocando un ukulele',
    cols: 2,
    rows: 2,
  },
  {
    img: '/images/img8.jpg',
    title: 'Gato tocando piano',
    cols: 2,
    rows: 3,
  },
  {
    img: '/images/img6.jpg',
    title: 'Niño tocando una guitarra',
    cols: 2,
    rows: 3,
  },
  {
    img: '/images/img7.jpg',
    title: 'Tablet con notas musicales',
    cols: 2,
    rows: 2,
  },
  {
    img: '/images/img4.jpg',
    title: 'Hombre tocando piano',
    cols: 2,
    rows: 2,
  },
];

const Gallery = () => {
  return (
    <Container id="gallery" maxWidth="lg" sx={{ my: 10 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        sx={{ mb: 6 }}
      >
        ¿Estás listo para comenzar este viaje?
      </Typography>

      <ImageList
        variant="quilted"
        cols={6}
        rowHeight={160}
        gap={16}
        sx={{
          borderRadius: 3,
          overflow: 'hidden',
        }}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            sx={{
              borderRadius: 3,
              overflow: 'hidden',
            }}
          >
            <img
              {...srcset(item.img, 160, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default Gallery;

