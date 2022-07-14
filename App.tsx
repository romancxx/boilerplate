import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from '@states/store';

// Screens
import Home from '@screens/Home/Home';
import Profile from '@screens/Profile/Profile';
import { Screen } from '@navigation/screen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider {...{ store }}>
        <Stack.Navigator>
          <Stack.Screen name={Screen.Home} component={Home} />
          <Stack.Screen name={Screen.Profile} component={Profile} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
