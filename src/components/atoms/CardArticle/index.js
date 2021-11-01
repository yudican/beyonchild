import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {DARK_COLOR, PRIMARY_COLOR} from '../../../utils/constant/color';
import {scaleHeight, scaleWidth} from '../../../utils/helper';
import DotIcon from '../Icon/DotIcon';
import TextView from '../TextView';
import Feather from 'react-native-vector-icons/Feather';
import {shadow} from '../../../utils/style';
const CardArticle = () => {
  return (
    <View style={[styles.cardContainer, shadow]}>
      <Image
        source={require('../../../assets/Image/Post/post-1.png')}
        style={{
          width: scaleWidth(30),
          height: scaleHeight(10),
          borderRadius: scaleHeight(1),
        }}
      />
      <View
        style={{
          paddingLeft: scaleWidth(3),
          width: scaleWidth(55),
        }}>
        <TextView size={14} type="Medium" color={DARK_COLOR}>
          Tips Memilih Sekolah yang Tepat untuk Anak
        </TextView>
        <View style={[styles.postDate, {marginTop: scaleHeight(1)}]}>
          <Feather name="calendar" color={DARK_COLOR} />
          <View style={[styles.postDate, {paddingLeft: scaleWidth(3)}]}>
            <TextView color={DARK_COLOR} size={10}>
              2 Juli 2021
            </TextView>
            <DotIcon style={{paddingHorizontal: scaleWidth(3)}} />
            <TextView color={PRIMARY_COLOR} size={10} type="Bold">
              Pra-Sekolah
            </TextView>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: scaleWidth(5),
    backgroundColor: '#fff',
    borderRadius: scaleHeight(1.5),
    padding: scaleHeight(1),
    marginTop: scaleHeight(2),
  },
  postDate: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default CardArticle;
