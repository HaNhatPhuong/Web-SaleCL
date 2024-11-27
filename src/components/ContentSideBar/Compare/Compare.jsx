import Button from '@components/Button/Button';
import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import ItemProducts from '@components/ContentSideBar/components/ItemProducts/ItemProducts';
import { TfiReload } from 'react-icons/tfi';
import styles from './styles.module.scss';
function Compare() {
  const { container, boxContent } = styles;
  return (
    <div className={container}>
      <div className={boxContent}>
        <HeaderSideBar icon={<TfiReload size={30} />} title='COMPARE' />
        <ItemProducts />
      </div>

      <Button content={'VIEW COMPARE'} />
    </div>
  );
}

export default Compare;
