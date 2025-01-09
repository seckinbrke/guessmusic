// NewInvoiceButton Component
import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleProp, ViewStyle} from 'react-native';
import {theme} from '../../constants/theme';
import styles from './styles';
import {AddInvoice} from '../Icons';
import AnimatedPressable from '../AnimatedPressable/AnimatedPressable';
import {Invoice, Bag} from '../Icons';
import {RouteName, IconMapType} from './types';

type NewInvoiceButtonPropsType = {
  isFocused: boolean;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export const NewInvoiceButton = ({
  isFocused,
  onPress,
  style,
}: NewInvoiceButtonPropsType) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: isFocused ? 1.1 : 1,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    }).start();
  }, [isFocused]);

  return (
    <AnimatedPressable onPress={onPress} style={[styles.button, style]}>
      <Animated.View
        style={[
          styles.iconContainer,
          styles.newInvoiceContainer,
          {transform: [{scale: scaleAnim}]},
        ]}>
        <AddInvoice
          color={isFocused ? theme.colors.main.black : theme.colors.main.white}
          width={32}
          height={32}
        />
      </Animated.View>
    </AnimatedPressable>
  );
};

type CustomTabBarButtonPropsType = {
  route: {name: RouteName};
  isFocused: boolean;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const iconMap: IconMapType = {
  HomeScreen: Invoice,
  BusinessInformationScreen: Bag,
};

export const CustomTabBarButton = ({
  route,
  isFocused,
  onPress,
  style,
}: CustomTabBarButtonPropsType) => {
  const IconComponent = iconMap[route.name];
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: isFocused ? 1.1 : 1,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    }).start();
  }, [isFocused, route.name]);

  return (
    <AnimatedPressable onPress={onPress} style={[styles.button, style]}>
      <Animated.View
        style={[styles.iconContainer, {transform: [{scale: scaleAnim}]}]}>
        {IconComponent && (
          <IconComponent
            color={
              isFocused ? theme.colors.main.black : theme.colors.main.white
            }
            width={28}
            height={28}
          />
        )}
      </Animated.View>
    </AnimatedPressable>
  );
};
