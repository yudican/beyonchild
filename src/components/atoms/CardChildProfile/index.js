import React from 'react';
import {StyleSheet, View} from 'react-native';
import ChildPhoto from '../../../assets/Image/child-profile.svg';
import TextView from '../TextView';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {flexBetweenRow, shadow} from '../../../utils/style';
import Button from '../Button';
import {scaleFont, scaleHeight, scaleWidth} from '../../../utils/helper';
import {DARK_COLOR, PRIMARY_COLOR} from '../../../utils/constant/color';
import Carousel from 'react-native-snap-carousel';

const CardChildProfile = ({data}) => {
  return (
    <Carousel
      data={data}
      renderItem={item => <Item {...item} />}
      sliderWidth={scaleWidth(100)}
      itemWidth={scaleWidth(97)}
    />
  );
};

const Item = ({item, index}) => {
  return (
    <View key={item?.id} style={[styles.container, shadow]}>
      <ChildPhoto width={scaleHeight(8)} height={scaleHeight(8)} />
      <View style={{flex: 1, marginHorizontal: scaleWidth(2)}}>
        <View style={[flexBetweenRow]}>
          <View>
            <TextView size={16} color={DARK_COLOR} type="Medium">
              {item?.name}
            </TextView>
            <TextView size={14} color={DARK_COLOR}>
              {item?.older} tahun
            </TextView>
          </View>
          <MaterialCommunityIcons
            name="pencil"
            size={scaleFont(18)}
            color={PRIMARY_COLOR}
          />
        </View>
        <View style={{marginTop: scaleHeight(2)}}>
          <Button label={'Lihat Milestone'} type="Medium" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingTop: scaleHeight(2),
    marginHorizontal: scaleWidth(5),
    borderRadius: scaleHeight(2),
    paddingHorizontal: scaleWidth(3),
    marginTop: scaleHeight(5),
    marginBottom: scaleHeight(2),
  },
});
export default CardChildProfile;
