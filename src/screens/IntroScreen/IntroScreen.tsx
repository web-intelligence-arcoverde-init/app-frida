import React from 'react';

import {SwiperContainer, Container, Swiper} from '../../components';

import {Dimensions, Image} from 'react-native';

const {width} = Dimensions.get('screen');

import {IMAGES} from '../../assets';

const {Intro01, Intro02, Intro03, Intro04} = IMAGES;

export const IntroScreen = () => {
  return (
    <Swiper>
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
          <Image source={Intro04} style={{width: width, height: 400}} />
        </SwiperContainer>
      </Container>
    </Swiper>
  );
};
