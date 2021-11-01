import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddChild from '../../container/pages/Chilld/AddChild';
import Home from '../../container/pages/HomeScreen';
import RekomendasiSekolahScreen from '../../container/pages/HomeScreen/RekomendasiSekolahScreen';
import FilterRekomendasiSekolahScreen from '../../container/pages/HomeScreen/RekomendasiSekolahScreen/FilterRekomendasiSekolahScreen';
import ListSekolah from '../../container/pages/HomeScreen/RekomendasiSekolahScreen/ListSekolahScreen';
import SchoolDetailScreen from '../../container/pages/HomeScreen/RekomendasiSekolahScreen/SchoolDetailScreen';
import {DARK_COLOR} from '../../utils/constant/color';
import {scaleHeight, scaleWidth} from '../../utils/helper';
import {NavigationRef} from '../../utils/navigation';
const Stack = createNativeStackNavigator();
const PrivateRoute = () => {
  return (
    <Stack.Navigator initialRouteName="Home" ref={NavigationRef}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RekomendasiSekolahScreen"
        component={RekomendasiSekolahScreen}
        options={({navigation, route}) => ({
          headerStyle: {backgroundColor: '#fff'},
          headerBackTitle: 'Rekomendasi Sekolah',
          headerTintColor: DARK_COLOR,
          headerTitle: 'Rekomendasi Sekolah',
          headerLeft: props => (
            <Ionicons
              name="arrow-back-outline"
              style={{paddingLeft: scaleWidth(3)}}
              color={DARK_COLOR}
              size={scaleHeight(3)}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitleStyle: {
            fontFamily: 'Poppins',
            color: DARK_COLOR,
            fontWeight: 'bold',
          },
        })}
      />
      <Stack.Screen
        name="ListSekolah"
        component={ListSekolah}
        options={({navigation, route}) => ({
          headerStyle: {backgroundColor: '#fff'},
          headerBackTitle: 'Sekolah TK',
          headerTintColor: DARK_COLOR,
          headerTitle: 'Sekolah TK',
          headerLeft: props => (
            <Ionicons
              name="arrow-back-outline"
              style={{paddingLeft: scaleWidth(3)}}
              color={DARK_COLOR}
              size={scaleHeight(3)}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitleStyle: {
            fontFamily: 'Poppins',
            color: DARK_COLOR,
            fontWeight: 'bold',
          },
        })}
      />
      <Stack.Screen
        name="SchoolDetailScreen"
        component={SchoolDetailScreen}
        options={({navigation, route}) => ({
          headerStyle: {backgroundColor: '#fff'},
          headerBackTitle: 'Nama Sekolah',
          headerTintColor: DARK_COLOR,
          headerTitle: 'Nama Sekolah',
          headerLeft: props => (
            <Ionicons
              name="arrow-back-outline"
              style={{paddingLeft: scaleWidth(3)}}
              color={DARK_COLOR}
              size={scaleHeight(3)}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitleStyle: {
            fontFamily: 'Poppins',
            color: DARK_COLOR,
            fontWeight: 'bold',
          },
        })}
      />
      <Stack.Screen
        name="FilterRekomendasiSekolahScreen"
        component={FilterRekomendasiSekolahScreen}
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      />

      <Stack.Screen
        name="AddChild"
        component={AddChild}
        options={({navigation, route}) => ({
          headerStyle: {backgroundColor: '#fff'},
          headerBackTitle: 'Nama Sekolah',
          headerTintColor: DARK_COLOR,
          headerTitle: 'Nama Sekolah',
          headerLeft: props => (
            <Ionicons
              name="arrow-back-outline"
              style={{paddingLeft: scaleWidth(3)}}
              color={DARK_COLOR}
              size={scaleHeight(3)}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitleStyle: {
            fontFamily: 'Poppins',
            color: DARK_COLOR,
            fontWeight: 'bold',
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default PrivateRoute;
