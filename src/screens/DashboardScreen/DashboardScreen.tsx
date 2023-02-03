import {
  Container,
  GestureMultiTouchContainer,
  Separator,
} from '../../components';

import {METRICS} from '../../utils';
import {Text} from '@rneui/base';
import {View} from 'react-native';

export const DashboardScreen = () => {
  return (
    <GestureMultiTouchContainer>
      <Container verticalPadding={18}>
        <Separator height={METRICS.topBarContainerPadding} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text h4>Dashboard</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text h4>Informações</Text>
        </View>
      </Container>
    </GestureMultiTouchContainer>
  );
};
