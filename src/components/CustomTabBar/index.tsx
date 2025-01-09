import {View} from 'react-native';
import {NewInvoiceButton, CustomTabBarButton} from '../CustomTabBarButton';
import styles from './styles';
import {ROUTE_NAMES} from '../../constants/common';
import { vibration } from '../../utils';

const CustomTabBar = ({state, navigation}: any) => {
  const route1 = state.routes[0];
  const route2 = state.routes[1];
  const isFocused1 = state.index === 0;
  const isFocused2 = state.index === 1;

  const handlePress = (route: any, isFocused: boolean) => {
    vibration();
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
    });
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainDiv}>
        <View>
          <CustomTabBarButton
            key={route1.name}
            route={route1}
            isFocused={isFocused1}
            onPress={() => handlePress(route1, isFocused1)}
          />
        </View>

        <NewInvoiceButton
          isFocused={true}
          onPress={() => navigation.navigate(ROUTE_NAMES.NEW_INVOICE)}
        />

        <View>
          <CustomTabBarButton
            key={route2.name}
            route={route2}
            isFocused={isFocused2}
            onPress={() => handlePress(route2, isFocused2)}
          />
        </View>
      </View>
    </View>
  );
};

export default CustomTabBar;
