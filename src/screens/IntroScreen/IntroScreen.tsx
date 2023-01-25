import React from 'react';

import {SwiperContainer, Container, Swiper, Button} from '../../components';

import {Dimensions, Image} from 'react-native';

const {width} = Dimensions.get('screen');

import {IMAGES} from '../../assets';

const {IntroScreen01, IntroScreen02, IntroScreen03} = IMAGES;

export const IntroScreen = () => {
  return (
    <Swiper>
      <Container>
        <SwiperContainer
          title="What is Lorem Ipsum?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s">
          <Image source={IntroScreen01} style={{width: width, height: 400}} />
        </SwiperContainer>
      </Container>
      <Container>
        <SwiperContainer
          title="What is Lorem Ipsum?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s">
          <Image source={IntroScreen02} style={{width: width, height: 400}} />
        </SwiperContainer>
      </Container>
      <Container>
        <SwiperContainer
          title="What is Lorem Ipsum?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s">
          <Image source={IntroScreen03} style={{width: width, height: 400}} />
        </SwiperContainer>
      </Container>
      <Container>
        <SwiperContainer
          footer={<Button title="Entrar" />}
          title="What is Lorem Ipsum?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s">
          <Image source={IntroScreen01} style={{width: width, height: 400}} />
        </SwiperContainer>
      </Container>
    </Swiper>
  );
};
