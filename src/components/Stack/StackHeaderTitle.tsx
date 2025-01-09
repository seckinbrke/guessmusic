import React from 'react';
import {View, Text, StyleProp, ViewStyle} from 'react-native';
import styles from './styles';

const StackHeaderTitle = ({
  line1,
  line2,
}: {
  line1?: string;
  line2?: string;
  style?: StyleProp<ViewStyle>;
}) => (
  <View style={styles.centerContainer}>
    <Text style={styles.headerTitle}>{line1}</Text>
    <Text style={styles.headerTitle}>{line2}</Text>
  </View>
);

export default StackHeaderTitle;
