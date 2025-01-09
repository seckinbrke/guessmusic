import {Alert, Animated} from 'react-native';
import {
  getAvailablePurchases as getPurchases,
  initConnection,
} from 'react-native-iap';
import {COMMON_ANIMATION_DURATION} from './constants/common';
import {DocumentType} from './types';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

export const getAvailablePurchases = async (isInitialPage = false) => {
  try {
    await initConnection();
    const purchases = await getPurchases();
    if (purchases.length > 0) {
      if (!isInitialPage) {
        Alert.alert('Your purchases were updated.');
      }

      return true;
    } else {
      if (!isInitialPage) {
        Alert.alert("Your purchases don't exist.");
      }

      return false;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
};

export const animateHide = (animatedValue: any, value?: number) => {
  Animated.timing(animatedValue, {
    toValue: value || 0,
    useNativeDriver: true,
    duration: COMMON_ANIMATION_DURATION,
  }).start();
};

export const animateVisible = (animatedValue: any, value?: number) => {
  Animated.timing(animatedValue, {
    toValue: value || 1,
    useNativeDriver: true,
    duration: COMMON_ANIMATION_DURATION,
  }).start();
};

export const getFileName = (file: any, type: string) => {
  if (type === 'image-to-pdf') {
    return file.fileName;
  } else {
    return file.name;
  }
};

export const convertFileNameToPdfName = (file: any, type: string) => {
  const lastDotIndex = getFileName(file, type)?.lastIndexOf('.');
  return lastDotIndex !== -1
    ? getFileName(file, type)?.substring(0, lastDotIndex) + '.pdf'
    : getFileName(file, type) + '.pdf';
};

export const getFileExtension = (
  fileInner: any,
  type: string,
): DocumentType | null => {
  const lastDotIndex = getFileName(fileInner, type)?.lastIndexOf('.');
  return lastDotIndex !== -1
    ? (getFileName(fileInner, type)?.substring(
        lastDotIndex + 1,
      ) as DocumentType)
    : null;
};

export const isValidUrl = (url: string) => {
  const urlPattern = /^(https?:\/\/)?[^\s/$.?#].[^\s]*$/i;
  return urlPattern.test(url);
};

export const vibration = () => {
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  ReactNativeHapticFeedback.trigger('impactLight', options);
};
