import React from 'react';
import {View} from 'react-native';

import {Text} from '@rneui/base';

import {Container, Separator, Button, TextInput} from '../../components';

import {useNavigationHook} from '../../hooks';
import {ScrollView} from 'react-native';

export const SignUpFormScreen = () => {
  const {navigate} = useNavigationHook();

  return (
    <ScrollView>
      <Container padding={18} align="center" justify="center">
        <View style={{width: '100%'}}>
          <Text
            h3
            style={{
              color: `#AF3476`,
            }}>
            Agora crie sua conta
          </Text>
          <Separator height={2} />
          <Text style={{}}>
            Informe seus dados básicos para finalizar o seu cadastro
          </Text>
        </View>

        <Separator height={22} />

        <TextInput label="Nome" placeholder="Informe aqui seu nome" />

        <TextInput label="Email" placeholder="Informe aqui seu email" />

        <TextInput label="Senha" placeholder="Informe aqui seu senha" />

        <TextInput
          label="Confirmação de senha"
          placeholder="Informe aqui seu senha novamente"
        />

        <Separator height={12} />
        <Button title="Finalizar" onPress={() => navigate('SignInScreen')} />
      </Container>
    </ScrollView>
  );
};
