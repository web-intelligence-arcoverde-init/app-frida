import {Image, TouchableOpacity, View} from 'react-native';
import {Text} from '@rneui/themed';

import {IMAGES} from '../../assets';
import {Container, Button} from '../../components';

import {useNavigationHook} from '../../hooks';
import {scale} from '../../utils';

const {LogoNomeRosa} = IMAGES;

export const HomeScreen = () => {
  const {navigate} = useNavigationHook();

  return (
    <Container padding={24} align="center" justify="center">
      <Image
        source={LogoNomeRosa}
        style={{width: scale(280), height: scale(360)}}
      />
      <Button title="Entrar" onPress={() => navigate('SignInScreen')} />
      <Text
        style={{
          fontSize: scale(12),
          textAlign: 'center',
          marginTop: scale(12),
        }}>
        Ainda não faz parte ?
      </Text>

      <View style={{display: 'flex', flexDirection: 'row', marginTop: 2}}>
        <Text style={{fontSize: scale(12), textAlign: 'center'}}>
          Então clique
        </Text>
        <TouchableOpacity onPress={() => navigate('SignUpScreen')}>
          <Text
            style={{
              fontSize: scale(12),
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
