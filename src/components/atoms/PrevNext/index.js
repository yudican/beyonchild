import React from 'react';
import {StyleSheet, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {scaleHeight} from '../../../utils/helper';
import CircleIcon from '../Icon/CircleIcon';
const PrevNext = ({
  onPrev,
  onNext,
  NextIcon = Entypo,
  PrevIcon = Entypo,
  nextIconName = 'chevron-right',
  prevIconName = 'chevron-left',
}) => {
  return (
    <View style={styles.container}>
      <CircleIcon Icon={PrevIcon} name={prevIconName} onPress={onPrev} />
      <CircleIcon Icon={NextIcon} name={nextIconName} onPress={onNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: scaleHeight(3),
  },
});

export default PrevNext;
