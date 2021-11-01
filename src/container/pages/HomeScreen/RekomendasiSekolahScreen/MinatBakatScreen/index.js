import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import * as Progress from 'react-native-progress';
import CardSchool from '../../../../../components/atoms/CardSchool';
import PrevNext from '../../../../../components/atoms/PrevNext';
import TextView from '../../../../../components/atoms/TextView';
import Layout from '../../../../../components/Layout';
import {DARK_COLOR, PRIMARY_COLOR} from '../../../../../utils/constant/color';
import {
  scaleHeight,
  scaleWidth,
  showToastMessage,
} from '../../../../../utils/helper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import {getMinatBakat} from '../../../../../config/redux/actions/childAction';
import {
  getSchoolRecomendationList,
  schoolRecomendationFilterLevel,
} from '../../../../../config/redux/actions/schoolAction';
import {navigate} from '../../../../../utils/navigation';
import {useNavigation} from '@react-navigation/core';
const MinatBakatScreen = ({onPressItem, progress = 0}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {minatBakats, isLoading} = useSelector(state => state.child);
  const school = useSelector(state => state.school);
  const setFilterAndNext = (next = true, item = null) => {
    if (next) {
      if (!school.filters?.school_interest_talent_id) {
        return showToastMessage('Harap pilih salah satu untuk melanjutkan');
      }
      dispatch(getSchoolRecomendationList(school.filters));
      return navigation.navigate('ListSekolah');
    }

    const dataFilter = {
      school_interest_talent_id: item,
    };
    dispatch(schoolRecomendationFilterLevel(dataFilter));
  };

  useEffect(() => {
    dispatch(getMinatBakat());
  }, []);
  return (
    <Layout style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        {/* Header Start */}
        <View style={styles.contentContainer}>
          <TextView size={16} color={DARK_COLOR} type="Bold">
            {'Minat & Bakat'}
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
            style={{marginTop: scaleHeight(1)}}
            color={PRIMARY_COLOR}
          />
        </View>
        {/* Header End */}
        <View style={styles.contentList}>
          {minatBakats &&
            minatBakats.map(item => (
              <CardSchool
                key={item?.id}
                title={item?.name}
                subtitle={item?.description}
                selected={
                  school.filters?.school_interest_talent_id === item?.id
                }
                image={item?.image}
                onPress={() => setFilterAndNext(false, item?.id)}
              />
            ))}
        </View>
      </ScrollView>
      <PrevNext
        onPrev={() => onPressItem({next: 4})}
        onNext={setFilterAndNext}
        NextIcon={FontAwesome5}
        nextIconName={'check'}
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

export default MinatBakatScreen;
