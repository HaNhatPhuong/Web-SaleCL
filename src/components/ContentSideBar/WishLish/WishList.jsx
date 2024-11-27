import Button from '@components/Button/Button';
import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import ItemProducts from '@components/ContentSideBar/components/ItemProducts/ItemProducts';
import { CiHeart } from 'react-icons/ci';
import styles from './styles.module.scss';

function Wishlist() {
  const { container, boxContent, boxBtn } = styles;
  return (
    <div className={container}>
      <div className={boxContent}>
        <HeaderSideBar icon={<CiHeart size={30} />} title='WISH LIST' />
        <ItemProducts />
      </div>

      <div className={boxBtn}>
        <Button content={'VIEW WISHLIST'} />
        <Button content={'ADD ALL TO CART'} isPriamry={false} />
      </div>
    </div>
  );
}

export default Wishlist;
