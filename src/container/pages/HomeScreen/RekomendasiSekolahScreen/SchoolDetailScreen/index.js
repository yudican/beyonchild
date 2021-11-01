import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import TextView from '../../../../../components/atoms/TextView';
import Layout from '../../../../../components/Layout';
import {
  DARK_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from '../../../../../utils/constant/color';
import {scaleHeight, scaleWidth} from '../../../../../utils/helper';
import FontAwesome from '../../../../../components/atoms/Icon/VectorIcon/FontAwesome';
import {flexBetweenRow, shadow} from '../../../../../utils/style';
import Info from '../../../.././../assets/Icon/info.svg';
import Location from '../../../.././../assets/Icon/location.svg';
import Clock from '../../../.././../assets/Icon/clock.svg';
import Phone from '../../../.././../assets/Icon/telephone.svg';
import Dollar from '../../../.././../assets/Icon/dollar.svg';
import Chat from '../../../.././../assets/Icon/chat.svg';
import DotIcon from '../../../../../components/atoms/Icon/DotIcon';
import Button from '../../../../../components/atoms/Button';
const SchoolDetailScreen = ({navigation, route}) => {
  const {detail} = route?.params || {};
  return (
    <Layout>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <Image
          source={{uri: detail?.school_image}}
          style={{width: '100%', height: scaleHeight(25)}}
          resizeMode={'cover'}
        />
        <View style={styles.bannerContent}>
          <View style={[flexBetweenRow, {alignItems: 'flex-start'}]}>
            <TextView
              size={18}
              type={'Bold'}
              color={DARK_COLOR}
              style={{width: scaleWidth(80)}}>
              {detail?.school_name}, {detail?.location?.name}
            </TextView>
            <FontAwesome
              name="heart-o"
              style={{paddingTop: scaleHeight(1)}}
              size={scaleHeight(2)}
              color={SECONDARY_COLOR}
            />
          </View>
          <TextView color={PRIMARY_COLOR} size={12} type={'Medium'}>
            Cari Lokasi Di peta
          </TextView>
          <View style={{paddingTop: scaleHeight(1)}}>
            <ListInfo
              Icon={Info}
              label={`Terakreditasi ${detail?.school_accreditation}`}
            />
            <ListInfo Icon={Location} label={detail?.school_address} />
            <ListInfo
              Icon={Clock}
              label={`${detail?.school_day_start}-${detail?.school_day_end}, pk ${detail?.school_day_open}-${detail?.school_day_close}`}
            />
            <ListInfo Icon={Phone} label={detail?.school_phone_number} />
            <ListInfo
              Icon={Dollar}
              label={`Harga mulai dari Rp ${detail?.school_fee_monthly},-`}
            />
          </View>
        </View>

        <View
          style={{paddingHorizontal: scaleWidth(5), marginTop: scaleHeight(2)}}>
          <TextView color={DARK_COLOR} type="Bold" size={18}>
            Detail Sekolah
          </TextView>
        </View>
        {detail?.curiculumns && (
          <View
            style={{
              paddingHorizontal: scaleWidth(5),
              marginTop: scaleHeight(2),
            }}>
            <View style={styles.detailList}>
              <View style={styles.dotIcon} />
              <TextView color={DARK_COLOR} type="Bold" size={16}>
                Kurikulum 2013
              </TextView>
            </View>
            <View style={{marginLeft: scaleWidth(5)}}>
              {detail?.curiculumns.map(item => (
                <TextView size={13}>- {item?.name}</TextView>
              ))}
            </View>
          </View>
        )}
        {detail?.extracurriculars && (
          <View
            style={{
              paddingHorizontal: scaleWidth(5),
              marginTop: scaleHeight(2),
            }}>
            <View style={styles.detailList}>
              <View style={styles.dotIcon} />
              <TextView color={DARK_COLOR} type="Bold" size={16}>
                Ekstrakurikuler
              </TextView>
            </View>
            <View style={{marginLeft: scaleWidth(5)}}>
              {detail?.extracurriculars.map(item => (
                <TextView size={13}>- {item?.name}</TextView>
              ))}
            </View>
          </View>
        )}
        {detail?.facilities && (
          <View
            style={{
              paddingHorizontal: scaleWidth(5),
              marginTop: scaleHeight(2),
            }}>
            <View style={styles.detailList}>
              <View style={styles.dotIcon} />
              <TextView color={DARK_COLOR} type="Bold" size={16}>
                Fasilitas yang tersedia
              </TextView>
            </View>
            <View
              style={{marginLeft: scaleWidth(5), marginBottom: scaleHeight(3)}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent:
                    detail?.facilities.length > 2
                      ? 'space-between'
                      : 'space-around',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  marginTop: scaleHeight(3),
                }}>
                {detail?.facilities.map(item => (
                  <IconFasilitas
                    key={item?.id}
                    source={{uri: item?.image}}
                    label={'Wifi/Internet'}
                  />
                ))}
              </View>
            </View>
          </View>
        )}
      </ScrollView>
      <View style={{borderTopColor: SECONDARY_COLOR, borderTopWidth: 0.5}}>
        <View
          style={{
            paddingHorizontal: scaleWidth(5),
            marginBottom: scaleHeight(2),
            paddingTop: scaleHeight(1),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              height: scaleHeight(5),
              borderWidth: 1,
              borderColor: PRIMARY_COLOR,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: scaleHeight(1),
              paddingHorizontal: scaleWidth(4),
            }}>
            <Chat />
          </View>
          <View style={{width: '80%'}}>
            <Button
              label="Daftar Sekarang"
              onPress={() => navigation.navigate('AddChild')}
            />
          </View>
        </View>
      </View>
    </Layout>
  );
};

const IconFasilitas = ({source, label}) => {
  return (
    <View style={styles.iconFasilitas}>
      <Image
        source={source}
        style={{height: scaleHeight(5), width: scaleHeight(5)}}
        resizeMode={'contain'}
      />
      <TextView size={14} color={DARK_COLOR}>
        {label}
      </TextView>
    </View>
  );
};

const ListInfo = ({label, Icon}) => {
  return (
    <View style={styles.listInfo}>
      <View style={{paddingTop: scaleHeight(0.1)}}>
        <Icon width={scaleHeight(2)} height={scaleHeight(2)} />
      </View>
      <TextView
        color={SECONDARY_COLOR}
        size={13}
        type={'Medium'}
        style={{marginLeft: scaleWidth(3)}}>
        {label}
      </TextView>
    </View>
  );
};

const styles = StyleSheet.create({
  listInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingBottom: scaleHeight(1),
  },
  bannerContent: {
    backgroundColor: '#fff',
    marginHorizontal: scaleWidth(5),
    paddingHorizontal: scaleWidth(3),
    marginTop: -scaleHeight(5),
    borderRadius: scaleHeight(1.5),
    paddingVertical: scaleHeight(1),
    ...shadow,
  },
  dotIcon: {
    width: scaleHeight(1.3),
    height: scaleHeight(1.3),
    borderRadius: scaleHeight(1.3) / 1,
    backgroundColor: DARK_COLOR,
    marginRight: scaleWidth(2),
  },
  detailList: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconFasilitas: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scaleHeight(1),
    width: scaleWidth(25),
  },
});

export default SchoolDetailScreen;
