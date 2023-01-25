import {Image, TouchableOpacity, View} from 'react-native';
import {Text} from '@rneui/themed';

import {IMAGES} from '../../assets';
import {Container, GestureMultiTouchContainer, Button} from '../../components';

import {useNavigationHook} from '../../hooks';

const {LogoNomeRosa} = IMAGES;

export const HomeScreen = () => {
  const {navigate} = useNavigationHook();

  return (
    <Container padding={24} align="center" justify="center">
      <Image source={LogoNomeRosa} />
      <Button title="Junte-se" onPress={() => navigate('SignUpScreen')} />
      <Text
        style={{
          fontSize: 14,
          textAlign: 'center',
          marginTop: 20,
        }}>
        Já faz parte ?
      </Text>

      <View style={{display: 'flex', flexDirection: 'row', marginTop: 2}}>
        <Text style={{fontSize: 14, textAlign: 'center'}}>Então clique</Text>
        <TouchableOpacity onPress={() => navigate('SignInScreen')}>
          <Text
            style={{
              fontSize: 14,
              textAlign: 'center',
              color: `#AF3476`,
              marginLeft: 4,
              fontWeight: 'bold',
            }}>
            aqui.
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};
