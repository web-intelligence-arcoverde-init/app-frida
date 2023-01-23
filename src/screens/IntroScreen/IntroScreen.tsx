import React from 'react';
import Swiper from 'react-native-swiper';

import {SwiperContainer, Container, DotSwiper} from '../../components';

import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

const SHOW_ARROW_SWIPER = false;

const LOOP_SWIPER = false;

import {Button} from '@rneui/themed';

import {useNavigationHook} from '../../hooks';

import {IMAGES} from '../../assets';
import {Image} from 'react-native';

const {Intro01, Intro02, Intro03, Intro04} = IMAGES;

export const IntroScreen = () => {
  const navigation = useNavigationHook();

  return (
    <Swiper
      loop={LOOP_SWIPER}
      showsButtons={SHOW_ARROW_SWIPER}
      dot={<DotSwiper />}
      activeDot={<DotSwiper active />}>
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
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          footer={
            <Button
              onPress={() => navigation.navigate('HomeScreen')}
              title="Entrar"
              containerStyle={{
                borderRadius: 18,
                width: '100%',
              }}
              buttonStyle={{
                backgroundColor: `#AF3476`,
                height: 48,
              }}
            />
          }>
          <Image source={Intro03} style={{width: width, height: 400}} />
        </SwiperContainer>
      </Container>
    </Swiper>
  );
};
