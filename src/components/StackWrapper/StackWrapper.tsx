import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {ROUTE_NAMES} from '../../constants/common';
import {HomeStackOptions} from './options';
import HomeScreen from '../../pages/Home/Home';

const Stack = createStackNavigator();

const StackWrapper = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTE_NAMES.HOME}>
        <Stack.Screen
          options={HomeStackOptions}
          name="HomeScreen"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackWrapper;
