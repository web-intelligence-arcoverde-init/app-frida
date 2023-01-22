import {View, StyleSheet} from 'react-native';

import {scale} from '../../../utils';

const defaultStyle = {
  height: scale(8),
  borderRadius: scale(4),
  marginLeft: scale(3),
  marginRight: scale(3),
  marginTop: scale(3),
  marginBottom: scale(3),
};

const styles = StyleSheet.create({
  activeDot: {
    backgroundColor: '#AF3476',
    width: scale(28),
    ...defaultStyle,
  },
  disabledDot: {
    backgroundColor: '#c7709f',
    width: scale(8),
    ...defaultStyle,
  },
});

interface DotSwiperProps {
  active?: boolean;
}

export const DotSwiper = ({active}: DotSwiperProps) => {
  const {activeDot, disabledDot} = styles;

  return <View style={active ? activeDot : disabledDot} />;
};
