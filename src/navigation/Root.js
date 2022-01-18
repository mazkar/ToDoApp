import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ms} from 'react-native-size-matters';
//screen
import Dashboard from '../screen/Dashboard/Dashboard';
import Activity from '../screen/Activity/Activity';

const Stack = createStackNavigator();

export default function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Dashboard}
          name="Dashboard"
          options={{
            title: 'TO DO LIST APP',
            headerStyle: {
              backgroundColor: '#16abf8',
            },
            headerTitleStyle: {
              fontWeight: '500',
              color: 'white',
              fontSize: ms(18),
            },
          }}
        />
        <Stack.Screen
          component={Activity}
          name="Activity"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
