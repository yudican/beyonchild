import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import HomeBackground from '../../../assets/Image/home-background.svg';
import CardArticle from '../../../components/atoms/CardArticle';
import CardChildProfile from '../../../components/atoms/CardChildProfile';
import TextView from '../../../components/atoms/TextView';
import Layout from '../../../components/Layout';
import HomeCategory from '../../../components/molecules/HomeCategory';
import SectionArticle from '../../../components/molecules/SectionArticle';
import SectionPromo from '../../../components/molecules/SectionPromo';
import {getChild} from '../../../config/redux/actions/childAction';
import {DARK_COLOR} from '../../../utils/constant/color';
import {scaleHeight, scaleWidth} from '../../../utils/helper';
const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const child = useSelector(state => state.child);
  useEffect(() => {
    dispatch(getChild());
  }, []);

  console.log('Home', child);
  return (
    <Layout style={{flex: 1, paddingButtom: scaleHeight(5)}} statusBar>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        {/* <HomeChild /> */}
        {/* <DatePicker /> */}
        {/* Hero Background */}
        <HomeBackground
          height={scaleHeight(30)}
          width={scaleWidth(100)}
          style={styles.heroBacground}
        />

        {/* User Login Information */}
        <View style={styles.userProfile}>
          <TextView size={16} color={DARK_COLOR}>
            Hallo,
          </TextView>
          <TextView size={18} type="Bold" color={DARK_COLOR}>
            Moms Florencia
          </TextView>
        </View>

        {/* child data */}
        <CardChildProfile
          data={child?.childs}
          onPressEmpty={screen => navigation.navigate('AddChild')}
        />

        {/* category */}
        <View style={styles.categorySection}>
          <HomeCategory onNavigate={screen => navigation.navigate(screen)} />
        </View>

        {/* Promo Section */}
        <SectionPromo />

        {/* Article Section */}
        <SectionArticle />
        <CardArticle />
        <CardArticle />
        {/* <Section /> */}
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  heroBacground: {
    position: 'absolute',
    zIndex: -1,
    top: 0,
    left: 0,
    right: 0,
    marginTop: -scaleHeight(3),
  },
  userProfile: {
    paddingHorizontal: scaleWidth(5),
    marginTop: scaleHeight(5),
  },
  categorySection: {
    paddingHorizontal: scaleWidth(5),
    marginTop: scaleHeight(2),
  },
});
export default Home;
