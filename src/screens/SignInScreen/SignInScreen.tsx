import {Image, TouchableOpacity, View} from 'react-native';
import {Button, Text} from '@rneui/themed';

import {IMAGES} from '../../assets';
import {Container, GestureMultiTouchContainer} from '../../components';

const {LogoNomeRosa} = IMAGES;

export const SignInScreen = () => {
  return (
    <GestureMultiTouchContainer>
      <Container padding={24} align="center" justify="center"></Container>
    </GestureMultiTouchContainer>
  );
};
