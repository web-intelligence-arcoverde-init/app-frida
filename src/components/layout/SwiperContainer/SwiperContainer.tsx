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
      {children}
      <Separator height={8} />
      <Text style={{color: '#af3476'}} h2 h2Style={{fontSize: scale(24)}}>
        {title}
      </Text>

      <Separator height={4} />
      <Text style={{textAlign: 'center'}}>{description}</Text>
      {footer && footer}
    </Container>
  );
};
