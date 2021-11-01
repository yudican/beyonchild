import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import Bee from '../../../../../assets/Image/bee.svg';
import {ButtonAuto} from '../../../../../components/atoms/Button';
import SchoolRecomendationList from '../../../../../components/atoms/SchoolRecomendationList';
import TextView from '../../../../../components/atoms/TextView';
import Layout from '../../../../../components/Layout';
import {getMinatBakat} from '../../../../../config/redux/actions/childAction';
import {
  getSchoolFacility,
  getSchoolLevel,
  getSchoolLocation,
  getSchoolRecomendationList,
} from '../../../../../config/redux/actions/schoolAction';
import {DARK_COLOR, PRIMARY_COLOR} from '../../../../../utils/constant/color';
import {scaleHeight, scaleWidth} from '../../../../../utils/helper';
import {shadow} from '../../../../../utils/style';
import LoadingScreen from '../LoadingScreen';
const ListSekolah = ({navigation}) => {
  const dispatch = useDispatch();
  const school = useSelector(state => state.school);
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  useEffect(() => {
    dispatch(getSchoolRecomendationList({}));
    dispatch(getSchoolLevel());
    dispatch(getSchoolLocation());
    dispatch(getSchoolFacility());
    dispatch(getMinatBakat());
  }, []);

  if (school?.isLoading) {
    return <LoadingScreen />;
  }

  console.log('ListSekolah', school?.schools);
  return (
    <Layout>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />

      <View style={styles.contentContainer}>
        <View style={styles.filterContainer}>
          <View style={styles.filterActionButton}>
            <ButtonAuto
              label="Populer"
              backgroundColor={PRIMARY_COLOR}
              type="fill"
            />
            <ButtonAuto label="Terbaru" />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('FilterRekomendasiSekolahScreen')
            }>
            <View style={styles.toggleFilter}>
              <AntDesign
                name="filter"
                size={scaleHeight(3)}
                color={DARK_COLOR}
              />
              <TextView size={14} color={DARK_COLOR}>
                Filter
              </TextView>
            </View>
          </TouchableOpacity>
        </View>
        {school?.schools && school?.schools?.length > 0 ? (
          school?.schools.map(item => (
            <SchoolRecomendationList
              key={item?.id}
              item={item}
              onPress={() =>
                navigation.navigate('SchoolDetailScreen', {detail: item})
              }
            />
          ))
        ) : (
          <SchoolEmpty />
        )}
      </View>
    </Layout>
  );
};

const SchoolEmpty = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scaleHeight(3),
      }}>
      <Bee height={scaleHeight(30)} />
      <TextView
        size={16}
        style={{
          textAlign: 'center',
          marginHorizontal: scaleWidth(5),
        }}
        color={PRIMARY_COLOR}
        type={'Bold'}>
        Oops!! data tidak ditemukan.
      </TextView>
      <TextView
        size={13}
        style={{
          textAlign: 'center',
          marginTop: scaleHeight(2),
          marginHorizontal: scaleWidth(5),
        }}
        color={DARK_COLOR}>
        Data yang kamu cari tidak ditemukan. kami tidak dapat menemukan data
        yang kamu cari
      </TextView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    marginHorizontal: scaleWidth(3),
    marginTop: scaleHeight(2),
    ...shadow,
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: scaleWidth(3),
    marginTop: scaleHeight(2),
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scaleHeight(2),
  },
  filterActionButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  toggleFilter: {flexDirection: 'row', alignItems: 'center'},
});

export default ListSekolah;
