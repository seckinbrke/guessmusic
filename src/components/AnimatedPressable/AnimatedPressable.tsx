import {PropsWithChildren, useRef} from 'react';
import {
  Pressable,
  Animated,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from 'react-native';
import {animateHide, animateVisible} from '../../utils';

type Props = {
  onPress: (p: any) => void;
  style?: StyleProp<ViewStyle>;
  styleButton?: StyleProp<ViewStyle>;
  isDisable?: boolean;
} & PropsWithChildren;

const AnimatedPressable = ({
  children,
  onPress,
  style,
  styleButton,
  isDisable = false,
}: Props) => {
  const scale = useRef(new Animated.Value(1)).current;

  const pressInAnimation = () => {
    animateHide(scale, 0.9);
  };

  const pressOutAnimation = () => {
    animateVisible(scale);
  };

  const animatedStyle = {
    transform: [{scale}],
  };

  return (
    <Animated.View style={[styles.container, animatedStyle, style]}>
      <Pressable
        onPressIn={pressInAnimation}
        onPress={onPress}
        style={[styles.button, styleButton]}
        onPressOut={pressOutAnimation}
        disabled={isDisable}>
        {children}
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AnimatedPressable;
