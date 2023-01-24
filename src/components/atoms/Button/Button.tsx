import {Button} from '@rneui/base';

export const CustomButton = () => {
  return (
    <Button
      title="Entrar"
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
