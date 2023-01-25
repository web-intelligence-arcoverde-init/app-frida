import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import styles from './style';

import {Text} from '@rneui/base';

const CELL_COUNT = 4;

import {Container, Separator, Button} from '../../components';

import {useNavigationHook} from '../../hooks';

export const RecoveryAccountCodeScreen = () => {
  const {navigate} = useNavigationHook();

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const [timeResendCode, setTimeResentCode] = useState(10);

  return (
    <Container padding={18} align="center" justify="center">
      <View style={{width: '100%'}}>
        <Text
          h1
          style={{
            color: `#AF3476`,
            textAlign: 'center',
          }}>
          {timeResendCode}
        </Text>
        <Separator height={2} />
        <Text
          style={{
            textAlign: 'center',
          }}>
          nós lhe enviaremos um texto com seu número de confirmação.
        </Text>
      </View>

      <Separator height={22} />

      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : <Cursor />)}
          </Text>
        )}
      />

      <Separator height={12} />

      <TouchableOpacity
        style={{width: '100%', alignItems: 'flex-end', marginRight: 40}}>
        <Text
          style={{
            color: `#AF3476`,
          }}>
          reenviar código
        </Text>
      </TouchableOpacity>

      <Separator height={12} />
      <Button
        title="Continuar"
        onPress={() => navigate('RecoveryAccountFormScreen')}
      />
    </Container>
  );
};
