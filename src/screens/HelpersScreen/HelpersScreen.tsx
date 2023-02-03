import {Text} from '@rneui/base';
import {Container, Separator, Button} from '../../components';
import {View} from 'react-native';
import {METRICS} from '../../utils';
import {useNavigationHook} from '../../hooks';

export const HelpersScreen = () => {
  const {navigate} = useNavigationHook();

  return (
    <Container verticalPadding={18} color="gray-50">
      <Separator height={METRICS.topBarContainerPadding} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Text h4>Contatos de emergencia</Text>
      </View>
      <Separator height={METRICS.insideSpacingXSmall} />
      <Button title="Adicionar" onPress={() => navigate('AddHelperContact')} />
    </Container>
  );
};
