import React, {useState} from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import {PRIMARY_COLOR} from '../../../utils/constant/color';
import {scaleHeight, scaleWidth} from '../../../utils/helper';
import DotIcon from '../Icon/DotIcon';
import TextView from '../TextView';
const BannerArticle = () => {
  const [imageWidth, setImageWidth] = useState(0);
  return (
    <ImageBackground
      style={styles.container}
      resizeMode={'cover'}
      borderRadius={scaleHeight(2)}
      onLayout={e => setImageWidth(e.nativeEvent.layout.width)}
      source={require('../../../assets/Image/Banner/post-banner.png')}>
      <View
        style={{
          backgroundColor: 'rgba(44, 62, 80,0.7)',
          height: '100%',
          width: imageWidth,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: scaleHeight(2),
        }}
      />
      <TextView size={14} color={'#fff'} type="Bold">
        Tips Menanamkan Hobi Membaca pada Anak
      </TextView>
      <View style={styles.conatinerButton}>
        <TextView color={'#fff'} size={12}>
          2 Juli 2021
        </TextView>
        <DotIcon style={{paddingHorizontal: scaleWidth(3)}} />
        <TextView color={PRIMARY_COLOR} size={12} type="Bold">
          Pra-Sekolah
        </TextView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: scaleHeight(20),
    maxHeight: scaleHeight(20),
    backgroundColor: '#464A7A',
    borderRadius: scaleHeight(2),
    justifyContent: 'center',
    paddingHorizontal: scaleWidth(5),
  },
  conatinerButton: {
    marginTop: scaleHeight(2),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default BannerArticle;
