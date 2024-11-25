import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import styles from './styles.module.scss';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
import ProductItem from '@components/ProductItem/ProductItem';
import MainLayout from '@components/Layout/Layout';

function HeadingList({ data }) {
  const { container, containerItem } = styles;
  return (
    <MainLayout>
      <div className={container}>
        <CountdownBanner />
        <div className={containerItem}>
          {data.map((item) => (
            <ProductItem
              key={item.id}
              src={item.images[0]}
              prevSrc={item.images[1]}
              namee={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default HeadingList;
