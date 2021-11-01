import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {PRIMARY_COLOR} from '../../../../utils/constant/color';
import {scaleFont, scaleHeight} from '../../../../utils/helper';
import {shadow} from '../../../../utils/style';
const CircleIcon = ({Icon, name, color = PRIMARY_COLOR, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.circleIcon}>
        <Icon name={name} size={scaleFont(20)} color={color} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circleIcon: {
    backgroundColor: '#fff',
    height: scaleHeight(4),
    width: scaleHeight(4),
    borderRadius: scaleHeight(2),
    justifyContent: 'center',
    alignItems: 'center',
    ...shadow,
  },
});

export default CircleIcon;
