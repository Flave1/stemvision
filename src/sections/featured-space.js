import { rgba } from 'polished';
import { useState, useRef, useEffect } from 'react';
import { Box, Container, Heading, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Progressbar from 'components/progressbar';
import Feature from 'components/cards/feature';
import Image from 'components/image';


// import education from 'assets/images/icons/education.gif';
// import logistics from 'assets/images/icons/logistics.gif';
// import bills from 'assets/images/icons/bills.gif';
// import slider1 from 'assets/images/features/1.png';
// import slider2 from 'assets/images/features/2.png';
// import slider3 from 'assets/images/features/3.png';

import SwiperCore, { Autoplay, Pagination, EffectFade } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Autoplay, Pagination, EffectFade]);

const data = {
  feature: [
    {
      id: 1,
      icon: 'assets/images/icons/education.gif',
      title: 'Education',
      description: 'All you need for your high school/college running.',
    },
    {
      id: 2,
      icon: 'assets/images/icons/logistics.gif',
      title: 'Logistics',
      description: 'Complete restaurants logistics solution.',
    },
    {
      id: 3,
      icon: 'assets/images/icons/bills.gif',
      title: 'Utilities',
      description: 'All in one application for bills and utilities payment.',
    },
  ],
  gallery: [
    {
      id: 1,
      image: 'assets/images/features/1.png',
      title: 'SMP school app',
      desc: 'All you need for your high school/college running',
    },
    {
      id: 2,
      image: 'assets/images/features/2.png',
      title: 'SV food logistics',
      desc: 'Complete restaurants logistics solution',
    },
    {
      id: 3,
      image: 'assets/images/features/3.png',
      title: 'Bills payment solution',
      desc: 'All in one application for bills and utilities payment',
    },
  ],
};

const FeaturedSpace = () => {
  const isPause = useRef(false);
  const swiperRef = useRef(null);
  const [togglePlay, setTogglePlay] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(0);

  let time = 3;
  let tick, percentTime;

  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    tick = setInterval(interval, 10);
  }

  function interval() {
    if (isPause.current === false) {
      percentTime += 1 / (time + 0.1);
      setCurrentWidth(percentTime);
      if (percentTime >= 100) {
        swiperRef?.current?.swiper?.slideNext();
        startProgressbar();
      }
    }
  }

  function resetProgressbar() {
    setCurrentWidth(0);
    clearTimeout(tick);
  }

  useEffect(() => {
    startProgressbar();
  }, []);

  const handleToggle = () => {
    isPause.current = !isPause.current;
    setTogglePlay((prev) => !prev);
  };

  return (
    <Box id="feature" as="section" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
            <SectionHeading
              sx={styles.heading}
              title="Some good AI solutions to enable you build your business and scale"
              description="Stemvision offers AI powered platforms to enable individuals, businesses educational institutions connect, and grow their businesses at prime locations in multiple cities."
            />
            <Box sx={styles.featureWrapper}>
              {data?.feature?.map((feature) => (
                <Feature key={feature.id} data={feature} />
              ))}
            </Box>
          </Box>
          <Box sx={styles.rightContent}>
            <Progressbar
              sx={styles.progressbar}
              togglePlay={togglePlay}
              handleClick={handleToggle}
              currentWidth={currentWidth}
            />
            <Swiper
              loop={true}
              effect="fade"
              ref={swiperRef}
              spaceBetween={0}
              slidesPerView={1}
              pagination={true}
            >
              {data?.gallery?.map((item) => (
                <SwiperSlide key={item.id}>
                  <Box as="figure" sx={styles.image}>
                    <Image loading="lazy" src={item.image} alt="" />
                    {/* <Box as="figcaption">
                      <Box>
                        <Heading as="h4">{item.title}</Heading>
                        <Text as="p">{item.desc}</Text>
                      </Box>
                    </Box> */}
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedSpace;

const styles = {
  section: {
    pt: [30, null, null, null, 60],
    pb: [30, null, null, 50, 60],
  },
  contentWrapper: {
    gap: [null, null, null, null, '30px'],
    display: ['flex', null, null, null, 'grid'],
    alignItems: 'center',
    flexDirection: ['column', null, null, null, null],
    gridTemplateColumns: ['unset', null, null, null, 'repeat(2,1fr)'],
  },
  leftContent: {
    m: [0, '30px 0px 0', '30px 50px 0', 0],
  },
  heading: {
    textAlign: ['center', null, null, null, 'left'],
    maxWidth: 490,
    margin: ['0 auto 40px', null, null, null, '0 0 80px'],
    h2: {
      fontSize: [22, null, null, 30, null, 36, 46],
      lineHeight: [1.6, null, null, 1.41],
      fontWeight: [500, null, null, 400],
    },
    p: {
      fontSize: ['15px', null, null, '17px'],
      mt: [3, null, null, 5],
    },
  },
  featureWrapper: {
    gap: ['40px 20px', null, null, null, '30px'],
    display: 'grid',
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      null,
      'repeat(3,180px)',
      'repeat(3,1fr)',
    ],
    justifyContent: ['unset', null, null, 'center', 'flex-start'],
  },
  rightContent: {
    position: 'relative',
    mt: [6, null, null, null, 0],
    maxWidth: '100%',
    '.swiper-pagination-bullets': {
      bottom: 20,
    },
    '.swiper-pagination-bullet': {
      backgroundColor: 'rgba(255,255,255,0.5)',
      width: 10,
      height: 10,
      opacity: 1,
      mx: 5,
      ':focus': {
        outline: 0,
      },
    },
    '.swiper-pagination-bullet-active': {
      backgroundColor: 'rgba(255,255,255,1)',
    },
  },
  progressbar: {
    position: 'absolute',
    left: [15, 25],
    top: [46, 53],
    zIndex: 2,
  },
  progressBar: {
    position: 'relative',
    mr: 4,
  },
  toggleButton: {
    backgroundColor: 'transparent',
    border: 0,
    cursor: 'pointer',
    display: 'flex',
    padding: 0,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    '&:focus': {
      outline: '0 none',
    },
  },
  image: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
    '> img': {
      borderRadius: 10,
    },
    figcaption: {
      backgroundColor: 'primary',
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      left: 0,
      top: 30,
      borderRadius: 5,
      color: '#fff',
      padding: ['20px 20px 20px 80px', '25px 25px 25px 90px'],
      h4: {
        lineHeight: 1,
        fontWeight: 'bold',
        fontSize: [14, 18],
        letterSpacing: 'heading',
      },
      p: {
        fontSize: [13, 16],
        fontWeight: 500,
        letterSpacing: 'heading',
        color: rgba('#fff', 0.6),
        marginTop: [2],
      },
    },
  },
};
