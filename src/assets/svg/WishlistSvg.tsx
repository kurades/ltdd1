import React from 'react';
import Svg, { Path, PathProps } from 'react-native-svg';
import { SVGProps } from './types';
import Animated from 'react-native-reanimated';
// import { View } from 'react-native';

const AnimatedPath = (Animated.createAnimatedComponent(
  Path
) as any) as React.ComponentClass<
  Animated.AnimateProps<{}, PathProps & { style?: any }>
>;

Animated.addWhitelistedNativeProps({
  stroke: true
});

const WishlistSVG = ({ color }: SVGProps) => {
  return (
    <Svg width="22" height="20" viewBox="0 0 22 20">
      <AnimatedPath
        d="M7.22666 0.350255C7.86635 0.369709 8.48573 0.4814 9.08581 0.68549H9.14572C9.18634 0.704782 9.2168 0.726105 9.2371 0.745397C9.4615 0.817489 9.67371 0.898719 9.87679 1.01041L10.2626 1.18302C10.4149 1.26425 10.5977 1.41554 10.6992 1.47748C10.8008 1.53739 10.9125 1.59933 11.0039 1.66939C12.1319 0.807335 13.5017 0.340263 14.913 0.350255C15.5537 0.350255 16.1934 0.440785 16.8016 0.644875C20.5494 1.86332 21.8998 5.97559 20.7718 9.57001C20.1321 11.4068 19.0862 13.0832 17.7165 14.4529C15.7558 16.3517 13.6042 18.0372 11.2882 19.4892L11.0343 19.6425L10.7703 19.479C8.44613 18.0372 6.28237 16.3517 4.3034 14.4428C2.9428 13.073 1.89595 11.4068 1.24611 9.57001C0.0987377 5.97559 1.44919 1.86332 5.23755 0.623552C5.532 0.522015 5.8356 0.450939 6.14021 0.411339H6.26206C6.54738 0.369709 6.83067 0.350255 7.11497 0.350255H7.22666ZM16.2736 3.559C15.8573 3.41583 15.4004 3.64023 15.2481 4.06668C15.106 4.49314 15.3293 4.96021 15.7558 5.1115C16.4067 5.35519 16.8423 5.99589 16.8423 6.70564V6.73712C16.823 6.96964 16.893 7.19404 17.0352 7.36665C17.1773 7.53926 17.3906 7.63978 17.6139 7.66111C18.0302 7.64994 18.3856 7.31588 18.4161 6.88841V6.76758C18.4465 5.34504 17.5845 4.05653 16.2736 3.559Z"
        fill={color}
      />
    </Svg>
  );
};
export default WishlistSVG;
