import {useNavigation} from '@react-navigation/core';

export const useNavigationHook = () => {
  const navigation = useNavigation();

  const navigate = (goTo: string) => {
    navigation.navigate(goTo);
  };

  return {navigate};
};
