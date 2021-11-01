import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {ERROR_COLOR, PRIMARY_COLOR} from '../../../utils/constant/color';
import {scaleFont, scaleHeight, scaleWidth} from '../../../utils/helper';
import TextView from '../TextView';
import Entypo from 'react-native-vector-icons/Entypo';
const InputText = ({
  style,
  error = null,
  lable = 'Label',
  onChangeText,
  value,
  type = 'normal',
  ...props
}) => {
  const [scure, setScure] = useState(true);
  if (type === 'password') {
    return (
      <View style={[{marginBottom: scaleHeight(1)}, style]}>
        <TextView
          color={'#000'}
          size={14}
          style={{marginBottom: scaleHeight(1)}}
          type="Medium">
          {lable}
        </TextView>
        <View>
          <TextInput
            style={styles.textInput({
              borderColor: error ? ERROR_COLOR : PRIMARY_COLOR,
            })}
            onChangeText={onChangeText}
            value={value}
            secureTextEntry={scure}
            {...props}
          />
          <Entypo
            name={scure ? 'eye-with-line' : 'eye'}
            size={scaleHeight(3)}
            color={PRIMARY_COLOR}
            style={styles.textScure}
            onPress={() => setScure(!scure)}
          />
        </View>
        <TextView color={ERROR_COLOR}>{error}</TextView>
      </View>
    );
  }
  return (
    <View style={[{marginBottom: scaleHeight(1)}, style]}>
      <TextView
        color={'#000'}
        size={14}
        style={{marginBottom: scaleHeight(1)}}
        type="Medium">
        {lable}
      </TextView>
      <TextInput
        style={styles.textInput({
          borderColor: error ? ERROR_COLOR : PRIMARY_COLOR,
        })}
        onChangeText={onChangeText}
        value={value}
        {...props}
      />
      <TextView color={ERROR_COLOR}>{error}</TextView>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: ({borderColor}) => ({
    borderColor,
    borderWidth: 1,
    paddingVertical: scaleHeight(1.3),
    paddingHorizontal: scaleWidth(2),
    borderRadius: scaleHeight(0.5),
  }),
  textScure: {
    position: 'absolute',
    right: scaleWidth(3),
    top: 7,
    bottom: 7,
  },
});

export default InputText;
