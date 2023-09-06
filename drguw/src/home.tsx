import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';
import {useAppDispatch} from './store/hooks';
import {setAlert} from './features/alert/alertSlice';
import Notify from './components/Notify/notify';

export const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log('here');
    dispatch(setAlert({status: 'success', message: 'alert working fine'}));
  }, [dispatch]);
  return (
    <SafeAreaView>
      <Notify />
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="white"
      />
      <Text>Hello Saltanat!!!</Text>
    </SafeAreaView>
  );
};
