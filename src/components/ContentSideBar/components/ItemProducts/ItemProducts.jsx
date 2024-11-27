import { IoCloseOutline } from 'react-icons/io5';
import styles from './styles.module.scss';
function ItemProducts() {
  const { boxContent, container, boxClose, title, size, price } = styles;
  return (
    <div className={container}>
      <img
        src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.1-min.jpg'
        alt=''
      />
      <div className={boxClose}>
        <IoCloseOutline size={20} />
      </div>
      <div className={boxContent}>
        <div className={title}>title of product</div>
        <div className={size}>Size: M</div>
        <div className={price}>9000$</div>
        <div className={price}>DKU: 12398</div>
      </div>
    </div>
  );
}

export default ItemProducts;
