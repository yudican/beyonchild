import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DARK_COLOR} from '../../../utils/constant/color';
import {scaleHeight, scaleWidth} from '../../../utils/helper';
import BannerArticle from '../../atoms/BannerArticle';
import BannerPromo from '../../atoms/BannerPromo';
import TextView from '../../atoms/TextView';
const SectionArticle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardItem}>
        <BannerArticle />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {paddingHorizontal: scaleWidth(5), marginTop: scaleHeight(3)},
  cardItem: {marginTop: scaleHeight(2)},
});

export default SectionArticle;
