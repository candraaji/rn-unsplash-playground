import React, {useEffect} from 'react';
import HomeScreen from './screens/Home';
import Orientation from 'react-native-orientation-locker';
import {View} from 'react-native';

function App() {
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  return <HomeScreen />;
}

export default App;
