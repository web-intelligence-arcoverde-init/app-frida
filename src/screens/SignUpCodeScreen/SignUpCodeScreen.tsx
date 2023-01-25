import {Text} from '@rneui/base';
import React from 'react';
import {View} from 'react-native';

import {
  Container,
  Separator,
  TextInput,
  Button,
  FooterRecoveryAccountMessage,
} from '../../components';

import {useNavigationHook} from '../../hooks';

export const SignUpCodeScreen = () => {
  const {navigate} = useNavigationHook();

  return (
    <Container padding={18} align="center" justify="center">
      <View style={{width: '100%'}}>
        <Text
          h3
          style={{
            color: `#AF3476`,
          }}>
          Digite seu número de telefone
        </Text>
        <Separator height={2} />
        <Text>nós lhe enviaremos um texto com seu número de confirmação.</Text>
      </View>

      <Separator height={22} />

      <TextInput
        label="Numero de celular"
        placeholder="Digite seu numero aqui"
      />

      <Separator height={8} />
      <Button title="Continue" onPress={() => navigate('SignInScreen')} />

      <FooterRecoveryAccountMessage />
    </Container>
  );
};
