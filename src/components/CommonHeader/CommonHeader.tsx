import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import AnimatedPressable from '../AnimatedPressable/AnimatedPressable';
import {LeftChevron, Settings} from '../Icons';
import {theme} from '../../constants/theme';
import {ROUTE_NAMES} from '../../constants/common';
import {useNavigation} from '@react-navigation/native';

type Props = {
  title: string;
  description?: string;
  hasSettingsButton?: boolean;
  hasBackButton?: boolean;
};

const CommonHeader = ({
  title,
  description,
  hasSettingsButton,
  hasBackButton,
}: Props) => {
  const navigation: any = useNavigation();

  const handleSettingsButton = () => {
    navigation.navigate(ROUTE_NAMES.SETTINGS_PAGE);
  };
  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {hasBackButton && (
        <View style={styles.backButtonContainer}>
          <AnimatedPressable
            style={styles.backButton}
            onPress={handleBackButton}>
            <LeftChevron
              width={15}
              height={25}
              color={theme.colors.main.white}
              style={styles.backIcon}
            />
          </AnimatedPressable>
        </View>
      )}
      <View
        style={[styles.header, hasBackButton && styles.headerWithBackButton]}>
        <Text style={styles.title}>{title}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
      {hasSettingsButton && (
        <View style={styles.settingsButtonContainer}>
          <AnimatedPressable
            style={styles.settingsButton}
            onPress={handleSettingsButton}>
            <Settings width={25} height={25} color={theme.colors.main.white} />
          </AnimatedPressable>
        </View>
      )}
    </View>
  );
};

export default CommonHeader;
