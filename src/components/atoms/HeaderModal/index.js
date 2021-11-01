import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {DARK_COLOR, SECONDARY_COLOR} from '../../../utils/constant/color';
import {scaleHeight, scaleWidth} from '../../../utils/helper';
import Ionicons from '../Icon/VectorIcon/Ionicons';
import TextView from '../TextView';
const HeaderModal = ({
  onLeftPress,
  onRightPress,
  actions = true,
  draggableIcon = true,
  rightContent = true,
  borderButtom = true,
}) => {
  return (
    <View style={styles.headerContainer}>
      {draggableIcon && (
        <View style={styles.headerIndicatorContainer}>
          <View style={styles.headerIndicator} />
        </View>
      )}
      {actions && (
        <View
          style={[
            styles.headerContentContainer,
            {
              justifyContent: rightContent ? 'space-between' : 'flex-start',
              borderBottomColor: borderButtom ? SECONDARY_COLOR : '#fff',
            },
          ]}>
          <TouchableOpacity onPress={onLeftPress} activeOpacity={0.8}>
            <View style={styles.headerContent}>
              <Ionicons name={'close'} size={scaleHeight(3)} />
              <TextView
                size={14}
                color={DARK_COLOR}
                type="Bold"
                style={{marginLeft: scaleWidth(2)}}>
                Filter
              </TextView>
            </View>
          </TouchableOpacity>
          {rightContent && (
            <TouchableOpacity onPress={onRightPress} activeOpacity={0.8}>
              <TextView size={14} color={DARK_COLOR} type="Bold">
                Reset
              </TextView>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fff',
    borderTopStartRadius: scaleHeight(2),
    borderTopEndRadius: scaleHeight(2),
  },
  headerIndicatorContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: scaleHeight(1),
    paddingBottom: scaleHeight(1),
  },
  headerIndicator: {
    width: scaleWidth(15),
    height: scaleHeight(0.8),
    backgroundColor: SECONDARY_COLOR,
    borderRadius: scaleHeight(1),
  },
  headerContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scaleWidth(5),
    borderBottomColor: SECONDARY_COLOR,
    borderBottomWidth: 0.5,
    paddingBottom: scaleHeight(1),
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default HeaderModal;
