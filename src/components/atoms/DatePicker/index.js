import React, {useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import RBSheet from 'react-native-raw-bottom-sheet';
import Octicons from 'react-native-vector-icons/Octicons';
import {ERROR_COLOR, PRIMARY_COLOR} from '../../../utils/constant/color';
import {
  getCurrentDate,
  scaleFont,
  scaleHeight,
  scaleWidth,
} from '../../../utils/helper';
import Button from '../Button';
import TextView from '../TextView';
const DatePicker = ({
  borderColor = PRIMARY_COLOR,
  lable = 'Select Date',
  handleSelectDate,
  error,
  value,
}) => {
  const RBSheetRef = useRef();

  const [curentDate, setCurentDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const currentDate = curentDate?.dateString || getCurrentDate();
  const handleSelect = () => {
    RBSheetRef?.current?.close();
    setSelectedDate(currentDate);
    handleSelectDate && handleSelectDate(selectedDate || currentDate);
  };
  return (
    <View>
      <View style={{marginBottom: scaleHeight(2)}}>
        <TextView
          color={'#000'}
          size={14}
          style={{marginBottom: scaleHeight(1)}}
          type="Medium">
          {lable}
        </TextView>
        <TouchableOpacity
          onPress={() => RBSheetRef?.current?.open()}
          activeOpacity={0.7}>
          <View style={[styles.inputContainer, {borderColor}]}>
            <View style={styles.content}>
              <Octicons name={'calendar'} size={scaleFont(14)} />
              <TextView style={{marginLeft: scaleWidth(3)}} size={12}>
                {value || selectedDate || 'Pilih ' + lable}
              </TextView>
            </View>
            <Octicons name={'chevron-down'} size={scaleFont(14)} />
          </View>
        </TouchableOpacity>
        <TextView color={ERROR_COLOR}>{error}</TextView>
      </View>
      <RBSheet
        ref={RBSheetRef}
        height={scaleHeight(57)}
        openDuration={250}
        closeOnDragDown={true}
        dragFromTopOnly
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(53, 59, 72,0.7)',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <Calendar
          current={currentDate}
          style={{height: scaleHeight(45)}}
          theme={modalTheme}
          onDayPress={e => setCurentDate(e)}
          markedDates={{
            [currentDate]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: PRIMARY_COLOR,
              selectedTextColor: '#fff',
            },
          }}
          // minDate={Date.now}
        />

        <View
          style={{
            paddingHorizontal: scaleWidth(5),
            marginBottom: scaleHeight(2),
          }}>
          <Button label="Simpan" onPress={handleSelect} />
        </View>
      </RBSheet>
    </View>
  );
};

const modalTheme = {
  backgroundColor: '#fff',
  calendarBackground: '#fff',
  textSectionTitleColor: '#b6c1cd',
  textSectionTitleDisabledColor: '#d9e1e8',
  selectedDayBackgroundColor: PRIMARY_COLOR,
  selectedDayTextColor: PRIMARY_COLOR,
  todayTextColor: PRIMARY_COLOR,
  dayTextColor: '#2d4150',
  textDisabledColor: '#d9e1e8',
  dotColor: PRIMARY_COLOR,
  selectedDotColor: PRIMARY_COLOR,
  arrowColor: PRIMARY_COLOR,
  disabledArrowColor: '#d9e1e8',
  monthTextColor: PRIMARY_COLOR,
  indicatorColor: 'blue',
  textDayFontFamily: 'Poppins-Medium',
  textMonthFontFamily: 'Poppins-Bold',
  textDayHeaderFontFamily: 'Poppins-Medium',
  textDayFontWeight: '300',
  textMonthFontWeight: 'bold',
  textDayHeaderFontWeight: '300',
  textDayFontSize: scaleFont(12),
  textMonthFontSize: scaleFont(16),
  textDayHeaderFontSize: scaleFont(10),
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    paddingVertical: scaleHeight(1.3),
    paddingHorizontal: scaleWidth(2),
    borderRadius: scaleHeight(0.5),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default DatePicker;
