import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {PRIMARY_COLOR} from '../../../utils/constant/color';
import {scaleHeight} from '../../../utils/helper';
import TextView from '../TextView';
const TextAction = ({onPress, lable, actionLable}) => {
  return (
    <View style={styles.container}>
      <TextView size={12}>{lable}</TextView>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <TextView size={12} color={PRIMARY_COLOR} type={'Bold'}>
          {actionLable}
        </TextView>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: scaleHeight(1),
  },
});

export default TextAction;
