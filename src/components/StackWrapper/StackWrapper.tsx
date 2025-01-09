import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {ROUTE_NAMES} from '../../constants/common';
import Home from '../../pages/Home/Home';
import {HomeStackOptions} from './options';

const Stack = createStackNavigator();

const StackWrapper = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTE_NAMES.HOME}>
        <Stack.Screen
          options={HomeStackOptions}
          name="HomePage"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackWrapper;
