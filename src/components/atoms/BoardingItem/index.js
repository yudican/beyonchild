import React from 'react';
import {View} from 'react-native';
import {DARK_COLOR} from '../../../utils/constant/color';
import {scaleHeight, scaleWidth} from '../../../utils/helper';
import TextView from '../TextView';
const BoardingItem = ({Icon, title, subtitle}) => {
  console.log(title);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Icon height={scaleHeight(20)} />
      <View style={{width: scaleWidth(80), marginTop: scaleHeight(2)}}>
        <TextView
          type="Medium"
          size={16}
          color={DARK_COLOR}
          style={{textAlign: 'center'}}>
          {title}
        </TextView>
        <TextView size={12} color={DARK_COLOR} style={{textAlign: 'center'}}>
          {subtitle}
        </TextView>
      </View>
    </View>
  );
};

export default BoardingItem;
