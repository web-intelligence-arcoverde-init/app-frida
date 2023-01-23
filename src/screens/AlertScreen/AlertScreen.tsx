import {Text} from '@rneui/themed';

import {Container, GestureMultiTouchContainer} from '../../components';

export const AlertScreen = () => {
  return (
    <GestureMultiTouchContainer>
      <Container padding={24} align="center" justify="center">
        <Text>Alerta nessa </Text>
      </Container>
    </GestureMultiTouchContainer>
  );
};
