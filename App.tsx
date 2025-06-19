import { SafeAreaView } from 'react-native';
import React from 'react';
import { HomeScreen } from './src/screens';
import { ScaledSheet } from 'react-native-size-matters';

const App = () => {
  return (
    <SafeAreaView style={style.mainContainer}>
      <HomeScreen />
    </SafeAreaView>
  );
};
const style = ScaledSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#becacc',
  },
});
export default App;
