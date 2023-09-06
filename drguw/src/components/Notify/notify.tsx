import {Alert, Text} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {clearAlert} from '../../features/alert/alertSlice';
import React, {useEffect} from 'react';

export const Notify = () => {
  const alert = useAppSelector(state => state.alert);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(alert);
    switch (alert.status) {
      case 'success':
        Alert.alert('Success', alert.message, [
          {
            text: 'OK',
          },
        ]);
        break;
      case 'error':
        Alert.alert('Error', alert.message, [
          {
            text: 'OK',
          },
        ]);
        break;
      default:
        break;
    }
    dispatch(clearAlert());
  }, [alert, dispatch]);

  return <Text />;
};

export default Notify;
