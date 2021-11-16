import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import TextView from '../../../../../components/atoms/TextView';
import Layout from '../../../../../components/Layout';
import {
  DARK_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from '../../../../../utils/constant/color';
import Kognitif from '../../../../../assets/Icon/Milestone/kognitif.svg';
import {scaleHeight, scaleWidth} from '../../../../../utils/helper';
import {shadow} from '../../../../../utils/style';
import {CheckBoxItem} from '../../../../../components/atoms/InputGender';
import {useDispatch, useSelector} from 'react-redux';
import {setMiletone} from '../../../../../config/redux/actions/childAction';
import {ButtonAuto} from '../../../../../components/atoms/Button';
import {milestones as datas} from '../data';
const MilstoneDetail = ({route, navigation}) => {
  const {milestones} = useSelector(state => state.child);
  const dispatch = useDispatch();
  // console.log(route);
  const item = route?.params?.item || {};
  const Icon = item?.Icon;

  const onSelectedItem = row_id => {
    const milestone =
      milestones && milestones?.filter(val => val.milestone_id === item.id);
    const data = {milestone_id: item.id};
    const objIndex = milestones.findIndex(val => val.milestone_id === item.id);
    if (milestone.length > 0) {
      const selected = milestone[0]?.data;
      const currentItem = [...selected];
      const checkItem = currentItem.includes(row_id);
      if (checkItem) {
        currentItem.splice(currentItem.indexOf(row_id), 1);
        console.log('currentItem1', currentItem);
        milestones[objIndex].data = currentItem;
        dispatch(setMiletone(milestones));
        return;
      }

      currentItem.push(row_id);
      milestones[objIndex].data = currentItem;
      dispatch(setMiletone(milestones));
    } else {
      dispatch(setMiletone([...milestones, {...data, data: [row_id]}]));
    }
  };
  console.log('milestones', milestones);

  return (
    <Layout>
      <ScrollView style={{flex: 1}}>
        <View style={[styles.detailHeader, shadow]}>
          <View style={[styles.iconDetail, shadow]}>
            <Icon />
          </View>
          <View style={{flex: 1, paddingLeft: scaleWidth(3)}}>
            <TextView size={16} color={DARK_COLOR} type={'Bold'}>
              {item?.title}
            </TextView>
            <TextView size={12}>{item?.desc}</TextView>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: scaleWidth(3),
            marginVertical: scaleHeight(3),
          }}>
          <TextView size={12} color={DARK_COLOR}>
            Kemampuan dalam memperoleh pengetahuan berdasarkan informasi yang ia
            peroleh
          </TextView>
          <View style={{marginTop: scaleHeight(2)}}>
            {item?.data &&
              item?.data.map(row => (
                <CheckBoxItem
                  lable={row?.body}
                  onPress={() => onSelectedItem(row?.id)}
                  style={{alignItems: 'flex-start'}}
                  selected={getSelectedData(milestones, item?.id)?.includes(
                    row?.id,
                  )}
                />
              ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <ButtonAuto
          label="Lihat Progress"
          borderColor={PRIMARY_COLOR}
          style={styles.filterActionButton}
          // onPress={handleReset}
        />
        <ButtonAuto
          label="Selanjutnya"
          backgroundColor={PRIMARY_COLOR}
          type="full"
          style={[styles.filterActionButton, {marginRight: 0}]}
          onPress={() => {
            if (milestones.length === datas.length) {
              return navigation.navigate('MilestoneResult');
            }
            return navigation.navigate('MilstoneDetail', {
              milestone_id: datas[milestones.length]?.id,
              item: datas[milestones.length],
            });
          }}
        />
      </View>
    </Layout>
  );
};

const getSelectedData = (data, item_id) => {
  const milestone = data?.filter(val => val.milestone_id === item_id);

  if (milestone.length > 0) {
    return milestone[0]?.data;
  }
  return [];
};

const styles = StyleSheet.create({
  detailHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingVertical: scaleHeight(2),
    marginHorizontal: scaleWidth(3),
    paddingHorizontal: scaleWidth(2),
    marginTop: scaleHeight(2),
    borderRadius: scaleHeight(1),
  },
  iconDetail: {
    padding: scaleHeight(1.5),
    backgroundColor: '#fff',
    borderRadius: scaleHeight(1),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scaleWidth(5),
    marginBottom: scaleHeight(4),
    borderTopColor: SECONDARY_COLOR,
    borderTopWidth: 0.5,
    paddingTop: scaleHeight(2),
  },
  filterActionButton: {
    width: scaleWidth(43),
    paddingVertical: scaleHeight(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MilstoneDetail;
