import React from 'react';
import {View, Text, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import styles from './styles';
import {Back, Delete, Tick} from '../Icons';
import {theme} from '../../constants/theme';
import {vibration} from '../../utils';

const Header = ({
  line1,
  line2,
  isBack,
  isSave,
  isDelete,
  onBackPress,
  onSavePress,
  onDeletePress,
  style,
}: {
  line1?: string;
  line2?: string;
  isBack?: boolean;
  isSave?: boolean;
  isDelete?: boolean;
  onBackPress?: () => void;
  onSavePress?: () => void;
  onDeletePress?: () => void;
  style?: StyleProp<ViewStyle>;
}) => (
  <View style={[styles.headerContainer, style]}>
    <View style={styles.leftContainer}>
      {isBack && (
        <TouchableOpacity
          onPress={() => {
            vibration();
            onBackPress?.();
          }}>
          <View style={styles.backView}>
            <Back width={16} height={16} color={theme.colors.main.white} />
          </View>
        </TouchableOpacity>
      )}
    </View>
    <View style={styles.centerContainer}>
      <Text style={styles.headerTitle}>{line1}</Text>
      <Text style={styles.headerTitle}>{line2}</Text>
    </View>
    <View style={styles.rightContainer}>
      {isSave && (
        <TouchableOpacity
          onPress={() => {
            vibration();
            onSavePress?.();
          }}>
          <View style={styles.tickView}>
            <Tick width={28} height={23} color={theme.colors.main.white} />
          </View>
        </TouchableOpacity>
      )}
      {isDelete && (
        <TouchableOpacity
          onPress={() => {
            vibration();
            onDeletePress?.();
          }}>
          <Delete width={28} height={23} color={theme.colors.main.white} />
        </TouchableOpacity>
      )}
    </View>
  </View>
);

export default Header;
