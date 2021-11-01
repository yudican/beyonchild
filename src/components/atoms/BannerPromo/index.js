import React from 'react';
import {StyleSheet, View} from 'react-native';
import {PRIMARY_COLOR} from '../../../utils/constant/color';
import {scaleHeight, scaleWidth} from '../../../utils/helper';
import TextView from '../TextView';
const BannerPromo = () => {
  return (
    <View style={styles.container}>
      <TextView size={14} color={'#fff'} type="Bold">
        Dapatkan voucher promo pra-registrasi sekolah anak anda!
      </TextView>
      <TextView size={12} color={'#fff'}>
        Buruan diambil sebelum kehabisan!!
      </TextView>
      <View style={styles.conatinerButton}>
        <TextView color={'#fff'} size={12}>
          Klik Disini
        </TextView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: scaleHeight(20),
    width: '100%',
    backgroundColor: '#464A7A',
    borderRadius: scaleHeight(2),
    justifyContent: 'center',
    paddingHorizontal: scaleWidth(5),
  },
  conatinerButton: {
    paddingVertical: scaleHeight(0.7),
    backgroundColor: PRIMARY_COLOR,
    width: scaleWidth(25),
    borderRadius: scaleHeight(0.7) / 2,
    marginTop: scaleHeight(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BannerPromo;
