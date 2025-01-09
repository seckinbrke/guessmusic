import {PropsWithChildren} from 'react';
import {Animated, TextStyle} from 'react-native';

type Props = {
  animatedValue: Animated.Value;
  style: TextStyle;
} & PropsWithChildren;

const AnimatedText = ({children, animatedValue, style}: Props) => {
  const animatedStyle = {
    transform: [{scale: animatedValue}],
    opacity: animatedValue,
  };

  return (
    <Animated.Text style={[animatedStyle, style]}>{children}</Animated.Text>
  );
};

export default AnimatedText;
