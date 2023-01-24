import {Text} from '@rneui/base';
import {
  Container,
  GestureMultiTouchContainer,
  TextInput,
  Button,
} from '../../components';

export const RecoveryAccountScreen = () => {
  return (
    <GestureMultiTouchContainer>
      <Container padding={22} align="center" justify="center">
        <Text
          h3
          style={{
            color: `#AF3476`,
            textAlign: 'center',
          }}>
          Recupere sua conta
        </Text>

        <TextInput />

        <Button />
      </Container>
    </GestureMultiTouchContainer>
  );
};
