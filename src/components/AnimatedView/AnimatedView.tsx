import {PropsWithChildren} from 'react';
import {Animated, ViewStyle} from 'react-native';

type Props = {
  animatedValue: Animated.Value;
  style?: ViewStyle;
} & PropsWithChildren;

const AnimatedView = ({children, animatedValue, style}: Props) => {
  const animatedStyle = {
    transform: [{scale: animatedValue}],
    opacity: animatedValue,
  };

  return (
    <Animated.View style={[animatedStyle, style]}>{children}</Animated.View>
  );
};

export default AnimatedView;
