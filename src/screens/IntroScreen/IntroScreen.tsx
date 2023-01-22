import React from 'react';
import Swiper from 'react-native-swiper';

import {SwiperContainer, Container} from '../../components';

const SHOW_ARROW_SWIPER = false;

const LOOP_SWIPER = false;

export const IntroScreen = () => {
  return (
    <Swiper loop={LOOP_SWIPER} showsButtons={SHOW_ARROW_SWIPER}>
      <Container>
        <SwiperContainer
          title="Ajude o meio ambiente"
          description="Incentive seus amigos e vizinhos a descartar o lixo corretamente"
        />
      </Container>
      <Container>
        <SwiperContainer
          title="É fácil"
          description="Encontre pontos de reciclagem ​​ou crie pontos de coleta"
        />
      </Container>
      <Container>
        <SwiperContainer
          title="Seja consciente"
          description="Ajude o meio ambiente a continuar preservado"
        />
      </Container>
    </Swiper>
  );
};
