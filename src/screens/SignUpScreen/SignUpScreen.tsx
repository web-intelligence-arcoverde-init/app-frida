import {Text} from '@rneui/base';
import {TouchableOpacity, View} from 'react-native';
import {
  Container,
  GestureMultiTouchContainer,
  Separator,
  TextInput,
  Button,
} from '../../components';

export const SignUpScreen = () => {
  return (
    <GestureMultiTouchContainer>
      <Container padding={22} align="center" justify="center">
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

        <Separator height={28} />

        <TextInput />
        <TextInput />
        <TextInput />

        <Separator height={22} />
        <Button />

        <Separator height={8} />

        <View style={{display: 'flex', flexDirection: 'row', marginTop: 2}}>
          <Text style={{fontSize: 14, textAlign: 'center'}}>
            Já tem uma conta?
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 14,
                textAlign: 'center',
                color: `#AF3476`,
                marginLeft: 4,
              }}>
              Recupere
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
    </GestureMultiTouchContainer>
  );
};
