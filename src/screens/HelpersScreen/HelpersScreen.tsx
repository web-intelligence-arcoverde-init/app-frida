import {Text} from '@rneui/base';
import {Container, Separator} from '../../components';
import {View} from 'react-native';
import {METRICS} from '../../utils';

import Icon from 'react-native-vector-icons/Ionicons';

export const HelpersScreen = () => {
  return (
    <Container verticalPadding={18}>
      <Separator height={METRICS.topBarContainerPadding} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Text h4>Contatos de emergencia</Text>
        <Icon name="ios-add" size={20} />
      </View>
    </Container>
  );
};
