import styles from './styles.module.scss';
import redLoadIcon from '../../assets/icons/svgs/reload.svg';
import heartIcon from '../../assets/icons/svgs/heart.svg';
import cartIcon from '@icons/svgs/cart.svg';
import eyes from '../../assets/icons/svgs/eyes.svg';

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
            <img src={heartIcon} alt='' />
          </div>
          <div className={boxIcon}>
            <img src={cartIcon} alt='' />
          </div>
          <div className={boxIcon}>
            <img src={redLoadIcon} alt='' />
          </div>
          <div className={boxIcon}>
            <img src={eyes} alt='' />
          </div>
        </div>
      </div>
      <div className={tittle}>{namee}</div>
      <div className={priceCL}>${price}</div>
    </div>
  );
}

export default ProductItem;
