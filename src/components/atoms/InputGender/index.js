import React, {useState} from 'react';
import {View} from 'react-native';
import {scaleFont, scaleHeight, scaleWidth} from '../../../utils/helper';
import TextView from '../TextView';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DARK_COLOR, PRIMARY_COLOR} from '../../../utils/constant/color';
const InputGender = ({lable = 'Select Gender', handleChange}) => {
  const [selected, setSelected] = useState('Perempuan');
  const handleSelect = item => {
    setSelected(item);
    handleChange(item);
  };
  return (
    <View style={{marginBottom: scaleHeight(2)}}>
      <TextView
        color={'#000'}
        size={14}
        style={{marginBottom: scaleHeight(1)}}
        type="Medium">
        {lable}
      </TextView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <CheckBoxItem
          lable="Perempuan"
          onPress={() => handleSelect('Perempuan')}
          selected={selected === 'Perempuan'}
        />
        <CheckBoxItem
          lable="Laki-Laki"
          style={{marginLeft: scaleWidth(5)}}
          onPress={() => handleSelect('Laki-Laki')}
          selected={selected === 'Laki-Laki'}
        />
      </View>
    </View>
  );
};

export const CheckBoxItem = ({lable, onPress, style, selected = false}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingBottom: scaleHeight(1),
        alignItems: 'center',
        ...style,
      }}>
      <MaterialCommunityIcons
        color={PRIMARY_COLOR}
        name={selected ? 'checkbox-intermediate' : 'checkbox-blank-outline'}
        size={scaleFont(18)}
        onPress={onPress}
      />
      <TextView
        color={DARK_COLOR}
        size={13}
        style={{marginLeft: scaleWidth(2)}}>
        {lable}
      </TextView>
    </View>
  );
};

export default InputGender;
