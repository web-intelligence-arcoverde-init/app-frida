import {Input} from '@rneui/base';

const inputContainerStyle = {
  borderWidth: 1,
  padding: 0,
  borderRadius: 10,
  marginTop: 6,
  borderColor: 'rgba(0, 0, 0, 0.4)',
};

const errorMessageStyle = {color: '#AF3476'};

export const TextInput = ({label, placeholder, secureTextEntry}: any) => {
  return (
    <Input
      containerStyle={{paddingHorizontal: 0}}
      inputContainerStyle={inputContainerStyle}
      errorStyle={errorMessageStyle}
      errorProps={{}}
      label={label}
      labelStyle={{}}
      labelProps={{}}
      leftIconContainerStyle={{}}
      rightIconContainerStyle={{}}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};
