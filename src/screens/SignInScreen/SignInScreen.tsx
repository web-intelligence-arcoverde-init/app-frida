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
        <TextInput label="Email" placeholder="Informe aqui sua email" />
        <TextInput label="Senha" placeholder="Informe aqui sua senha" />

        <TouchableOpacity
          style={{width: '100%'}}
          onPress={() => navigate('RecoveryAccountScreen')}>
          <Text
            style={{
              fontSize: 14,
              textAlign: 'right',
              color: `#AF3476`,
            }}>
            Esqueceu a senha?
          </Text>
        </TouchableOpacity>

        <Separator height={22} />
        <Button title="Entrar" onPress={() => navigate('DashboardScreen')} />

        <Separator height={22} />

        <View style={{display: 'flex', flexDirection: 'row'}}>
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
