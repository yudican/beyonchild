import React, {useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {Searchbar} from 'react-native-paper';
import RBSheet from 'react-native-raw-bottom-sheet';
import Octicons from 'react-native-vector-icons/Octicons';
import {
  ERROR_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from '../../../utils/constant/color';
import {
  getCurrentDate,
  scaleFont,
  scaleHeight,
  scaleWidth,
} from '../../../utils/helper';
import {shadow} from '../../../utils/style';
import Button from '../Button';
import ListItem from '../FilterItem/ListItem';
import HeaderModal from '../HeaderModal';
import TextView from '../TextView';
const FilterPopUp = ({children}) => {
  const RBSheetRef = useRef();
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => RBSheetRef?.current?.open()}>
        <TextView size={13} type="Medium" color={PRIMARY_COLOR}>
          Selengkapnya
        </TextView>
      </TouchableOpacity>

      <RBSheet
        ref={RBSheetRef}
        height={scaleHeight(80)}
        openDuration={250}
        closeOnDragDown={true}
        dragFromTopOnly
        customStyles={modalConatiner}>
        <View style={{flex: 1}}>
          <HeaderModal
            draggableIcon={false}
            rightContent={false}
            borderButtom={false}
            onLeftPress={() => RBSheetRef?.current?.close()}
          />

          <View style={styles.listItem}>{children}</View>
          <View style={styles.button}>
            <Button label="Terapkan" />
          </View>
        </View>
      </RBSheet>
    </View>
  );
};

const modalConatiner = {
  container: {
    borderTopEndRadius: scaleHeight(2),
    borderTopStartRadius: scaleHeight(2),
  },
  wrapper: {
    backgroundColor: 'rgba(53, 59, 72,0.7)',
  },
  draggableIcon: {
    backgroundColor: '#000',
  },
};

const styles = StyleSheet.create({
  searchBar: {
    marginHorizontal: scaleWidth(5),
    marginTop: scaleHeight(2),
    shadowColor: '#fff',
    borderWidth: 1,
    borderColor: SECONDARY_COLOR,
  },
  listItem: {
    flex: 1,
    paddingHorizontal: scaleWidth(5),
    marginTop: scaleHeight(2),
  },
  button: {
    paddingHorizontal: scaleWidth(5),
    paddingBottom: scaleHeight(2),
  },
});

export default FilterPopUp;
