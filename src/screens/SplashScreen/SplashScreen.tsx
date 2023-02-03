import {useEffect} from 'react';
import {Image} from 'react-native';

import {useNavigationHook} from '../../hooks';

import {Container} from '../../components';
import {IMAGES} from '../../assets';

const {Logo} = IMAGES;

export const SplashScreen = () => {
  const {navigate} = useNavigationHook();

  useEffect(() => {
    const timer = setTimeout(() => navigate('HomeScreen'), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container padding={18} align="center" justify="center" color="pink-100">
      <Image source={Logo} style={{width: 280, height: 360}} />
    </Container>
  );
};
