import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email Not Valid')
    .required('Email should be filled in'),
  password: yup.string().required('Password should be filled in'),
});

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email Not Valid')
    .required('Email should be filled in'),
  fullname: yup.string().required('Name should be filled in'),
  username: yup
    .string()
    .required('Username should be filled in')
    .min(6, 'Password Must be 6 character'),
  password: yup
    .string()
    .min(6, 'Password Must be 6 character')
    .required('Password should be filled in'),
});

export const emailSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email Not Valid')
    .required('Email should be filled in'),
});

export const phoneGenderSchema = yup.object().shape({
  mobile_no: yup.string().required('Phone cannot be null'),
  gender: yup.string().required('Gender cannot be null'),
});
