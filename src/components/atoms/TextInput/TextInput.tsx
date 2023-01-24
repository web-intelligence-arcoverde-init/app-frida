import {Input} from '@rneui/base';

export const TextInput = () => {
  return (
    <Input
      containerStyle={{}}
      inputContainerStyle={{
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginTop: 6,
        borderColor: 'rgba(0, 0, 0, 0.4)',
      }}
      errorMessage="Oops! that's not correct."
      errorStyle={{color: '#AF3476'}}
      errorProps={{}}
      inputStyle={{}}
      label="Email"
      labelStyle={{color: '#695C5C', fontWeight: '400', lineHeight: 21}}
      labelProps={{}}
      leftIconContainerStyle={{}}
      rightIconContainerStyle={{}}
      placeholder="Informe seu email"
    />
  );
};
