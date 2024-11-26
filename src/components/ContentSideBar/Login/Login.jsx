import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
function Login() {
  const { container, title, boxRememberMe, lostPw } = styles;
  return (
    <div className={container}>
      <div className={title}>Sign In</div>
      <InputCommon label='Email' type='text' isRequired />
      <InputCommon label='Password' type='password' isRequired />
      <div className={boxRememberMe}>
        <input type='checkbox' />
        <span>Remember Me</span>
      </div>
      <Button content={'LOGIN'} />
      <div className={lostPw}>Lost Your Password?</div>
    </div>
  );
}

export default Login;
