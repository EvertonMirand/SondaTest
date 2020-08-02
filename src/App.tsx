import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />

      <AppRoutes />
    </View>
  );
};

export default App;
