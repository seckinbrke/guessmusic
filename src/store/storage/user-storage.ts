import AsyncStorage from '@react-native-async-storage/async-storage';

// User information key
const USER_INFO_KEY = '@user_info';

// Generic function to store data
export const storeData = async <T>(key: string, value: T): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Error storing data:', e);
  }
};

// Generic function to retrieve data
export const getData = async <T>(key: string): Promise<T | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error retrieving data:', e);
    return null;
  }
};

// Function to store user information
export const storeUserInfo = async (userInfo: UserInfo): Promise<void> => {
  await storeData(USER_INFO_KEY, userInfo);
};

// Function to retrieve user information
export const getUserInfo = async (): Promise<UserInfo | null> => {
  return await getData<UserInfo>(USER_INFO_KEY);
};

// Function to remove user information
export const removeUserInfo = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(USER_INFO_KEY);
  } catch (e) {
    console.error('Error removing user info:', e);
  }
};

// TypeScript interface for user information
export interface UserInfo {
  _id: string;
  firebaseToken?: string;
  deviceId?: string;
  isSubscribed?: boolean;
  isSubs?: boolean;
  // Add any other user properties you need
}
