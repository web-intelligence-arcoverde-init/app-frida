import {Text} from '@rneui/base';
import {Container, Separator, Button} from '../../components';
import {View} from 'react-native';
import {METRICS} from '../../utils';
import {useNavigationHook} from '../../hooks';

import Icon from 'react-native-vector-icons/Ionicons';

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
          backgroundColor: '#AF3476',
          padding: 12,
          borderRadius: 20,
        }}>
        <Text h4 style={{color: 'white'}}>
          Contatos de emergencia
        </Text>
        <Icon
          name="ios-add"
          size={40}
          color="#fff"
          onPress={() => navigate('AddHelperContact')}
        />
      </View>
      <Separator height={METRICS.insideSpacingXSmall} />
    </Container>
  );
};
