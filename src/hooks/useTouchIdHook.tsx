import TouchID from 'react-native-touch-id';
import {Alert} from 'react-native';

const optionalConfigObject = {
  title: 'Authentication Required', // Android
  color: '#e00606', // Android,
  fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
};

import {useNavigationHook} from './';

/*

 antes verificar se já não existe o touch id ou faceid vinculado

*/

export const useTouchIdHook = () => {
  const {navigate} = useNavigationHook();

  TouchID.authenticate(
    'to demo this react-native component',
    optionalConfigObject,
  )
    .then(success => {
      console.log(success);
      Alert.alert('Authenticated Successfully');
      navigate('DashboardScreen');
    })
    .catch(() => {
      Alert.alert('Authentication Failed');
    });

  return {};
};
