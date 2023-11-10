import React from 'react';

import {SwiperContainer, Container, Swiper, Button} from '../../components';

import {Dimensions, Image} from 'react-native';

const {width} = Dimensions.get('screen');

import {IMAGES} from '../../assets';
import {useNavigationHook} from '../../hooks';

import {scale} from '../../utils';

const {IntroScreen01, IntroScreen02, Example1} = IMAGES;

export const IntroScreen = () => {
  const {navigate} = useNavigationHook();

  return (
    <Swiper>
      <Container>
        <SwiperContainer
          title="What is Lorem Ipsum?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s">
          <Image
            source={IntroScreen02}
            resizeMode="cover"
            style={{
              width: scale(width),
              height: scale(300),
              top: scale(-30),
            }}
          />
        </SwiperContainer>
      </Container>
      <Container>
        <SwiperContainer
          title="What is Lorem Ipsum?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s">
          <Image
            source={Example1}
            style={{width: scale(width), height: scale(300), top: scale(-30)}}
          />
        </SwiperContainer>
      </Container>
      <Container>
        <SwiperContainer
          footer={
            <Button title="Entrar" onPress={() => navigate('HomeScreen')} />
          }
          title="What is Lorem Ipsum?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s">
          <Image
            source={IntroScreen01}
            style={{width: scale(width), height: scale(300)}}
          />
        </SwiperContainer>
      </Container>
    </Swiper>
  );
};
