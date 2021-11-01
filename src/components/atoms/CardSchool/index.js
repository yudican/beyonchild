import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {DARK_COLOR, PRIMARY_COLOR} from '../../../utils/constant/color';
import {scaleHeight, scaleWidth} from '../../../utils/helper';
import {shadow} from '../../../utils/style';
import TextView from '../TextView';
const CardSchool = ({
  onPress,
  title = 'PAUD',
  subtitle,
  selected = false,
  image,
  style,
  titleLength = 20,
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View
        style={[
          styles.container,
          style?.container,
          {backgroundColor: selected ? PRIMARY_COLOR : '#fff'},
        ]}>
        <Image
          source={{uri: image}}
          style={[styles.imageSchool, style?.image]}
        />
        {title && (
          <TextView
            size={12}
            color={selected ? '#fff' : DARK_COLOR}
            style={[style?.title, {paddingTop: scaleHeight(1)}]}
            type="Bold">
            {title.length > titleLength
              ? `${title.slice(0, titleLength)}...`
              : title}
          </TextView>
        )}
        {subtitle && (
          <TextView
            size={10}
            color={selected ? '#fff' : PRIMARY_COLOR}
            type="Medium">
            {subtitle.length > 25 ? `${subtitle.slice(0, 25)}...` : subtitle}
          </TextView>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: scaleHeight(1),
    paddingHorizontal: scaleWidth(3),
    borderRadius: scaleHeight(1),
    backgroundColor: '#fff',
    width: scaleWidth(40),
    marginBottom: scaleHeight(2),
    ...shadow,
  },
  imageSchool: {height: scaleHeight(10), width: scaleHeight(10)},
});

export default CardSchool;
