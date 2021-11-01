import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SECONDARY_COLOR} from '../../../utils/constant/color';
import {scaleFont} from '../../../utils/helper';

const TextView = ({
  children,
  type = 'Regular',
  color = SECONDARY_COLOR,
  size = 10,
  style = {textAlign: 'left', ...style},
}) => {
  return (
    <Text style={styles.textStyle({type, color, size, style})}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  textStyle: ({type, color, size, style}) => ({
    fontFamily: `Poppins-${type}`,
    color,
    fontSize: scaleFont(size),
    ...style,
  }),
});

export default TextView;
