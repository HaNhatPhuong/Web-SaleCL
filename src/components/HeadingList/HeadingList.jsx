import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import styles from './styles.module.scss';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
import ProductItem from '@components/ProductItem/ProductItem';
import MainLayout from '@components/Layout/Layout';

function HeadingList() {
  const { container, containerItem } = styles;
  return (
    <MainLayout>
      <div className={container}>
        <CountdownBanner />
        <div className={containerItem}>
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </MainLayout>
  );
}

export default HeadingList;
