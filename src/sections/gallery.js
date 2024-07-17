import { Box, Container, Image, Button } from 'theme-ui';
import { RiArrowRightSLine } from 'react-icons/ri';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import GalleryCard from 'components/cards/gallery-card';

const gallery1 = 'assets/images/gallery/1.png';
const gallery2 = 'assets/images/gallery/2.png';
const gallery3 = 'assets/images/gallery/3.png';
const gallery4 = 'assets/images/gallery/4.png';
const gallery5 = 'assets/images/gallery/5.png';
const gallery6 = 'assets/images/gallery/6.png';

const data = [
  {
    id: 1,
    image: gallery1,
    title: 'Back to school',
  },
  {
    id: 2,
    image: gallery2,
    title: 'Cash back',
  },
  {
    id: 3,
    image: gallery3,
    title: 'Learning from home',
  },
  {
    id: 4,
    image: gallery4,
    title: 'One touch payment',
  },
  {
    id: 6,
    image: gallery6,
    title: 'Express delivery',
  },
  {
    id: 5,
    image: gallery5,
    title: 'Qucik and Easy delivery',
  },
];

const masonryOptions = {
  transitionDuration: 0,
};

const Gallery = () => {
  return (
    <Box id="gallery" as="section" sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeading
          sx={styles.heading}
          slogan="Working space"
          title="Let’s meet our interior room decoration"
        />
        <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
          {data?.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </Box>
        <Button variant="muted" sx={styles.button}>
          Explore More <RiArrowRightSLine size="20px" />
        </Button>
      </Container>
    </Box>
  );
};

export default Gallery;

const styles = {
  section: {
    pt: [30, 30, 40, 50, 60],
    pb: [60, 60, 60, 90, 80, 120],
  },
  heading: {
    mb: [30, 30, 40, 60],
  },
  galleryWrapper: {
    mx: '-15px',
  },
  button: {
    minHeight: [50, 50, 50, 60],
    fontSize: [14, 14, 16],
    width: '100%',
    svg: {
      transition: 'margin-left 0.3s ease-in-out 0s',
    },
    ':hover': {
      svg: {
        ml: '5px',
      },
    },
  },
};
