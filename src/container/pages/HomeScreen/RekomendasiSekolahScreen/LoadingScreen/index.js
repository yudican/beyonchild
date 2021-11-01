import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import Bee from '../../../../../assets/Image/bee.svg';
import TextView from '../../../../../components/atoms/TextView';
import Layout from '../../../../../components/Layout';
import {DARK_COLOR, PRIMARY_COLOR} from '../../../../../utils/constant/color';
import {scaleHeight, scaleWidth} from '../../../../../utils/helper';

const LoadingScreen = ({navigation}) => {
  const school = useSelector(state => state.school);
  console.log('LoadingScreen', school);
  return (
    <Layout style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: scaleHeight(3),
        }}>
        <Bee height={scaleHeight(30)} />
        <TextView
          size={16}
          style={{
            textAlign: 'center',
            marginTop: scaleHeight(2),
            marginHorizontal: scaleWidth(5),
          }}
          color={PRIMARY_COLOR}
          type={'Bold'}>
          Mohon ditunggu
        </TextView>
        <TextView
          size={13}
          style={{
            textAlign: 'center',
            marginTop: scaleHeight(2),
            marginHorizontal: scaleWidth(5),
          }}
          color={DARK_COLOR}>
          Jawaban kamu telah direkam dan dalam waktu beberapa menit hasil
          pilihan rekomendasi sekolah yang kamu perlukan akan dihasilkan.
        </TextView>
        <TextView
          size={13}
          style={{
            textAlign: 'center',
            marginTop: scaleHeight(2),
            marginHorizontal: scaleWidth(5),
          }}
          color={DARK_COLOR}>
          Terima kasih atas perhatiannya
        </TextView>
      </View>
    </Layout>
  );
};

export default LoadingScreen;
