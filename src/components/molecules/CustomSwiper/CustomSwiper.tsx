import Swiper from 'react-native-swiper';

import {DotSwiper, ArrowSwiper} from '../../';

export const CustomSwiper = ({children}: any) => {
  const SHOW_ARROW_SWIPER = true;
  const LOOP_SWIPER = false;

  return (
    <Swiper
      loop={LOOP_SWIPER}
      showsButtons={SHOW_ARROW_SWIPER}
      dot={<DotSwiper />}
      activeDot={<DotSwiper active />}
      nextButton={<ArrowSwiper>›</ArrowSwiper>}
      prevButton={<ArrowSwiper>‹</ArrowSwiper>}>
      {children}
    </Swiper>
  );
};
