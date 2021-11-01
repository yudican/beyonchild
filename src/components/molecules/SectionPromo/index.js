import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DARK_COLOR} from '../../../utils/constant/color';
import {scaleHeight, scaleWidth} from '../../../utils/helper';
import BannerPromo from '../../atoms/BannerPromo';
import TextView from '../../atoms/TextView';
const SectionPromo = () => {
  return (
    <View style={styles.container}>
      <TextView type="Bold" color={DARK_COLOR} size={14}>
        Untuk Moms
      </TextView>

      <View style={styles.cardItem}>
        <BannerPromo />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scaleWidth(5),
    marginTop: scaleHeight(3),
  },
  cardItem: {marginTop: scaleHeight(2)},
});

export default SectionPromo;
