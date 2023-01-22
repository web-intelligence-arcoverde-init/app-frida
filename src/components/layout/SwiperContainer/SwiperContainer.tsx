import {Text} from '@rneui/themed';

import {View} from 'react-native';
import {Container, Separator} from '../../';

import {scale} from '../../../utils/';

interface ISwiperContainer {
  title?: string;
  description?: string;
  footer?: any;
  children?: any;
}

export const SwiperContainer = ({
  title,
  children,
  description,
  footer,
}: ISwiperContainer) => {
  return (
    <Container align="center" justify="center" padding={22}>
      <Text>{title}</Text>
      <Separator height={8} />
      {children}
      <Separator height={8} />
      <Text>{description}</Text>
      {footer && <View style={{width: 80, marginTop: scale(8)}}>{footer}</View>}
    </Container>
  );
};
