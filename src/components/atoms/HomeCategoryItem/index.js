import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {scaleHeight, scaleWidth} from '../../../utils/helper';
import School from '../../../assets/Image/school.svg';
import TextView from '../TextView';
import {DARK_COLOR} from '../../../utils/constant/color';
const HomeCategoryItem = ({
  Icon = School,
  backgroundColor = 'red',
  label = 'Label',
  onNavigate,
}) => {
  return (
    <TouchableOpacity onPress={onNavigate} activeOpacity={0.8}>
      <View style={styles.container}>
        <View style={[styles.cardContent, {backgroundColor}]}>
          <Icon height={scaleHeight(4)} />
        </View>
        <TextView
          size={14}
          type="Bold"
          color={DARK_COLOR}
          style={{paddingTop: scaleHeight(0.5)}}>
          {label}
        </TextView>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  cardContent: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: scaleWidth(25),
    height: scaleHeight(8),
    borderRadius: scaleHeight(8) / 4,
    marginTop: scaleHeight(2),
  },
});

export default HomeCategoryItem;
