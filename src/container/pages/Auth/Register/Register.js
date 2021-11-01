import {useFormik} from 'formik';
import React, {useState} from 'react';
import {Image, ScrollView, View} from 'react-native';
import {useDispatch} from 'react-redux';
import assets from '../../../../assets';
import GoogleIcon from '../../../../assets/Icon/GoogleIcon.svg';
import Button, {ButtonIcon} from '../../../../components/atoms/Button';
import InputText from '../../../../components/atoms/InputText';
import RoundedHeader from '../../../../components/atoms/RoundedHeader';
import TextAction from '../../../../components/atoms/TextAction';
import TextDivider from '../../../../components/atoms/TextDivider';
import TextView from '../../../../components/atoms/TextView';
import Layout from '../../../../components/Layout';
import {register} from '../../../../config/redux/actions/authAction';
import {registerSchema} from '../../../../config/validationSchema/authValidationSchema';
import {PRIMARY_COLOR} from '../../../../utils/constant/color';
import {scaleHeight, scaleWidth} from '../../../../utils/helper';

const initialValues = {
  email: '',
  fullname: '',
  username: '',
  password: '',
};
const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialValues);

  const formik = useFormik({
    initialValues: form,
    enableReinitialize: true,
    onSubmit: (e, a) => onFormSubmit(e, a),
    validationSchema: registerSchema,
  });

  const onChangeText = ({name, val}) => {
    setFieldValue(name, val);
    setForm(prevState => ({...prevState, [name]: val}));
  };

  const onFormSubmit = (value, {setSubmitting, resetForm}) => {
    dispatch(register(value));
    setSubmitting(false);
    resetForm(initialValues);
    setForm(initialValues);
    console.log(value);
  };

  const {values, errors, setFieldValue, handleSubmit, isSubmitting} = formik;
  return (
    <Layout>
      <ScrollView>
        <RoundedHeader style={{marginTop: -scaleHeight(10)}}>
          <Image
            source={assets.Logo}
            style={{height: scaleHeight(10), width: scaleHeight(10)}}
          />
        </RoundedHeader>
        <View
          style={{
            flex: 1,
            paddingHorizontal: scaleWidth(3),
            marginTop: scaleHeight(2),
          }}>
          <TextView color={PRIMARY_COLOR} size={30} type="Bold">
            Daftar
          </TextView>
          <View>
            <InputText
              lable="Nama"
              error={errors.fullname}
              value={values.fullname}
              onChangeText={e => onChangeText({name: 'fullname', val: e})}
            />
            <InputText
              lable="Username"
              error={errors.username}
              value={values.username}
              onChangeText={e =>
                onChangeText({name: 'username', val: e.toLowerCase()})
              }
            />
            <InputText
              lable="Email"
              error={errors.email}
              value={values.email}
              onChangeText={e =>
                onChangeText({name: 'email', val: e.toLowerCase()})
              }
            />
            <InputText
              lable="Kata Sandi"
              type="password"
              error={errors.password}
              value={values.password}
              onChangeText={e => onChangeText({name: 'password', val: e})}
            />
            <Button
              label="DAFTAR"
              onPress={handleSubmit}
              disabled={isSubmitting}
            />
          </View>
          <TextDivider lable="ATAU" />
          <ButtonIcon
            Icon={GoogleIcon}
            lable="Masuk Dengan Google"
            style={{marginTop: scaleHeight(2)}}
          />
        </View>
        <View style={{marginBottom: scaleHeight(2)}}>
          <TextAction
            lable="Sudah Memiliki Akun? "
            actionLable="MASUK"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </ScrollView>
    </Layout>
  );
};

export default Register;
