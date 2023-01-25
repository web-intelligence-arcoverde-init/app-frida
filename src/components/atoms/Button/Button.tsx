import {Button} from '@rneui/base';

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
        height: 48,
      }}
    />
  );
};
