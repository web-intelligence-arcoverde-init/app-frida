import {Text} from '@rneui/base';
import {TouchableOpacity, View} from 'react-native';

import {
  Container,
  GestureMultiTouchContainer,
  Separator,
  TextInput,
  Button,
} from '../../components';

import {useNavigationHook} from '../../hooks';

export const SignInScreen = () => {
  const {navigate} = useNavigationHook();

  return (
    <GestureMultiTouchContainer>
      <Container padding={24} align="center" justify="center">
        <TextInput />
        <Separator height={20} />
        <TextInput />

        <Separator height={12} />

        <TouchableOpacity style={{width: '100%'}}>
          <Text
            style={{
              fontSize: 14,
              textAlign: 'right',
              color: `#AF3476`,
              marginLeft: 4,
            }}>
            Esqueceu a senha?
          </Text>
        </TouchableOpacity>

        <Separator height={32} />
        <Button />

        <Separator height={32} />

        <View style={{display: 'flex', flexDirection: 'row', marginTop: 2}}>
          <Text style={{fontSize: 14, textAlign: 'center'}}>
            Não tem uma conta?
          </Text>
          <TouchableOpacity onPress={() => navigate('SignUpScreen')}>
            <Text
              style={{
                fontSize: 14,
                textAlign: 'center',
                color: `#AF3476`,
                marginLeft: 4,
              }}>
              Inscrever-se
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
    </GestureMultiTouchContainer>
  );
};
