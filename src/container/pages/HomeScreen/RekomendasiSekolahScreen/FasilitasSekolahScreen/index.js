import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import TextView from '../../../../../components/atoms/TextView';
import Layout from '../../../../../components/Layout';
import {DARK_COLOR, PRIMARY_COLOR} from '../../../../../utils/constant/color';
import {
  scaleFont,
  scaleHeight,
  scaleWidth,
  showToastMessage,
} from '../../../../../utils/helper';
import * as Progress from 'react-native-progress';
import {shadow} from '../../../../../utils/style';
import CardSchool from '../../../../../components/atoms/CardSchool';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Searchbar} from 'react-native-paper';
import {CheckBoxItem} from '../../../../../components/atoms/InputGender';
import PrevNext from '../../../../../components/atoms/PrevNext';
import {useDispatch, useSelector} from 'react-redux';
import {
  getSchoolFacility,
  schoolRecomendationFilterLevel,
} from '../../../../../config/redux/actions/schoolAction';
const FasilitasSekolahScreen = ({onPressItem, progress = 0}) => {
  const dispatch = useDispatch();
  const school = useSelector(state => state.school);
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const onSelectedItem = item => {
    const selected = school.filters?.facility_id || [];
    const currentItem = [...selected];
    const checkItem = currentItem.includes(item);
    if (checkItem) {
      currentItem.splice(currentItem.indexOf(item), 1);
      setFilterAndNext(false, currentItem);
      return;
    }

    currentItem.push(item);
    setFilterAndNext(false, currentItem);
  };

  const setFilterAndNext = (next = true, item = null) => {
    if (next) {
      if (
        !school.filters?.facility_id ||
        school.filters?.facility_id?.length < 1
      ) {
        return showToastMessage('Harap pilih salah satu untuk melanjutkan');
      }
      return onPressItem({next: 5});
    }
    const dataFilter = {
      facility_id: item,
    };
    dispatch(schoolRecomendationFilterLevel(dataFilter));
  };

  useEffect(() => {
    dispatch(getSchoolFacility());
  }, []);
  return (
    <Layout style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        {/* Header Start */}
        <View style={styles.contentContainer}>
          <TextView size={16} color={DARK_COLOR} type="Bold">
            Fasilitas Sekolah
          </TextView>
          <View style={styles.contentSubTitle}>
            <TextView
              size={12}
              color={DARK_COLOR}
              style={{textAlign: 'center', paddingHorizontal: scaleWidth(3)}}>
              <TextView
                size={12}
                color={PRIMARY_COLOR}
                style={{textAlign: 'center'}}>
                {'Pilih '}
              </TextView>{' '}
              kebutuhan yang diperlukan di sekolah si Kecil.
            </TextView>
          </View>

          <Progress.Bar
            progress={progress}
            width={scaleWidth(85)}
            style={{marginTop: scaleHeight(1)}}
            color={PRIMARY_COLOR}
          />
        </View>
        {/* Header End */}
        <View style={styles.contentList}>
          <View>
            {school?.facilities &&
              school?.facilities.map(item => (
                <CheckBoxItem
                  lable={item?.name}
                  onPress={() => onSelectedItem(item?.id)}
                  style={{marginBottom: scaleHeight(2)}}
                  selected={school.filters?.facility_id?.includes(item?.id)}
                />
              ))}

            {/* <CheckBoxItem
              lable="Lainnya"
              onPress={() => onSelectedItem(0)}
              style={{marginBottom: scaleHeight(2)}}
              selected={school.filters?.facility_id?.includes(0)}
            />
            {school.filters?.facility_id?.includes(0) && (
              <Searchbar
                placeholder="Fasilitas Sekolah"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={shadow}
              />
            )} */}
          </View>
        </View>
      </ScrollView>
      <PrevNext
        onPrev={() => onPressItem({next: 3})}
        onNext={() => {
          if (school.filters?.facility_id?.length < 1) {
            return showToastMessage(
              'Harap pilih salah satu atau lebih untuk melanjutkan',
            );
          }
          return onPressItem({next: 5});
        }}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: scaleHeight(2),
    paddingHorizontal: scaleWidth(5),
    alignItems: 'center',
  },
  contentSubTitle: {
    alignItems: 'center',
  },
  contentList: {
    marginTop: scaleHeight(2),
    paddingHorizontal: scaleWidth(8),
  },
});

export default FasilitasSekolahScreen;
