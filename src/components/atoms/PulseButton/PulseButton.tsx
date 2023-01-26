import {PulseAnimation} from 'react-native-animated-pulse';

export const PulseButton = () => {
  return (
    <PulseAnimation color="#e72f91" numPulses={2} diameter={340} speed={2} />
  );
};
