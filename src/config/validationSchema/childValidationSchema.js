import * as yup from 'yup';
export const childSchema = yup.object().shape({
  children_name: yup.string().required('Wajib Diisi!'),
  children_birth_of_date: yup.string().required('Wajib Diisi!'),
  children_older: yup.string().required('Wajib Diisi!'),
  children_order: yup.string().required('Wajib Diisi!'),
});
