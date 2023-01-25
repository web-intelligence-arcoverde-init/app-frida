import React from 'react';
import {View} from 'react-native';

import {Text} from '@rneui/base';

import {Container, Separator, Button, TextInput} from '../../components';

import {useNavigationHook} from '../../hooks';

export const RecoveryAccountFormScreen = () => {
  const {navigate} = useNavigationHook();

  return (
    <Container padding={18} align="center" justify="center">
      <View style={{width: '100%'}}>
        <Text
          h3
          style={{
            color: `#AF3476`,
          }}>
          Redifina sua senha
        </Text>
        <Separator height={2} />
        <Text style={{}}>Informe sua nova senha</Text>
      </View>

      <Separator height={22} />

      <TextInput label="Nova senha" placeholder="Informe aqui sua nova senha" />

      <TextInput
        label="Confirmação de senha"
        placeholder="Informe aqui seu senha novamente"
      />

      <Separator height={12} />
      <Button title="Finalizar" onPress={() => navigate('SignInScreen')} />
    </Container>
  );
};
