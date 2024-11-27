import Button from '@components/Button/Button';
import InputCommon from '@components/InputCommon/InputCommon';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles.module.scss';
function Login() {
  const { container, title, boxRememberMe, lostPw } = styles;
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid Email').required('Email is Required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is Required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className={container}>
      <div className={title}>Sign In</div>
      <form onSubmit={formik.handleSubmit}>
        <InputCommon
          id='email'
          label='Email'
          type='text'
          isRequired
          formik={formik}
        />

        <InputCommon
          id='password'
          label='Password'
          type='password'
          isRequired
          formik={formik}
        />

        <div className={boxRememberMe}>
          <input type='checkbox' />
          <span>Remember Me</span>
        </div>
        <Button content={'LOGIN'} type='submit' />
      </form>
      <div className={lostPw}>Lost Your Password?</div>
    </div>
  );
}

export default Login;
