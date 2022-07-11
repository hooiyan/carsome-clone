import { Box, Image } from '@chakra-ui/react';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import DesktopHeader from './components/header/DesktopHeader';
import MobileHeader from './components/header/MobileHeader';
import HeroImg1 from './assets/carousel-1.png';
import HeroImg2 from './assets/carousel-2.png';
import HeroImg3 from './assets/carousel-3.png';
import HeroImg4 from './assets/carousel-4.png';
import HeroImg5 from './assets/carousel-5.png';

function App() {
  return (
    <Box h='100vh' w='100%'>
      <DesktopHeader />
      <MobileHeader />
      <Swiper
        className='heroCarouselSwiper'
        autoplay={true}
        loop={true}
        modules={[Pagination, Navigation]}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        spaceBetween={30}
      >
        <SwiperSlide>
          <Image src={HeroImg1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={HeroImg2} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={HeroImg3} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={HeroImg4} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={HeroImg5} />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}

export default App;
