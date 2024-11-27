import { CiHeart } from 'react-icons/ci';
import { PiEyeLight, PiShoppingCartLight } from 'react-icons/pi';
import { TfiReload } from 'react-icons/tfi';
import styles from './styles.module.scss';

function ProductItem({ src, prevSrc, namee, price }) {
  const {
    boxImg,
    showImgWhenHover,
    showfncWhenHover,
    boxIcon,
    tittle,
    priceCL,
  } = styles;
  return (
    <div>
      <div className={boxImg}>
        <img src={src} />
        <img src={prevSrc} alt='' className={showImgWhenHover} />
        <div className={showfncWhenHover}>
          <div className={boxIcon}>
            <CiHeart size={25} />
          </div>
          <div className={boxIcon}>
            <PiShoppingCartLight size={25} />
          </div>
          <div className={boxIcon}>
            <TfiReload size={20} />
          </div>
          <div className={boxIcon}>
            <PiEyeLight size={25} />
          </div>
        </div>
      </div>
      <div className={tittle}>{namee}</div>
      <div className={priceCL}>${price}</div>
    </div>
  );
}

export default ProductItem;
