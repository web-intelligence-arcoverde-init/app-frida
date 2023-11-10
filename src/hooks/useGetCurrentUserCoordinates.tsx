import {useEffect, useState} from 'react';

import Geolocation from '@react-native-community/geolocation';
import {Alert} from 'react-native';

type AuthorizationLevelType = 'whenInUse' | 'always' | 'auto';
type LocationProviderType = 'playServices' | 'android' | 'auto';

interface IGeolocationConfigRn {
  skipPermissionRequests: boolean;
  authorizationLevel: AuthorizationLevelType;
  locationProvider: LocationProviderType;
}

interface IDEfaultOptionsWatchUserPosition {
  enableHighAccuracy: boolean;
  timeout: number;
  maximumAge: number;
  distanceFilter: number;
}

const GEOLOCATION_CONFIG_RN: IGeolocationConfigRn = {
  skipPermissionRequests: false,
  authorizationLevel: 'auto',
  locationProvider: 'auto',
};

const DEFAULT_OPTIONS_WATCH_POSITION_USER: IDEfaultOptionsWatchUserPosition = {
  enableHighAccuracy: true,
  timeout: 1500,
  maximumAge: 10,
  distanceFilter: 50,
};

export const useGetCurrentUserCoordinates = () => {
  const [position, setPosition] = useState({latidude: 0, longitude: 0});

  useEffect(() => {
    Geolocation.watchPosition(
      geolocation => {
        setPosition({
          latidude: geolocation.coords.latitude,
          longitude: geolocation.coords.longitude,
        });
      },
      error => Alert.alert('WatchPosition Error', JSON.stringify(error)),
      DEFAULT_OPTIONS_WATCH_POSITION_USER,
    );
  }, []);

  useEffect(() => {
    Geolocation.setRNConfiguration(GEOLOCATION_CONFIG_RN);
  }, []);

  return {position};
};
