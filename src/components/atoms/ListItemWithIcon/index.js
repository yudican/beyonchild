import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../../../utils/constant/color';
import {scaleHeight, scaleWidth} from '../../../utils/helper';
import TextView from '../TextView';
const ListItemWithIcon = ({
  Icon,
  label = 'Label',
  onPress,
  selected = false,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: selected ? PRIMARY_COLOR : '#FFF',
            borderColor: selected ? PRIMARY_COLOR : SECONDARY_COLOR,
          },
        ]}>
        <Icon width={scaleHeight(3.5)} height={scaleHeight(3.5)} />
        <TextView
          size={12}
          style={{paddingTop: scaleHeight(1)}}
          color={selected ? '#fff' : SECONDARY_COLOR}>
          {label}
        </TextView>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: SECONDARY_COLOR,
    paddingHorizontal: scaleWidth(2),
    paddingVertical: scaleHeight(1),
    width: scaleWidth(28),
    marginTop: scaleHeight(1),
  },
});
export default ListItemWithIcon;
