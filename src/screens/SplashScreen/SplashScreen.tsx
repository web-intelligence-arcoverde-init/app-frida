import {Image} from 'react-native';

import {Container} from '../../components';

import {IMAGES} from '../../assets';
const {Logo} = IMAGES;

export const SplashScreen = () => {
  return (
    <Container padding={20} align="center" justify="center" color="pink-100">
      <Image source={Logo} />
    </Container>
  );
};
