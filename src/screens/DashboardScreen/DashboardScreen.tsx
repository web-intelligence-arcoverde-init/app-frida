import {
  Container,
  GestureMultiTouchContainer,
  Separator,
} from '../../components';

import {METRICS} from '../../utils';
import {Text} from '@rneui/base';
import {View} from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import {useEffect} from 'react';

export const DashboardScreen = () => {
  return (
    <GestureMultiTouchContainer>
      <Container verticalPadding={18} color="gray-50">
        <Separator height={METRICS.topBarContainerPadding} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 20,
          }}>
          <Text h4>Dashboard</Text>
        </View>
      </Container>
    </GestureMultiTouchContainer>
  );
};
