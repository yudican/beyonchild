import React from 'react';
import {StyleSheet, View} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../../../../components/atoms/Button';
import TextView from '../../../../../components/atoms/TextView';
import Layout from '../../../../../components/Layout';
import {setMiletone} from '../../../../../config/redux/actions/childAction';
import {
  DARK_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from '../../../../../utils/constant/color';
import {scaleHeight, scaleWidth} from '../../../../../utils/helper';
import {milestones as datas} from '../data';
const MilestoneResult = ({navigation}) => {
  const dispatch = useDispatch();
  const {milestones} = useSelector(state => state.child);
  return (
    <Layout>
      <View style={styles.container}>
        {datas &&
          datas?.map(item => (
            <View style={styles.progress}>
              <ProgressCircle
                percent={getPercentage(milestones, item)}
                radius={70}
                borderWidth={scaleHeight(2)}
                color="#E9858A"
                shadowColor="#FFEEEF"
                bgColor="#fff">
                <TextView style={{fontSize: 18}} color={'#E9858A'}>
                  {`${getPercentage(milestones, item)}%`}
                </TextView>
              </ProgressCircle>
              <TextView
                size={12}
                color={DARK_COLOR}
                type={'Bold'}
                style={{paddingTop: scaleHeight(2)}}>
                {item?.title}
              </TextView>
            </View>
          ))}
      </View>
      <View style={styles.footer}>
        <Button
          label="Kembali ke Beranda"
          backgroundColor={PRIMARY_COLOR}
          onPress={() => {
            dispatch(setMiletone([]));
            navigation.navigate('Home');
          }}
        />
      </View>
    </Layout>
  );
};

const getPercentage = (data, item) => {
  const selected = data && data.filter(val => val.milestone_id == item.id);
  const length =
    selected && selected.length > 0 ? selected[0]?.data?.length : 0;
  if (length > 0) {
    return Math.round((100 / item?.data?.length) * length);
  }
  return 0;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scaleWidth(5),
    flexWrap: 'wrap',
    marginTop: scaleHeight(2),
  },
  progress: {
    width: scaleWidth(40),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleHeight(3),
  },
  footer: {
    paddingHorizontal: scaleWidth(5),
    marginBottom: scaleHeight(4),
    borderTopColor: SECONDARY_COLOR,
    borderTopWidth: 0.5,
    paddingTop: scaleHeight(2),
  },
});

export default MilestoneResult;
