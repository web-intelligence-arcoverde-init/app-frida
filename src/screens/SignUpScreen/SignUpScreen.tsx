import {Text} from '@rneui/base';
import {TouchableOpacity, View} from 'react-native';
import {
  Container,
  Separator,
  TextInput,
  Button,
  FooterRecoveryAccountMessage,
} from '../../components';

import {useNavigationHook} from '../../hooks';

export const SignUpScreen = () => {
  const {navigate} = useNavigationHook();

  return (
    <Container padding={18} align="center">
      <Text
        h3
        style={{
          color: `#AF3476`,
          textAlign: 'center',
        }}>
        Crie a sua conta aqui
      </Text>
      <Separator height={4} />
      <Text style={{textAlign: 'center'}}>
        Conecte-se e encontre ajuda hoje!
      </Text>

      <Separator height={22} />

      <TextInput label="Nome" placeholder="Example" />
      <TextInput label="Email" placeholder="Example" />
      <TextInput label="Email" placeholder="Example" />

      <Separator height={8} />
      <Button title="Criar" onPress={() => navigate('SignInScreen')} />

      <FooterRecoveryAccountMessage />
    </Container>
  );
};
