import {View, TouchableOpacity, Text} from 'react-native';

import {useNavigationHook} from '../../../hooks';

import {METRICS} from '../../../utils';

export const FooterRecoveryAccountMessage = () => {
  const {navigate} = useNavigationHook();

  return (
    <View style={{display: 'flex', flexDirection: 'row', marginTop: 8}}>
      <Text
        style={{
          fontSize: METRICS.font.small,
          textAlign: 'center',
          color: '#000',
        }}>
        Já tem uma conta? Então recupere
      </Text>
      <TouchableOpacity onPress={() => navigate('RecoveryAccountScreen')}>
        <Text
          style={{
            fontSize: METRICS.font.small,
            textAlign: 'center',
            color: `#AF3476`,
            marginLeft: 4,
          }}>
          aqui
        </Text>
      </TouchableOpacity>
    </View>
  );
};
