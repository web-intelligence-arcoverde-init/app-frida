import {Input} from '@rneui/base';

const inputContainerStyle = {
  borderWidth: 1,
  borderRadius: 10,
  marginTop: 6,
  borderColor: 'rgba(0, 0, 0, 0.2)',
  padding: 10,
};

const labelStyle = {
  color: '#000',
  fontWeight: 400,
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
      //@ts-ignore
      labelStyle={labelStyle}
      labelProps={{}}
      leftIconContainerStyle={{}}
      rightIconContainerStyle={{}}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};
