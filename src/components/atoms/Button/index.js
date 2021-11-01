import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../../../utils/constant/color';
import {scaleFont, scaleHeight, scaleWidth} from '../../../utils/helper';
import TextView from '../TextView';
const Button = ({
  label = 'Button Label',
  onPress,
  loading = false,
  disabled = false,
  type = 'Bold',
}) => {
  if (disabled) {
    return (
      <View style={[styles.button, {backgroundColor: SECONDARY_COLOR}]}>
        <TextView color={'#fff'} type={type} size={18}>
          {label}
        </TextView>
      </View>
    );
  }
  if (loading) {
    return (
      <View style={[styles.button]}>
        <ActivityIndicator color={'#fff'} size={scaleFont(25)} />
      </View>
    );
  }
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.button}>
        <TextView color={'#fff'} type={type} size={18}>
          {label}
        </TextView>
      </View>
    </TouchableOpacity>
  );
};

export const ButtonOutline = ({
  label = 'Button Label',
  onPress,
  loading = false,
  disabled = false,
  color = SECONDARY_COLOR,
  style,
  type = 'Bold',
}) => {
  if (disabled) {
    return (
      <View style={[styles.buttonOutline, style, {borderColor: color}]}>
        <TextView color={'#fff'} type={type} size={18}>
          {label}
        </TextView>
      </View>
    );
  }
  if (loading) {
    return (
      <View style={[styles.buttonOutline, style, {borderColor: color}]}>
        <ActivityIndicator color={'#fff'} size={scaleFont(25)} />
      </View>
    );
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.buttonOutline, style, {borderColor: color}]}>
      <View>
        <TextView color={color} type={type} size={18}>
          {label}
        </TextView>
      </View>
    </TouchableOpacity>
  );
};

export const ButtonIcon = ({Icon, style, lable = 'label', onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={[styles.buttonIcon, style]}>
        {Icon && <Icon width={scaleHeight(2.5)} height={scaleHeight(2.5)} />}
        <TextView size={15} style={{marginLeft: scaleWidth(4)}} type="Medium">
          {lable}
        </TextView>
      </View>
    </TouchableOpacity>
  );
};

export const ButtonAuto = ({
  label,
  onPress,
  backgroundColor = SECONDARY_COLOR,
  borderColor = SECONDARY_COLOR,
  type = 'outline',
  style,
}) => {
  if (type === 'outline') {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <View style={[styles.buttonAutoOutline, style, {borderColor}]}>
          <TextView color={borderColor} size={12} type={'Medium'}>
            {label}
          </TextView>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.buttonAuto, style, {backgroundColor}]}>
        <TextView color={'#fff'} size={12} type={'Medium'}>
          {label}
        </TextView>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: scaleHeight(1),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaleHeight(1),
    marginBottom: scaleHeight(2),
  },
  buttonOutline: {
    borderColor: SECONDARY_COLOR,
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingVertical: scaleHeight(1),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaleHeight(1),
    marginBottom: scaleHeight(2),
  },
  buttonIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: SECONDARY_COLOR,
    borderWidth: 1,
    borderRadius: scaleHeight(0.5),
    paddingVertical: scaleHeight(1),
  },
  buttonAutoOutline: {
    paddingHorizontal: scaleWidth(2),
    paddingVertical: scaleHeight(0.8),
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: SECONDARY_COLOR,
    borderRadius: scaleHeight(0.5),
    marginRight: scaleWidth(2),
  },
  buttonAuto: {
    paddingHorizontal: scaleWidth(2),
    paddingVertical: scaleHeight(0.8),
    backgroundColor: SECONDARY_COLOR,
    borderRadius: scaleHeight(0.5),
    marginRight: scaleWidth(2),
  },
});

export default Button;
