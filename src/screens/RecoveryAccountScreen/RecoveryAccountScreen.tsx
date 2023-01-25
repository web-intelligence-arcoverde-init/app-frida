import {Text} from '@rneui/base';
import {
  Container,
  GestureMultiTouchContainer,
  TextInput,
  Button,
  Separator,
} from '../../components';

import {View} from 'react-native';
import {useNavigationHook} from '../../hooks';

export const RecoveryAccountScreen = () => {
  const {navigate} = useNavigationHook();

  return (
    <GestureMultiTouchContainer>
      <Container padding={22} align="center" justify="center">
        <View style={{width: '100%'}}>
          <Text
            h3
            style={{
              color: `#AF3476`,
            }}>
            Digite seu número de telefone
          </Text>
          <Separator height={2} />
          <Text>
            nós lhe enviaremos um texto com seu número de confirmação para
            recuperarmos sua senha
          </Text>
        </View>

        <Separator height={22} />

        <TextInput
          label="Numero de celular"
          placeholder="Digite seu numero aqui"
        />

        <Separator height={8} />
        <Button
          title="Continue"
          onPress={() => navigate('RecoveryAccountCodeScreen')}
        />
      </Container>
    </GestureMultiTouchContainer>
  );
};
