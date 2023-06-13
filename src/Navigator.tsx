import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CityDetails from './CityDetails';
import SearchPage from './SearchPage';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SearchPage" component={SearchPage} />
      <Stack.Screen name="CityDetails" component={CityDetails} />
    </Stack.Navigator>
  );
};

export default Navigator;
