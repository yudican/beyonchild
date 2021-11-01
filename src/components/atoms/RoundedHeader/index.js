import React from 'react';
import {StyleSheet, View} from 'react-native';
import {PRIMARY_COLOR} from '../../../utils/constant/color';
import {scaleHeight} from '../../../utils/helper';
const RoundedHeader = ({children, style}) => {
  return (
    <View style={[styles.parent(style)]}>
      <View style={styles.child}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: style => ({
    height: scaleHeight(30),
    width: '100%',
    transform: [{scaleX: 2}],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    overflow: 'hidden',
    ...style,
  }),
  child: {
    flex: 1,
    transform: [{scaleX: 0.5}],

    backgroundColor: PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: scaleHeight(2),
  },
});

export default RoundedHeader;
