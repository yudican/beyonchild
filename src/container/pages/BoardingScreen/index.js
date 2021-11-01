import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {Image} from 'react-native';
import assets from '../../../assets';
import RoundedHeader from '../../../components/atoms/RoundedHeader';
import Layout from '../../../components/Layout';
import BoardingView from '../../../components/molecules/BoardingView';
import {scaleHeight} from '../../../utils/helper';
import SplashScreen from 'react-native-splash-screen';
const BoardingScreen = ({navigation}) => {
  const checkBoarding = async () => {
    const isBoarding = await AsyncStorage.getItem('boarding');
    if (isBoarding > 0) {
      SplashScreen.hide();
      navigation.replace('Login');
    }
  };
  useEffect(() => {
    checkBoarding();
  }, [navigation]);

  return (
    <Layout>
      <RoundedHeader style={{marginTop: -scaleHeight(12)}}>
        <Image
          source={assets.Logo}
          style={{height: scaleHeight(10), width: scaleHeight(10)}}
        />
      </RoundedHeader>
      <BoardingView />
    </Layout>
  );
};

export default BoardingScreen;
