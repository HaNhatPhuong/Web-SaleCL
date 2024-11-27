import Button from '@components/Button/Button';
import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import ItemProducts from '@components/ContentSideBar/components/ItemProducts/ItemProducts';
import { PiShoppingCart } from 'react-icons/pi';
import styles from './styles.module.scss';
function Cart() {
  const { container, boxContent, boxBtn, total, price } = styles;
  return (
    <div className={container}>
      <div className={boxContent}>
        <HeaderSideBar icon={<PiShoppingCart size={30} />} title='CART' />
        <ItemProducts />
      </div>
      <div>
        <div className={total}>
          <p>SUBTOTAL:</p>
          <p className={price}>119.999$</p>
        </div>
        <div className={boxBtn}>
          <Button content={'VIEW CART'} />
          <Button content={'CHECK OUT'} isPriamry={false} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
