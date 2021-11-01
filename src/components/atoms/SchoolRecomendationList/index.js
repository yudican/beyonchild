import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  DARK_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from '../../../utils/constant/color';
import {scaleFont, scaleHeight, scaleWidth} from '../../../utils/helper';
import {flexBetweenRow, shadow} from '../../../utils/style';
import Tags from '../Tags';
import TextView from '../TextView';
const SchoolRecomendationList = ({onPress, item}) => {
  const [selected, setSelected] = useState(false);
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.container, shadow]}>
        <View>
          <Image
            source={{uri: item?.school_image}}
            style={styles.image}
            resizeMode={'cover'}
          />
        </View>
        <View style={{flex: 1, paddingLeft: scaleWidth(3)}}>
          <View style={flexBetweenRow}>
            <TextView size={14} style={{textTransform: 'uppercase'}}>
              {item?.location?.name}
            </TextView>
            <TouchableOpacity
              onPress={() => setSelected(!selected)}
              activeOpacity={0.8}>
              <AntDesign
                name={selected ? 'heart' : 'hearto'}
                size={scaleFont(16)}
                color={SECONDARY_COLOR}
              />
            </TouchableOpacity>
          </View>
          <TextView
            size={14}
            style={{textTransform: 'uppercase'}}
            color={DARK_COLOR}
            type={'Bold'}>
            {item?.school_name}
          </TextView>
          <Rating
            ratingColor={PRIMARY_COLOR}
            ratingBackgroundColor="#fff"
            ratingCount={5}
            startingValue={3}
            readonly
            imageSize={scaleFont(15)}
            style={{alignItems: 'flex-start'}}
          />
          <View style={styles.tagList}>
            {item?.facilities && item?.facilities?.length > 0
              ? item?.facilities.map((row, index) => {
                  if (index <= 2) {
                    return <Tags label={row?.name} />;
                  }
                })
              : null}
            {item?.facilities && item?.facilities?.length > 2 && (
              <Tags label={`+${item?.facilities?.length - 2}`} />
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    paddingHorizontal: scaleWidth(2),
    paddingVertical: scaleHeight(1),
    borderRadius: scaleHeight(1),
    marginBottom: scaleHeight(2),
  },
  image: {
    width: scaleWidth(30),
    height: scaleHeight(12),
    borderRadius: scaleHeight(1),
  },
  tagList: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: scaleHeight(1),
  },
});

export default SchoolRecomendationList;
