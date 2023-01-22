import React from 'react';
import Swiper from 'react-native-swiper';

import {SwiperContainer, Container, DotSwiper} from '../../components';

const SHOW_ARROW_SWIPER = false;

const LOOP_SWIPER = false;

import {Button, Text} from '@rneui/themed';

export const IntroScreen = () => {
  return (
    <Swiper
      loop={LOOP_SWIPER}
      showsButtons={SHOW_ARROW_SWIPER}
      dot={<DotSwiper />}
      activeDot={<DotSwiper active />}>
      <Container>
        <SwiperContainer
          title="What is Lorem Ipsum?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
      </Container>
      <Container>
        <SwiperContainer
          title="What is Lorem Ipsum?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
      </Container>
      <Container>
        <SwiperContainer
          title="What is Lorem Ipsum?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
      </Container>
    </Swiper>
  );
};
