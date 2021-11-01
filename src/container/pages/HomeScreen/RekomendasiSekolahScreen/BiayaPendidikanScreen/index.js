import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import * as Progress from 'react-native-progress';
import {useDispatch, useSelector} from 'react-redux';
import {CheckBoxItem} from '../../../../../components/atoms/InputGender';
import PrevNext from '../../../../../components/atoms/PrevNext';
import TextView from '../../../../../components/atoms/TextView';
import Layout from '../../../../../components/Layout';
import {schoolRecomendationFilterLevel} from '../../../../../config/redux/actions/schoolAction';
import {DARK_COLOR, PRIMARY_COLOR} from '../../../../../utils/constant/color';
import {
  scaleHeight,
  scaleWidth,
  showToastMessage,
} from '../../../../../utils/helper';
import {shadow} from '../../../../../utils/style';

const schoolBudget = [
  {
    id: 1,
    value: [200000, 400000],
    label: 'Rp. 200.000 - Rp. 400.000',
  },
  {
    id: 2,
    value: [400000, 600000],
    label: 'Rp. 400.000 - Rp. 600.000',
  },
  {
    id: 3,
    value: [600000, 800000],
    label: 'Rp. 600.000 - Rp. 800.000',
  },
  {
    id: 4,
    value: [1000000, 100000000],
    label: '> Rp. 1.000.000',
  },
];

const BiayaPendidikanScreen = ({onPressItem, progress = 0}) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => {
    const dataFilter = {
      school_price_monthly: [0, query],
      price_id: 0,
    };
    dispatch(schoolRecomendationFilterLevel(dataFilter));
  };
  const school = useSelector(state => state.school);

  const setFilterAndNext = (next = true, item = null) => {
    if (next) {
      if (!school.filters?.school_price_monthly) {
        return showToastMessage('Harap pilih salah satu untuk melanjutkan');
      } else if (
        school.filters?.price_id === 0 &&
        school.filters?.school_price_monthly[1] < 1
      ) {
        return showToastMessage('Masukkan jumlah untuk melanjutkan');
      }
      return onPressItem({next: 4});
    }
    setSelected(item?.id);
    const dataFilter = {
      school_price_monthly: item?.id > 0 ? item?.value : [0, searchQuery],
      price_id: item?.id,
    };
    dispatch(schoolRecomendationFilterLevel(dataFilter));
  };
  return (
    <Layout style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        {/* Header Start */}
        <View style={styles.contentContainer}>
          <TextView size={16} color={DARK_COLOR} type="Bold">
            Biaya Sekolah
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
              seberapa besar budget yang ingin dikeluarkan untuk pendidikan si
              Kecil.
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
            {schoolBudget.map(item => (
              <CheckBoxItem
                key={item?.id}
                lable={item?.label}
                onPress={() => setFilterAndNext(false, item)}
                style={{marginBottom: scaleHeight(2)}}
                selected={school.filters?.price_id === item?.id}
              />
            ))}
            <CheckBoxItem
              lable="Lainnya"
              onPress={() => setFilterAndNext(false, {id: 0})}
              style={{marginBottom: scaleHeight(2)}}
              selected={school.filters?.price_id === 0}
            />

            {school.filters?.price_id === 0 && (
              <Searchbar
                placeholder="Masukkan Jumlah"
                onChangeText={onChangeSearch}
                value={school.filters?.school_price_monthly[1]}
                style={shadow}
              />
            )}
          </View>
        </View>
      </ScrollView>
      <PrevNext
        onPrev={() => onPressItem({next: 2})}
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
    alignItems: 'center',
  },
  contentList: {
    marginTop: scaleHeight(2),
    paddingHorizontal: scaleWidth(8),
  },
});

export default BiayaPendidikanScreen;
