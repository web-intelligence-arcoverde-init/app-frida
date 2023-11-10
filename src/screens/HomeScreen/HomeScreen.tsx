import {Text} from '@rneui/themed';
import {View} from 'react-native';

import React from 'react';
import {useGetCurrentUserCoordinates} from 'src/hooks/useGetCurrentUserCoordinates';

export const HomeScreen = () => {
  const {position} = useGetCurrentUserCoordinates();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>{JSON.stringify(position)}</Text>
    </View>
  );
};
