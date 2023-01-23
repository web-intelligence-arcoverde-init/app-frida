import Geolocation from '@react-native-community/geolocation';
import {Alert, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0122;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export const getPositionCoordinatesUser = () => {
  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      pos => {
        console.log(pos);
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true},
    );
  };

  return {getCurrentPosition};
};
