import {Text} from 'react-native';

import {scale} from '../../../utils/';

export const ArrowSwiper = ({children}: any) => {
  return (
    <Text style={{fontSize: scale(42), color: '#af3476'}}>{children}</Text>
  );
};
