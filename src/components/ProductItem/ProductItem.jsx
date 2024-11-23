import styles from './styles.module.scss';
import redLoadIcon from '../../assets/icons/svgs/reload.svg';
import heartIcon from '../../assets/icons/svgs/heart.svg';
import cartIcon from '../../assets/icons/svgs/cart.svg';

function ProductItem({ src, prevSrc, name, price }) {
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
        <img src='/src/assets/images/Image-15.1-min.jpg' alt='' />
        <img
          src='/src/assets/images/Image-15.2-min.jpg'
          alt=''
          className={showImgWhenHover}
        />
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
            <img src={redLoadIcon} alt='' />
          </div>
        </div>
      </div>
      <div className={tittle}>10K Yellow Gold</div>
      <div className={priceCL}>$99.99</div>
    </div>
  );
}

export default ProductItem;
