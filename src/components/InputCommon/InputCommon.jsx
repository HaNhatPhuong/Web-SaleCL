import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { IoIosEyeOff } from 'react-icons/io';
import styles from './styles.module.scss';
function InputCommon({ label, type, isRequired = false, ...props }) {
  const { labelInput, boxInput, container, boxIcon, errMsg } = styles;
  const { formik, id } = props;
  const isPassword = type === 'password';
  const [showPassWord, setShowPassword] = useState(false);
  const messageErr = formik.errors[id];

  const isShowTextPassword =
    type === 'password' && showPassWord ? 'text' : type;
  const handleShowPassword = () => {
    setShowPassword(!showPassWord);
  };

  const isErr = formik.touched[id] && formik.errors[id];
  // const messageErr = formik.errors[id];
  return (
    <div className={container}>
      <div className={labelInput}>
        {label}
        {isRequired && <span>*</span>}
      </div>
      <div className={boxInput}>
        <input
          type={isShowTextPassword}
          {...props}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values[id]}
        />
        {isPassword && (
          <div className={boxIcon} onClick={handleShowPassword}>
            {showPassWord ? <IoIosEyeOff /> : <FaEye />}
          </div>
        )}
        {isErr && <div className={errMsg}>{messageErr}</div>}
      </div>
    </div>
  );
}

export default InputCommon;
