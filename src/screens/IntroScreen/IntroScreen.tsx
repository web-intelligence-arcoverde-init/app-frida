import React from 'react';
import Swiper from 'react-native-swiper';

import {
  SwiperContainer,
  Container,
  DotSwiper,
  ArrowSwiper,
} from '../../components';

import {Dimensions, Image} from 'react-native';

const {width} = Dimensions.get('screen');

const SHOW_ARROW_SWIPER = true;

const LOOP_SWIPER = false;

import {IMAGES} from '../../assets';

const {Intro01, Intro02, Intro03, Intro04} = IMAGES;

export const IntroScreen = () => {
  return (
    <Swiper
      loop={LOOP_SWIPER}
      showsButtons={SHOW_ARROW_SWIPER}
      dot={<DotSwiper />}
      activeDot={<DotSwiper active />}
      nextButton={<ArrowSwiper>›</ArrowSwiper>}
      prevButton={<ArrowSwiper>‹</ArrowSwiper>}>
      <Container>
        <SwiperContainer
          title="What is Lorem Ipsum?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s">
          <Image source={Intro01} style={{width: width, height: 400}} />
        </SwiperContainer>
      </Container>
      <Container>
        <SwiperContainer
          title="What is Lorem Ipsum?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s">
          <Image source={Intro02} style={{width: width, height: 400}} />
        </SwiperContainer>
      </Container>
      <Container>
        <SwiperContainer
          title="What is Lorem Ipsum?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s">
          <Image source={Intro03} style={{width: width, height: 400}} />
        </SwiperContainer>
      </Container>
      <Container>
        <SwiperContainer
          title="What is Lorem Ipsum?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s">
          <Image source={Intro03} style={{width: width, height: 400}} />
        </SwiperContainer>
      </Container>
    </Swiper>
  );
};
