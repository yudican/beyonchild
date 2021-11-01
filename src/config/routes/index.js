import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch, useSelector} from 'react-redux';
import {setHeaderToken} from '../axios/setHeaderToken';
import {setUserLogin} from '../redux/actions/userAction';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Routes = () => {
  const dispatch = useDispatch();
  const {token, user} = useSelector(state => state.user);
  const accessToken = token;
  const [user_token, setToken] = useState(accessToken);
  const [user_data, setUser] = useState(null);

  const getToken = async access_token => {
    if (!access_token) {
      const new_token = await AsyncStorage.getItem('token');
      setHeaderToken(new_token);
      return setToken(new_token);
    }
    setHeaderToken(access_token);
    return setToken(access_token || accessToken);
  };

  const getUser = async user_data => {
    if (!user_data) {
      const data_user = await AsyncStorage.getItem('user');
      dispatch(setUserLogin(JSON.parse(data_user)));
      SplashScreen.hide();
      return setUser(JSON.parse(data_user));
    }
    SplashScreen.hide();
    dispatch(setUserLogin(user_data));
    return setUser(user_data);
  };

  useEffect(() => {
    getToken(accessToken);
    if (!user_data) {
      getUser(user_data);
    }
  }, [accessToken, user]);

  if (user_token) {
    return <PrivateRoute />;
  }

  return <PublicRoute />;
};

export default Routes;
