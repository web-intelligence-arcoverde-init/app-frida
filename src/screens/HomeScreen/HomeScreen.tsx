import {
  Alert,
  Image,
  PermissionsAndroid,
  TextInput,
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
import React, {useCallback, useEffect, useState} from 'react';
import {Linking} from 'react-native';

export const HomeScreen = () => {
  const {navigate} = useNavigationHook();

  const [position, setPosition] = useState({latidude: 0, longitude: 0});

  const [skipPermissionRequests, setSkipPermissionRequests] = useState(false);
  const [authorizationLevel, setAuthorizationLevel] = useState<
    'whenInUse' | 'always' | 'auto'
  >('auto');

  const [locationProvider, setLocationProvider] = useState<
    'playServices' | 'android' | 'auto'
  >('auto');

  const requestAuthorization = async () => {
    console.log(Geolocation);
  };

  useEffect(() => {
    Geolocation.watchPosition(
      position => {
        setPosition({
          latidude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => Alert.alert('WatchPosition Error', JSON.stringify(error)),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 10,
        distanceFilter: 100,
      },
    );
  }, []);

  useEffect(() => {
    Geolocation.setRNConfiguration({
      skipPermissionRequests,
      authorizationLevel,
      locationProvider,
    });
  }, [skipPermissionRequests, authorizationLevel, locationProvider]);

  console.log(position);

  const url = position
    ? `https://www.google.com/maps?q=${position.latidude},${position.longitude}`
    : '';

  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.

    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <Container padding={24} align="center" justify="center">
      <Text>{JSON.stringify(position)}</Text>

      <TextInput
        editable
        multiline
        numberOfLines={4}
        value={url}
        style={{
          color: '#000',
          marginTop: scale(12),
        }}
      />

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
