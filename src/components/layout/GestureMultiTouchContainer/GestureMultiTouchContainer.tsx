import {View} from 'react-native';

import {useGestureMultiTouchEvent} from '../../../hooks';

export const GestureMultiTouchContainer = ({children}: any) => {
  const {onStartShouldSetResponder} = useGestureMultiTouchEvent();

  return (
    <View
      style={{width: '100%', height: '100%'}}
      onStartShouldSetResponder={onStartShouldSetResponder}>
      {children}
    </View>
  );
};
