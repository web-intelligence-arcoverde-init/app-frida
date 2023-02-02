import {Button} from '@rneui/base';
import {scale} from '../../../utils';

export const CustomButton = ({onPress, title}: any) => {
  return (
    <Button
      onPress={() => onPress()}
      title={title}
      containerStyle={{
        borderRadius: 10,
        width: '100%',
      }}
      buttonStyle={{
        backgroundColor: `#AF3476`,
        height: scale(48),
      }}
    />
  );
};
