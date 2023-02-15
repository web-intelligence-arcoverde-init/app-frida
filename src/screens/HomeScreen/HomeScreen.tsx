import {
  Alert,
  Image,
  PermissionsAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from '@rneui/themed';

import {IMAGES} from '../../assets';
import {Container, Button} from '../../components';

import {useNavigationHook} from '../../hooks';
import {scale} from '../../utils';

const {LogoNomeRosa} = IMAGES;

import Geolocation from '@react-native-community/geolocation';
import {useEffect, useState} from 'react';

const authorizationLevelOptions: ('whenInUse' | 'always' | 'auto')[] = [
  'whenInUse',
  'always',
  'auto',
];

const locationProviderOptions: ('playServices' | 'android' | 'auto')[] = [
  'playServices',
  'android',
  'auto',
];

export const HomeScreen = () => {
  const {navigate} = useNavigationHook();

  const [skipPermissionRequests, setSkipPermissionRequests] = useState(false);
  const [authorizationLevel, setAuthorizationLevel] = useState<
    'whenInUse' | 'always' | 'auto'
  >('auto');

  const [locationProvider, setLocationProvider] = useState<
    'playServices' | 'android' | 'auto'
  >('auto');

  const requestAuthorization = async () => {
    const authorization = await Geolocation.requestAuthorization();

    console.log(authorization);
  };

  const watchPosition = () => {
    try {
      const watchID = Geolocation.watchPosition(
        position => {
          setPosition(JSON.stringify(position));
        },
        error => Alert.alert('WatchPosition Error', JSON.stringify(error)),
      );
      setSubscriptionId(watchID);
    } catch (error) {
      Alert.alert('WatchPosition Error', JSON.stringify(error));
    }
  };

  const clearWatch = () => {
    subscriptionId !== null && Geolocation.clearWatch(subscriptionId);
    setSubscriptionId(null);
    setPosition(null);
  };

  useEffect(() => {
    Geolocation.setRNConfiguration({
      skipPermissionRequests,
      authorizationLevel,
      locationProvider,
    });
  }, [skipPermissionRequests, authorizationLevel, locationProvider]);

  const [position, setPosition] = useState<string | null>(null);
  const [subscriptionId, setSubscriptionId] = useState<number | null>(null);
  useEffect(() => {
    return () => {
      clearWatch();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      pos => {
        console.log(JSON.stringify(pos));
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true},
    );
  };

  useEffect(() => {
    watchPosition();
    getCurrentPosition();
  }, []);

  return (
    <Container padding={24} align="center" justify="center">
      <Image
        source={LogoNomeRosa}
        style={{width: scale(280), height: scale(360)}}
      />
      {subscriptionId !== null ? (
        <Button title="Clear Watch" onPress={clearWatch} />
      ) : (
        <Button title="Watch Position" onPress={watchPosition} />
      )}
      <Text
        style={{
          fontSize: scale(12),
          textAlign: 'center',
          marginTop: scale(12),
        }}>
        Ainda não faz parte ?
      </Text>

      <View style={{display: 'flex', flexDirection: 'row', marginTop: 2}}>
        <Text style={{fontSize: scale(12), textAlign: 'center'}}>
          Então clique
        </Text>
        <TouchableOpacity onPress={() => navigate('SignUpScreen')}>
          <Text
            style={{
              fontSize: scale(12),
              textAlign: 'center',
              color: `#AF3476`,
              marginLeft: 4,
              fontWeight: 'bold',
            }}>
            aqui.
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};
