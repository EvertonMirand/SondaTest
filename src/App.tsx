import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <AppRoutes />
    </View>
  );
};

export default App;
