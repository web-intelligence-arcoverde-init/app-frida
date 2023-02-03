import {Text} from '@rneui/base';
import {Container, Separator, TextInput, Button} from '../../components';

import {METRICS} from '../../utils';

import {View} from 'react-native';
import {useNavigationHook} from '../../hooks';

export const AddHelperContact = () => {
  const {navigate} = useNavigationHook();

  return (
    <Container padding={18} align="center" justify="center">
      <View style={{width: '100%'}}>
        <Text
          h3
          style={{
            color: `#AF3476`,
          }}>
          Contato de emergência
        </Text>
        <Separator height={2} />
        <Text style={{color: '#000', fontSize: METRICS.font.small}}>
          nós forneça algumas informações do contato qual deseja adicionar para
          caso seja acionado o botão de emergência.
        </Text>
      </View>

      <Separator height={18} />

      <TextInput label="Nome" placeholder="Digite o nome aqui" />

      <TextInput label="Numero de celular" placeholder="Digite numero aqui" />

      <Separator height={18} />
      <Button
        title="Salvar contato"
        onPress={() => navigate('HelpersScreen')}
      />
    </Container>
  );
};
