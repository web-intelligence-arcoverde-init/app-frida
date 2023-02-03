import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {Container, Separator, Button} from '../../components';
import {useNavigationHook, useChronometerHook} from '../../hooks';

import {METRICS} from '../../utils';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import styles from './style';

import {Text} from '@rneui/base';

const CELL_COUNT = 4;

export const SignUpCodeScreen = () => {
  const {navigate} = useNavigationHook();

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const {handleStart, chronometer} = useChronometerHook();

  function resendCodeConfirmation() {
    handleStart();
  }

  return (
    <Container padding={18} align="center" justify="center">
      <View style={{width: '100%'}}>
        <Text
          h1
          style={{
            color: `#AF3476`,
            textAlign: 'center',
          }}>
          {chronometer}
        </Text>
        <Separator height={2} />
        <Text
          style={{
            textAlign: 'center',
            fontSize: METRICS.font.small,
            color: '#000',
          }}>
          Nós lhe enviaremos um texto com seu número de confirmação.
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
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />

      <Separator height={12} />

      <TouchableOpacity
        onPress={() => resendCodeConfirmation()}
        style={{
          width: '100%',
          alignItems: 'flex-end',
          marginRight: METRICS.insideSpacingXMedium,
        }}>
        <Text
          style={{
            color: `#AF3476`,
            fontSize: METRICS.font.small,
            fontWeight: 'bold',
          }}>
          Reenviar código
        </Text>
      </TouchableOpacity>

      <Separator height={12} />
      <Button title="Continuar" onPress={() => navigate('SignUpFormScreen')} />
    </Container>
  );
};
