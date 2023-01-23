import {GestureResponderEvent} from 'react-native';

const NUMBERS_TOUCHES_SCREEN = 2;

import {useNavigationHook} from '.';

export const useGestureMultiTouchEvent = () => {
  const {navigate} = useNavigationHook();

  const onStartShouldSetResponder = (event: GestureResponderEvent) => {
    if (event.nativeEvent.touches.length === NUMBERS_TOUCHES_SCREEN) {
      navigate('AlertScreen');
      return true;
    }

    return false;
  };

  return {
    onStartShouldSetResponder,
  };
};
