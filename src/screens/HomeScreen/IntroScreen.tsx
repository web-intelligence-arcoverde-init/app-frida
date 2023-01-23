import {Image, TouchableOpacity, View} from 'react-native';
import {Button, Text} from '@rneui/themed';

import {IMAGES} from '../../assets';
import {Container, GestureMultiTouchContainer} from '../../components';

import {useNavigationHook} from '../../hooks';

const {LogoNomeRosa} = IMAGES;

export const HomeScreen = () => {
  const {navigate} = useNavigationHook();

  return (
    <GestureMultiTouchContainer>
      <Container padding={24} align="center" justify="center">
        <Image source={LogoNomeRosa} />
        <Button
          titleStyle={{fontWeight: 'bold'}}
          title="Junte-se"
          containerStyle={{
            borderRadius: 18,
            width: '90%',
          }}
          buttonStyle={{
            backgroundColor: `#AF3476`,
            height: 48,
          }}
          onPress={() => navigate('SignUpScreen')}
        />
        <Text
          style={{
            fontSize: 14,
            textAlign: 'center',
            marginTop: 20,
            fontWeight: 'bold',
          }}>
          Já faz parte ?
        </Text>

        <View style={{display: 'flex', flexDirection: 'row', marginTop: 2}}>
          <Text style={{fontSize: 14, textAlign: 'center', fontWeight: 'bold'}}>
            Então clique
          </Text>
          <TouchableOpacity onPress={() => navigate('SignInScreen')}>
            <Text
              style={{
                fontSize: 14,
                textAlign: 'center',
                color: `#AF3476`,
                marginLeft: 4,
                fontWeight: 'bold',
              }}>
              aqui
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
    </GestureMultiTouchContainer>
  );
};
