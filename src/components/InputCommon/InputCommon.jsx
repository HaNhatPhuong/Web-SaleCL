import { useState } from 'react';
import styles from './styles.module.scss';
import { FaEye } from 'react-icons/fa';
import { IoIosEyeOff } from 'react-icons/io';
function InputCommon({ label, type, isRequired = false }) {
  const { labelInput, boxInput, container, boxIcon } = styles;
  const isPassword = type === 'password';
  const [showPassWord, setShowPassword] = useState(false);

  const isShowTextPassword =
    type === 'password' && showPassWord ? 'text' : type;
  const handleShowPassword = () => {
    setShowPassword(!showPassWord);
  };
  return (
    <div className={container}>
      <div className={labelInput}>
        {label}
        {isRequired && <span>*</span>}
      </div>
      <div className={boxInput}>
        <input type={isShowTextPassword} />
        {isPassword && (
          <div className={boxIcon} onClick={handleShowPassword}>
            {showPassWord ? <IoIosEyeOff /> : <FaEye />}
          </div>
        )}
      </div>
    </div>
  );
}

export default InputCommon;
