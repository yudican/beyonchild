import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import TextView from '../../../../components/atoms/TextView';
import Layout from '../../../../components/Layout';
import {DARK_COLOR, PRIMARY_COLOR} from '../../../../utils/constant/color';
import {scaleFont, scaleHeight, scaleWidth} from '../../../../utils/helper';
import Social from '../../../../assets/Icon/Milestone/social.svg';
import Bahasa from '../../../../assets/Icon/Milestone/bahasa.svg';
import Kognitif from '../../../../assets/Icon/Milestone/kognitif.svg';
import Fisik from '../../../../assets/Icon/Milestone/fisik.svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {shadow} from '../../../../utils/style';
import {milestones} from './data';
const MileStone = ({navigation}) => {
  return (
    <Layout>
      <View
        style={{paddingHorizontal: scaleWidth(5), paddingTop: scaleHeight(2)}}>
        <TextView size={16} type="Bold" color={DARK_COLOR}>
          Tumbuh Kembang
        </TextView>
        <TextView size={12}>0-2 bulan</TextView>

        {milestones &&
          milestones.map(item => (
            <Item
              key={item?.id}
              Icon={item?.Icon}
              label={item?.title}
              onPress={() =>
                navigation.navigate('MilstoneDetail', {
                  milestone_id: item?.id,
                  item,
                })
              }
            />
          ))}
      </View>
    </Layout>
  );
};

const Item = ({Icon, label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.listItem, shadow]}>
        <View style={styles.listItemContent}>
          <Icon widh={scaleHeight(4)} height={scaleHeight(4)} />
          <TextView
            size={16}
            type="Bold"
            color={DARK_COLOR}
            style={{paddingLeft: scaleWidth(2)}}>
            {label}
          </TextView>
        </View>

        <MaterialCommunityIcons name={'chevron-right'} size={scaleFont(18)} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scaleWidth(3),
    paddingVertical: scaleHeight(2),
    marginTop: scaleHeight(2),
    backgroundColor: '#fff',
    borderRadius: scaleHeight(1),
  },
  listItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default MileStone;
