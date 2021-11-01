import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import * as Progress from 'react-native-progress';
import {useDispatch, useSelector} from 'react-redux';
import CardSchool from '../../../../../components/atoms/CardSchool';
import PrevNext from '../../../../../components/atoms/PrevNext';
import TextView from '../../../../../components/atoms/TextView';
import Layout from '../../../../../components/Layout';
import {
  getSchoolLevel,
  schoolRecomendationFilterLevel,
} from '../../../../../config/redux/actions/schoolAction';
import {DARK_COLOR, PRIMARY_COLOR} from '../../../../../utils/constant/color';
import {
  scaleHeight,
  scaleWidth,
  showToastMessage,
} from '../../../../../utils/helper';
const JenjangPendidikanScreen = ({navigation, onPressItem, progress = 0.3}) => {
  const dispatch = useDispatch();
  const school = useSelector(state => state.school);
  useEffect(() => {
    dispatch(getSchoolLevel());
  }, []);

  const setFilterAndNext = (next = true, item = null) => {
    if (next) {
      if (!school.filters?.education_level_id) {
        return showToastMessage('Harap pilih salah satu untuk melanjutkan');
      }
      return onPressItem({next: 2});
    }

    const dataFilter = {
      education_level_id: item,
    };
    dispatch(schoolRecomendationFilterLevel(dataFilter));
  };

  console.log('JenjangPendidikanScreen', school?.levels);
  return (
    <Layout style={{flex: 1}}>
      {/* Header Start */}
      <ScrollView style={{flex: 1}}>
        <View style={styles.contentContainer}>
          <TextView size={16} color={DARK_COLOR} type="Bold">
            Jenjang Pendidikan
          </TextView>
          <View style={styles.contentSubTitle}>
            <TextView
              size={12}
              color={DARK_COLOR}
              style={{textAlign: 'center'}}>
              <TextView size={12} color={PRIMARY_COLOR}>
                {'Pilih '}
              </TextView>
              untuk memilih jenjang pendidikan si Kecil.
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
          {school?.levels &&
            school?.levels.map(item => (
              <CardSchool
                key={item?.id}
                onPress={() => setFilterAndNext(false, item?.id)}
                subtitle="Usia 2-6 Tahun"
                title={item?.name}
                selected={school.filters?.education_level_id === item?.id}
                image={item?.image}
              />
            ))}
        </View>
      </ScrollView>
      <PrevNext onNext={setFilterAndNext} />
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

export default JenjangPendidikanScreen;
