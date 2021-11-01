import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {useFormik} from 'formik';
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
import {PRIMARY_COLOR} from '../../../../utils/constant/color';
import {scaleHeight, scaleWidth} from '../../../../utils/helper';
import {loginSchema} from '../../../../config/validationSchema/authValidationSchema';
import {login} from '../../../../config/redux/actions/authAction';

// initialvalues
const initialValues = {
  email: '',
  password: '',
};
const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialValues);

  const formik = useFormik({
    initialValues: form,
    enableReinitialize: true,
    onSubmit: (e, a) => onFormSubmit(e, a),
    validationSchema: loginSchema,
  });

  const onChangeText = ({name, val}) => {
    setFieldValue(name, val);
    setForm(prevState => ({...prevState, [name]: val}));
  };

  const onFormSubmit = (value, {setSubmitting, resetForm}) => {
    dispatch(login({...value, username: value.email}));
    setSubmitting(false);
    resetForm(initialValues);
    setForm(initialValues);
    console.log(value);
  };

  const {values, errors, setFieldValue, handleSubmit, isSubmitting} = formik;
  return (
    <Layout>
      <RoundedHeader style={{marginTop: -scaleHeight(12)}}>
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
          Masuk
        </TextView>
        <View>
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
            label="MASUK"
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
          lable="Belum Memiliki Akun? "
          actionLable="DAFTAR"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </Layout>
  );
};

export default Login;
