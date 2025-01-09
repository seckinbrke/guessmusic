import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';

import {theme} from './src/constants/theme';
import StackWrapper from './src/components/StackWrapper/StackWrapper';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <GestureHandlerRootView style={styles.gesture}>
      <StackWrapper />
      <Toast />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  gesture: {flex: 1, backgroundColor: theme.colors.main.secondary},
});

export default App;
