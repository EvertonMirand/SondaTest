import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />

      <AppRoutes />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
