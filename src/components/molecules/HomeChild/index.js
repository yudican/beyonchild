import React from 'react';
import {Image, View} from 'react-native';
import assets from '../../../assets';
import {DARK_COLOR, PRIMARY_COLOR} from '../../../utils/constant/color';
import {scaleHeight, scaleWidth} from '../../../utils/helper';
import Button from '../../atoms/Button';
import RoundedHeader from '../../atoms/RoundedHeader';
import TextView from '../../atoms/TextView';
import Layout from '../../Layout';
import Bee from '../../../assets/Image/bee.svg';
import {useNavigation} from '@react-navigation/core';
const HomeChild = () => {
  const navigation = useNavigation();
  return (
    <Layout>
      <RoundedHeader style={{marginTop: -scaleHeight(12)}}>
        <Image
          source={assets.Logo}
          style={{height: scaleHeight(10), width: scaleHeight(10)}}
        />
      </RoundedHeader>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: scaleHeight(3),
        }}>
        <TextView color={PRIMARY_COLOR} type="Bold" size={20}>
          Selamat Datang di Beyondchild!
        </TextView>
        <TextView
          size={14}
          style={{
            textAlign: 'center',
            marginTop: scaleHeight(2),
            marginHorizontal: scaleWidth(9),
          }}
          color={DARK_COLOR}>
          Yuk, isi profil si kecil untuk menikmati berbagai fitur yang tersedia!
        </TextView>
        <Bee height={scaleHeight(30)} />
      </View>
      <View style={{marginHorizontal: scaleWidth(15)}}>
        <Button
          label="Tambah Profil Anak"
          onPress={() => navigation.navigate('AddChild')}
        />
      </View>
    </Layout>
  );
};

export default HomeChild;
