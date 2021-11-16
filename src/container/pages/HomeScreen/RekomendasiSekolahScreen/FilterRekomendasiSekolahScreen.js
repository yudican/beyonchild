import React, {useState} from 'react';
import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {ButtonAuto} from '../../../../components/atoms/Button';
import CardSchool from '../../../../components/atoms/CardSchool';
import ListItem from '../../../../components/atoms/FilterItem/ListItem';
import FilterPopUp from '../../../../components/atoms/FilterPopup';
import HeaderModal from '../../../../components/atoms/HeaderModal';
import TextView from '../../../../components/atoms/TextView';
import Layout from '../../../../components/Layout';
import {
  getSchoolRecomendationList,
  resetSchoolRecomendationFilterLevel,
  schoolRecomendationFilterLevel,
} from '../../../../config/redux/actions/schoolAction';
import {
  DARK_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from '../../../../utils/constant/color';
import {scaleFont, scaleHeight, scaleWidth} from '../../../../utils/helper';
const FilterRekomendasiSekolahScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const school = useSelector(state => state?.school);
  const child = useSelector(state => state?.child);

  const price_monthly = school?.filters?.school_price_monthly;
  const price =
    price_monthly && price_monthly?.length > 0 ? price_monthly : ['0', '0'];
  // harga
  const [priceMin, setPriceMin] = useState(price[0] + '');
  const [priceMax, setPriceMax] = useState(price[1] + '');
  console.log('school', school, price[0]);

  const onSelectedItemFacility = item => {
    const selected = school.filters?.facility_id || [];
    const currentItem = [...selected];
    const checkItem = currentItem.includes(item);
    if (checkItem) {
      currentItem.splice(currentItem.indexOf(item), 1);
      dispatch(
        schoolRecomendationFilterLevel({
          facility_id: currentItem,
        }),
      );
      return;
    }

    currentItem.push(item);
    dispatch(
      schoolRecomendationFilterLevel({
        facility_id: currentItem,
      }),
    );
  };

  const handleReset = () => {
    dispatch(resetSchoolRecomendationFilterLevel([]));
    dispatch(getSchoolRecomendationList({}));
    setPriceMin('');
    setPriceMax('');
  };

  const handleSubmit = () => {
    dispatch(getSchoolRecomendationList(school?.filters));
    navigation.pop();
  };

  return (
    <Layout backgroundColor="#fff">
      <HeaderModal
        onLeftPress={() => navigation.pop()}
        onRightPress={handleReset}
      />
      <ScrollView style={styles.container}>
        {school?.locations && (
          <View style={styles.filterTitle}>
            <TextView
              size={14}
              type="Bold"
              color={DARK_COLOR}
              style={{marginBottom: scaleHeight(1.5)}}>
              Lokasi
            </TextView>
            {school?.locations.map((item, index) => {
              if (index <= 3) {
                return (
                  <ListItem
                    key={item?.id}
                    label={item?.name}
                    onPress={() =>
                      dispatch(
                        schoolRecomendationFilterLevel({
                          school_location_id: item?.id,
                        }),
                      )
                    }
                    selected={school.filters?.school_location_id === item?.id}
                  />
                );
              }
            })}
            {school?.locations?.length > 3 && (
              <FilterPopUp>
                <Searchbar
                  placeholder="Search"
                  // onChangeText={onChangeSearch}
                  // value={searchQuery}
                  style={styles.searchBar}
                />
                {school?.locations.map(item => (
                  <ListItem
                    key={item?.id}
                    label={item?.name}
                    onPress={() =>
                      dispatch(
                        schoolRecomendationFilterLevel({
                          school_location_id: item?.id,
                        }),
                      )
                    }
                    selected={school.filters?.school_location_id === item?.id}
                  />
                ))}
              </FilterPopUp>
            )}
          </View>
        )}
        {school?.levels && (
          <View style={styles.filterTitle}>
            <TextView
              size={14}
              type="Bold"
              color={DARK_COLOR}
              style={{
                marginBottom: scaleHeight(1.5),
              }}>
              Jenjang Pendidikan
            </TextView>
            {school?.levels.map(item => (
              <ListItem
                key={item?.id}
                label={item?.name}
                onPress={() =>
                  dispatch(
                    schoolRecomendationFilterLevel({
                      education_level_id: item?.id,
                    }),
                  )
                }
                selected={school.filters?.education_level_id === item?.id}
              />
            ))}
          </View>
        )}
        <View style={styles.filterTitle}>
          <TextView
            size={14}
            type="Bold"
            color={DARK_COLOR}
            style={{
              marginBottom: scaleHeight(1.5),
            }}>
            Batas Harga
          </TextView>
          <View style={styles.inputPrice}>
            <TextInput
              placeholder="MIN"
              placeholderTextColor={SECONDARY_COLOR}
              style={styles.filterTextInput}
              value={priceMin}
            />
            <TextInput
              placeholder="MAX"
              placeholderTextColor={SECONDARY_COLOR}
              style={styles.filterTextInput}
              value={priceMax}
            />
          </View>
          <View style={styles.filterPrice}>
            <ButtonAuto
              label="0-200"
              type="full"
              style={styles.buttonPrice}
              onPress={() => {
                setPriceMin('0');
                setPriceMax('200000');
              }}
            />
            <ButtonAuto
              label="200-400"
              type="full"
              style={styles.buttonPrice}
              onPress={() => {
                setPriceMin('200000');
                setPriceMax('400000');
              }}
            />
            <ButtonAuto
              label="400-600"
              type="full"
              style={[styles.buttonPrice, {marginRight: 0}]}
              onPress={() => {
                setPriceMin('400000');
                setPriceMax('600000');
              }}
            />
          </View>
        </View>
        {school?.curiculumns && (
          <View style={styles.filterTitle}>
            <TextView
              size={14}
              type="Bold"
              color={DARK_COLOR}
              style={{
                marginBottom: scaleHeight(1.5),
              }}>
              Metode Pembelajaran
            </TextView>
            {school?.curiculumns.map(item => (
              <ListItem key={item?.id} label={item?.name} />
            ))}
          </View>
        )}
        {school?.facilities && (
          <View style={styles.filterTitle}>
            <TextView
              size={14}
              type="Bold"
              color={DARK_COLOR}
              style={{
                marginBottom: scaleHeight(1.5),
              }}>
              Fasilitas
            </TextView>
            {school?.facilities.map(item => (
              <ListItem
                key={item?.id}
                label={item?.name}
                onPress={() => onSelectedItemFacility(item?.id)}
                selected={school.filters?.facility_id?.includes(item?.id)}
              />
            ))}
          </View>
        )}

        {/* minat bakat */}
        {child?.minatBakats && (
          <View style={styles.filterTitle}>
            <TextView
              size={14}
              type="Bold"
              color={DARK_COLOR}
              style={{
                marginBottom: scaleHeight(1.5),
              }}>
              Minat Bakat
            </TextView>
            <View style={[styles.inputPrice, {flexWrap: 'wrap'}]}>
              {child?.minatBakats.map(item => (
                <CardSchool
                  key={item?.id}
                  title={item?.name}
                  selected={
                    school.filters?.school_interest_talent_id === item?.id
                  }
                  image={item?.image}
                  onPress={() =>
                    dispatch(
                      schoolRecomendationFilterLevel({
                        school_interest_talent_id: item?.id,
                      }),
                    )
                  }
                  style={{
                    container: {width: scaleWidth(27)},
                    image: {height: scaleHeight(7), width: scaleHeight(7)},
                    title: scaleFont(10),
                  }}
                  titleLength={10}
                />
              ))}
            </View>
          </View>
        )}
      </ScrollView>
      <View style={styles.footer}>
        <ButtonAuto
          label="Atur Ulang"
          borderColor={PRIMARY_COLOR}
          style={styles.filterActionButton}
          onPress={handleReset}
        />
        <ButtonAuto
          label="Pakai"
          backgroundColor={PRIMARY_COLOR}
          type="full"
          style={[styles.filterActionButton, {marginRight: 0}]}
          onPress={handleSubmit}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scaleWidth(5),
    marginVertical: scaleHeight(1),
  },
  filterTitle: {
    paddingTop: scaleHeight(2),
    paddingBottom: scaleHeight(1),
    borderBottomColor: SECONDARY_COLOR,
    borderBottomWidth: 0.5,
  },
  filterTextInput: {
    borderColor: PRIMARY_COLOR,
    borderWidth: 1,
    width: scaleWidth(42),
    paddingVertical: scaleHeight(0.8),
    paddingHorizontal: scaleWidth(2),
    textAlign: 'center',
    color: DARK_COLOR,
  },
  filterPrice: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scaleHeight(2),
    paddingBottom: scaleHeight(1),
  },
  inputPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonPrice: {
    width: scaleWidth(28),
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterActionButton: {
    width: scaleWidth(43),
    paddingVertical: scaleHeight(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scaleWidth(5),
    marginBottom: scaleHeight(4),
  },
  searchBar: {
    shadowColor: '#fff',
    borderWidth: 1,
    borderColor: SECONDARY_COLOR,
    marginBottom: scaleHeight(2),
  },
});

export default FilterRekomendasiSekolahScreen;
