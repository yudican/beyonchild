import React, {useState} from 'react';
import {View} from 'react-native';
import TextView from '../../../../components/atoms/TextView';
import Layout from '../../../../components/Layout';
import {DARK_COLOR, PRIMARY_COLOR} from '../../../../utils/constant/color';
import {scaleHeight, scaleWidth} from '../../../../utils/helper';
import Bee from '../../../../assets/Image/bee.svg';
import Button, {ButtonOutline} from '../../../../components/atoms/Button';
import JenjangPendidikanScreen from './JenjangPendidikanScreen';
import LokasiSekolahScreen from './LokasiSekolahScreen';
import BiayaPendidikanScreen from './BiayaPendidikanScreen';
import FasilitasSekolahScreen from './FasilitasSekolahScreen';
import MinatBakatScreen from './MinatBakatScreen';
import LoadingScreen from './LoadingScreen';
const RekomendasiSekolahScreen = ({navigation}) => {
  const [filter, setFilter] = useState(false);
  const [screen, setScreen] = useState(1);
  if (filter) {
    switch (screen) {
      case 1:
        return (
          <JenjangPendidikanScreen
            onPressItem={val => setScreen(val?.next)}
            progress={0.2 * 1}
          />
        );
      case 2:
        return (
          <LokasiSekolahScreen
            onPressItem={val => setScreen(val?.next)}
            progress={0.2 * 2}
          />
        );
      case 3:
        return (
          <BiayaPendidikanScreen
            onPressItem={val => setScreen(val?.next)}
            progress={0.2 * 3}
          />
        );
      case 4:
        return (
          <FasilitasSekolahScreen
            onPressItem={val => setScreen(val?.next)}
            progress={0.2 * 4}
          />
        );
      case 5:
        return (
          <MinatBakatScreen
            onPressItem={val => setScreen(val?.next)}
            progress={1}
          />
        );
      default:
        return <LoadingScreen />;
    }
  }
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
          size={13}
          style={{
            textAlign: 'center',
            marginTop: scaleHeight(2),
            marginHorizontal: scaleWidth(5),
          }}
          color={DARK_COLOR}>
          Moms akan diarahkan untuk menentukan pilihan apa yang ingin Moms ambil
          berdasarkan dengan keperluan anak untuk sekolah nantinya.
        </TextView>
        <TextView
          size={13}
          style={{
            textAlign: 'center',
            marginTop: scaleHeight(2),
            marginHorizontal: scaleWidth(5),
          }}
          color={DARK_COLOR}>
          Klik Lanjutkan untuk mencoba atau langsung menuju halaman utama
          Rekomendasi Sekolah.
        </TextView>
        <TextView
          size={13}
          style={{
            textAlign: 'center',
            marginTop: scaleHeight(2),
            marginHorizontal: scaleWidth(5),
          }}
          color={DARK_COLOR}>
          Selamat Mencoba!
        </TextView>
      </View>
      <View
        style={{
          marginHorizontal: scaleWidth(5),
          marginTop: scaleHeight(3),
        }}>
        <Button
          label="Lanjutkan"
          type="Medium"
          onPress={() => setFilter(true)}
        />
        <ButtonOutline
          label="Lewati"
          type="Medium"
          color={PRIMARY_COLOR}
          onPress={() => navigation.navigate('ListSekolah')}
        />
      </View>
    </Layout>
  );
};

export default RekomendasiSekolahScreen;
