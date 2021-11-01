import {useFormik} from 'formik';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, ScrollView, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import assets from '../../../../assets';
import Button from '../../../../components/atoms/Button';
import DatePicker from '../../../../components/atoms/DatePicker';
import ListItem from '../../../../components/atoms/FilterItem/ListItem';
import InputGender, {
  CheckBoxItem,
} from '../../../../components/atoms/InputGender';
import InputText from '../../../../components/atoms/InputText';
import RoundedHeader from '../../../../components/atoms/RoundedHeader';
import TextView from '../../../../components/atoms/TextView';
import Layout from '../../../../components/Layout';
import {
  addChild,
  getMinatBakat,
} from '../../../../config/redux/actions/childAction';
import {childSchema} from '../../../../config/validationSchema/childValidationSchema';
import {DARK_COLOR, PRIMARY_COLOR} from '../../../../utils/constant/color';
import {scaleHeight, scaleWidth} from '../../../../utils/helper';

const initialValues = {
  children_name: '',
  children_birth_of_date: '',
  children_older: '',
  children_order: '',
  children_gender: 'Perempuan',
  children_school_history: '',
  talents: [],
};
const AddChild = () => {
  const dispatch = useDispatch();
  const {minatBakats, isLoading} = useSelector(state => state.child);
  const [form, setForm] = useState(initialValues);
  const [selectedItem, setSelectedItem] = useState([]);
  const handleSelectItem = id => {
    const itemId = [...selectedItem];

    const checkItem = itemId.includes(id);
    if (checkItem) {
      itemId.splice(itemId.indexOf(id), 1);
      setSelectedItem(itemId);
      onChangeText({name: 'talents', val: itemId});
      return;
    }

    itemId.push(id);
    setSelectedItem(itemId);
    onChangeText({name: 'talents', val: itemId});
  };

  useEffect(() => {
    dispatch(getMinatBakat());
  }, []);

  const formik = useFormik({
    initialValues: form,
    enableReinitialize: true,
    onSubmit: (e, a) => onFormSubmit(e, a),
    validationSchema: childSchema,
  });

  const onChangeText = ({name, val}) => {
    // setFieldValue(name, val);
    setForm(prevState => ({...prevState, [name]: val}));
  };

  const onFormSubmit = (value, {setSubmitting, resetForm}) => {
    dispatch(addChild(value));
    setSubmitting(false);
    resetForm(initialValues);
    setForm(initialValues);
    console.log(value);
  };

  const {values, errors, setFieldValue, handleSubmit, isSubmitting} = formik;
  return (
    <Layout>
      <ScrollView>
        <RoundedHeader style={{marginTop: -scaleHeight(12)}}>
          <Image
            source={assets.Logo}
            style={{height: scaleHeight(10), width: scaleHeight(10)}}
          />
        </RoundedHeader>
        <View
          style={{
            flex: 1,
            marginTop: scaleHeight(3),
            paddingHorizontal: scaleWidth(3),
          }}>
          <TextView
            color={DARK_COLOR}
            type="Medium"
            size={16}
            style={{textAlign: 'center'}}>
            Profil Anak
          </TextView>
          <View style={{marginTop: scaleHeight(3)}}>
            <InputText
              lable="Nama Anak"
              error={errors.children_name}
              value={values.children_name}
              onChangeText={e => onChangeText({name: 'children_name', val: e})}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <InputText
                lable="Usia Anak"
                style={{width: scaleWidth(45)}}
                keyboardType={'numeric'}
                error={errors.children_older}
                value={values.children_older}
                onChangeText={e =>
                  onChangeText({name: 'children_older', val: e})
                }
              />
              <InputText
                lable="Anak Ke-"
                style={{width: scaleWidth(45)}}
                keyboardType={'numeric'}
                error={errors.children_order}
                value={values.children_order}
                onChangeText={e =>
                  onChangeText({name: 'children_order', val: e})
                }
              />
            </View>
            <DatePicker
              lable="Tanggal Lahir"
              error={errors.children_birth_of_date}
              value={values.children_birth_of_date}
              handleSelectDate={e =>
                onChangeText({name: 'children_birth_of_date', val: e})
              }
            />
            <InputGender
              lable={'Jenis kelamin anak'}
              handleChange={e =>
                onChangeText({name: 'children_gender', val: e})
              }
            />
            <InputText
              lable="Riwayat Pendidikan"
              // error={errors.password}
              // value={values.password}
              onChangeText={e =>
                onChangeText({name: 'children_school_history', val: e})
              }
            />
            <TextView size={12} type="Bold" color={DARK_COLOR}>
              Minat Bakat
            </TextView>
            <View style={{paddingTop: scaleHeight(1)}}>
              {minatBakats &&
                minatBakats.map(item => (
                  <CheckBoxItem
                    key={item?.id}
                    lable={item?.name}
                    onPress={() => handleSelectItem(item?.id)}
                    selected={selectedItem.includes(item?.id)}
                  />
                ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          marginBottom: scaleHeight(5),
          paddingHorizontal: scaleWidth(5),
        }}>
        <Button label="Simpan" onPress={handleSubmit} loading={isLoading} />
        <TextView>
          Data ini akan terjaga dan dijamin tidak akan digunakan tanpa izin dari
          orang yang bersangkutan
        </TextView>
      </View>
    </Layout>
  );
};

export default AddChild;
