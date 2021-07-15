import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BlogProvider from './src/context/BlogContext';
import HomeScreen from './src/screens/HomeScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import ViewDetailScreen from './src/screens/ViewDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <BlogProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Blog List" component={HomeScreen} />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Edit" component={EditScreen} />
          <Stack.Screen name="View Detail" component={ViewDetailScreen} />
        </Stack.Navigator>
      </BlogProvider>
    </NavigationContainer>
  );
};

export default App;
