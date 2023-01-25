import {useEffect} from 'react';
import {Image} from 'react-native';

import {useNavigationHook} from '../../hooks';

import {PADDING_SIDE} from '../../utils';
import {Container} from '../../components';
import {IMAGES} from '../../assets';
const {Logo} = IMAGES;

export const SplashScreen = () => {
  const {navigate} = useNavigationHook();

  useEffect(() => {
    const timer = setTimeout(() => navigate('IntroScreen'), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container
      padding={PADDING_SIDE}
      align="center"
      justify="center"
      color="pink-100">
      <Image source={Logo} />
    </Container>
  );
};
