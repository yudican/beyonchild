import React from 'react';
import {StyleSheet, View} from 'react-native';
import {scaleWidth} from '../../../utils/helper';
import HomeCategoryItem from '../../atoms/HomeCategoryItem';
import Test from '../../../assets/Image/test.svg';
import Konsultasi from '../../../assets/Image/konsultasi.svg';
import Rekomendasi from '../../../assets/Image/recomendation.svg';
import Forum from '../../../assets/Image/forum.svg';
import Event from '../../../assets/Image/event.svg';
const HomeCategory = ({onNavigate}) => {
  return (
    <View style={styles.container}>
      <HomeCategoryItem label="Test" backgroundColor="#C9EAFF" Icon={Test} />
      <HomeCategoryItem
        label="Sekolah"
        backgroundColor="#FFDDA0"
        onNavigate={() => onNavigate('RekomendasiSekolahScreen')}
      />
      <HomeCategoryItem
        label="Konsultasi"
        backgroundColor="#DED2FF"
        Icon={Konsultasi}
      />
      <HomeCategoryItem label="Forum" backgroundColor="#F2FFA0" Icon={Forum} />
      <HomeCategoryItem label="Event" backgroundColor="#FFD2D8" Icon={Event} />
      <HomeCategoryItem
        label="Kelas Elektif"
        backgroundColor="#C9FFCE"
        Icon={Rekomendasi}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});

export default HomeCategory;
