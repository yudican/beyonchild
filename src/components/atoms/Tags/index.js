import React from 'react';
import {StyleSheet, View} from 'react-native';
import {PRIMARY_COLOR} from '../../../utils/constant/color';
import {scaleHeight, scaleWidth} from '../../../utils/helper';
import TextView from '../TextView';
const Tags = ({label = 'Label'}) => {
  return (
    <View style={styles.container}>
      <TextView color={'#fff'}>{label}</TextView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: scaleHeight(0.3),
    paddingHorizontal: scaleWidth(2),
    borderRadius: scaleHeight(0.5),
    backgroundColor: PRIMARY_COLOR,
    marginRight: scaleWidth(2),
  },
});

export default Tags;
