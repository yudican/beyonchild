import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../../../utils/constant/color';
import {scaleHeight} from '../../../utils/helper';
import FontAwesome from '../Icon/VectorIcon/FontAwesome';
import MaterialCommunityIcons from '../Icon/VectorIcon/MaterialCommunityIcons';
import TextView from '../TextView';
const ListItem = ({onPress, label = 'Label', selected = false}) => {
  const [checked, setChecked] = useState(selected);

  const handleChecked = () => {
    onPress && onPress();
    setChecked(!checked);
  };
  return (
    <View style={{marginBottom: scaleHeight(1)}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextView size={13} type="Medium" color={SECONDARY_COLOR}>
          {label}
        </TextView>
        <TouchableOpacity onPress={handleChecked} activeOpacity={0.8}>
          {selected ? (
            <FontAwesome
              name="check-square"
              size={scaleHeight(2.5)}
              color={PRIMARY_COLOR}
            />
          ) : (
            <MaterialCommunityIcons
              name={'checkbox-blank-outline'}
              size={scaleHeight(2.5)}
              color={PRIMARY_COLOR}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListItem;
