import {Text} from '@rneui/base';
import {useEffect, useState} from 'react';
import {Container, PulseButton} from '../../components';

import {StyleSheet, View, Alert, Button} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

export const AlertScreen = () => {
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

  const [position, setPosition] = useState<string | null>(null);
  const [subscriptionId, setSubscriptionId] = useState<number | null>(null);
  useEffect(() => {
    return () => {
      clearWatch();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container padding={18} align="center" justify="center">
      <Text>Aleertaaaaaaa</Text>
      <Text>Aleertaaaaaaa</Text>
      <PulseButton />
    </Container>
  );
};
