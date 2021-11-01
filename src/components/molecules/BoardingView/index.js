import React, {useRef, useState} from 'react';
import {Animated, Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {scaleHeight, scaleWidth} from '../../../utils/helper';
import School from '../../../assets/Image/school.svg';
import Consulting from '../../../assets/Image/consulting.svg';
import Article from '../../../assets/Image/article.svg';
import BoardingItem from '../../atoms/BoardingItem';
import {PRIMARY_COLOR} from '../../../utils/constant/color';
import Button from '../../atoms/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/core';

const {width} = Dimensions.get('window');
const data = [
  {
    id: 1,
    Icon: School,
    title: 'Rekomendasi Sekolah',
    subtitle:
      'Tersedia ratusan pilihan rekomendasi sekolah sesuai kebutuhan pendidikan si Kecil',
  },
  {
    id: 2,
    Icon: Consulting,
    title: 'Konsultasi dengan ahlinya',
    subtitle:
      'Memiliki layanan konsultasi secara online dengan para ahli untuk menjawab semua kebingungan Moms',
  },
  {
    id: 3,
    Icon: Article,
    title: 'Dapatkan Informasi Terbaru!',
    subtitle:
      'Beragam  informasi berupa artikel dan event-event menarik yang dapat menambah wawasan Moms dimanapun',
  },
];

const BoardingView = () => {
  const scrollView = useRef(new Animated.Value(0));
  const scrollValue = scrollView?.current;
  const navigation = useNavigation();

  const [index, setIndex] = useState(0);

  const handleScroll = e => {
    let x = e.nativeEvent.contentOffset.x;
    if (x === 0) {
      setIndex(0);
    } else if (x >= width - 20) {
      setIndex(1);
    } else if (x >= width - 20 * 2) {
      setIndex(2);
    }
  };

  console.log(index);

  const handlePress = async () => {
    await AsyncStorage.setItem('boarding', '1');
    navigation.replace('Login');
  };
  console.log(index);
  return (
    <View style={styles.container}>
      <ScrollView
        // ref={scrollView}
        horizontal
        pagingEnabled
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollValue}}}],
          {useNativeDriver: false, listener: handleScroll},
        )}>
        {data.map(item => (
          <View key={item?.id} style={styles.card}>
            <BoardingItem
              Icon={item?.Icon}
              title={item?.title}
              subtitle={item?.subtitle}
            />
          </View>
        ))}
      </ScrollView>
      <View style={styles.buttonNext}>
        <Button
          label={'SELANJUTNYA'}
          // disabled={index < 2}
          onPress={handlePress}
        />
      </View>
      <View style={styles.indicatorConatiner} pointerEvents="none">
        {data.map((x, i) => (
          <Indicator x={x.id} i={i} key={x.id} scrollValue={scrollValue} />
        ))}
      </View>
    </View>
  );
};

function Indicator({i, scrollValue}) {
  const translateX = scrollValue.interpolate({
    inputRange: [-width + i * width, i * width, width + i * width],
    outputRange: [-20, 0, 20],
  });
  return (
    <View style={styles.indicator}>
      <Animated.View
        style={[styles.activeIndicator, {transform: [{translateX}]}]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: scaleHeight(1),
    marginTop: scaleHeight(5),
  },
  card: {
    flex: 1,
    width: width - 10,
    height: '100%',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  indicatorConatiner: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#00000044',
    marginHorizontal: scaleWidth(3),
    overflow: 'hidden',
  },
  activeIndicator: {
    height: '100%',
    width: '100%',
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 10,
  },
  buttonNext: {
    alignSelf: 'center',
    position: 'absolute',
    marginHorizontal: scaleWidth(3),
    marginTop: scaleHeight(3),
    width: scaleWidth(80),
    bottom: scaleHeight(25),
  },
});
export default BoardingView;
