import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SECONDARY_COLOR} from '../../../utils/constant/color';
import TextView from '../TextView';
const TextDivider = ({lable = 'text'}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLine} />
      <View>
        <TextView style={styles.lable} size={12}>
          {lable}
        </TextView>
      </View>
      <View style={styles.containerLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  containerLine: {flex: 1, height: 0.5, backgroundColor: SECONDARY_COLOR},
  lable: {width: 50, textAlign: 'center'},
});

export default TextDivider;
