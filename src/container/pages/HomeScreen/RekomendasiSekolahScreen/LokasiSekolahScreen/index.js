import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import TextView from '../../../../../components/atoms/TextView';
import Layout from '../../../../../components/Layout';
import {DARK_COLOR, PRIMARY_COLOR} from '../../../../../utils/constant/color';
import {
  scaleHeight,
  scaleWidth,
  showToastMessage,
} from '../../../../../utils/helper';
import * as Progress from 'react-native-progress';
import {shadow} from '../../../../../utils/style';
import CardSchool from '../../../../../components/atoms/CardSchool';
import {Searchbar} from 'react-native-paper';
import PrevNext from '../../../../../components/atoms/PrevNext';
import {useDispatch, useSelector} from 'react-redux';
import {
  getSchoolLocation,
  schoolRecomendationFilterLevel,
} from '../../../../../config/redux/actions/schoolAction';
const LokasiSekolahScreen = ({onPressItem, progress = 0}) => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const school = useSelector(state => state.school);

  useEffect(() => {
    dispatch(getSchoolLocation());
  }, []);

  const onChangeSearch = query => setSearchQuery(query);
  const setFilterAndNext = (next = true, item = null) => {
    if (next) {
      if (!school.filters?.school_location_id) {
        return showToastMessage('Harap pilih salah satu untuk melanjutkan');
      }
      return onPressItem({next: 3});
    }
    const dataFilter = {
      school_location_id: item,
    };
    dispatch(schoolRecomendationFilterLevel(dataFilter));
  };

  const filteredData = school?.locations.filter(item => {
    return Object.keys(item).some(key =>
      item?.name?.toLowerCase().includes(searchQuery?.toLowerCase()),
    );
  });
  console.log('LokasiSekolahScreen', school);
  return (
    <Layout style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        {/* Header Start */}
        <View style={styles.contentContainer}>
          <TextView size={16} color={DARK_COLOR} type="Bold">
            Lokasi Sekolah
          </TextView>
          <View style={styles.contentSubTitle}>
            <TextView size={12} color={DARK_COLOR}>
              <TextView size={12} color={PRIMARY_COLOR}>
                {'Pilih '}
              </TextView>
              untuk memilih lokasi pendidikan si Kecil.
            </TextView>
          </View>

          <Progress.Bar
            progress={progress}
            width={scaleWidth(85)}
            style={{marginVertical: scaleHeight(1)}}
            color={PRIMARY_COLOR}
          />

          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{
              marginHorizontal: scaleWidth(3),
              marginTop: scaleHeight(2),
              ...shadow,
            }}
          />
        </View>
        {/* Header End */}
        <View style={styles.contentList}>
          {filteredData &&
            filteredData.map(item => (
              <CardSchool
                key={item?.id}
                onPress={() => setFilterAndNext(false, item?.id)}
                title={item?.name}
                selected={school.filters?.school_location_id === item?.id}
                image={item?.image}
              />
            ))}
        </View>
      </ScrollView>
      <PrevNext
        onPrev={() => onPressItem({next: 1})}
        onNext={setFilterAndNext}
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
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  contentList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: scaleHeight(2),
    paddingHorizontal: scaleWidth(8),
  },
});

export default LokasiSekolahScreen;
