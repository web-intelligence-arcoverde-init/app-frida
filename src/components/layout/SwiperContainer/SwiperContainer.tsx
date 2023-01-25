import {Text} from '@rneui/themed';

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
    <Container align="center">
      {children}
      <Separator height={18} />
      <Text style={{color: '#af3476'}} h2 h2Style={{fontSize: scale(24)}}>
        {title}
      </Text>

      <Separator height={8} />
      <Text style={{textAlign: 'center'}}>{description}</Text>
      {footer && footer}
    </Container>
  );
};
