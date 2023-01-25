import {View, TouchableOpacity, Text} from 'react-native';

import {useNavigationHook} from '../../../hooks';

export const FooterRecoveryAccountMessage = () => {
  const {navigate} = useNavigationHook();

  return (
    <View style={{display: 'flex', flexDirection: 'row', marginTop: 8}}>
      <Text style={{fontSize: 14, textAlign: 'center'}}>Já tem uma conta?</Text>
      <TouchableOpacity onPress={() => navigate('RecoveryAccountScreen')}>
        <Text
          style={{
            fontSize: 14,
            textAlign: 'center',
            color: `#AF3476`,
            marginLeft: 4,
          }}>
          Recupere
        </Text>
      </TouchableOpacity>
    </View>
  );
};
