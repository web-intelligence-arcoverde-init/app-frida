import {Image, TouchableOpacity, View} from 'react-native';
import {Button, Text} from '@rneui/themed';

import {IMAGES} from '../../assets';
import {Container} from '../../components';

const {LogoNomeRosa} = IMAGES;

export const HomeScreen = () => {
  return (
    <Container padding={24} align="center" justify="center">
      <Image source={LogoNomeRosa} />
      <Button
        title="Junte-se"
        containerStyle={{
          borderRadius: 18,
          width: '90%',
        }}
        buttonStyle={{
          backgroundColor: `#AF3476`,
          height: 48,
        }}
      />
      <Text style={{fontSize: 14, textAlign: 'center', marginTop: 20}}>
        Já faz parte ?
      </Text>

      <View style={{display: 'flex', flexDirection: 'row', marginTop: 6}}>
        <Text style={{fontSize: 14, textAlign: 'center'}}>Então clique</Text>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 14,
              textAlign: 'center',
              color: `#AF3476`,
              marginLeft: 4,
            }}>
            aqui.
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};
