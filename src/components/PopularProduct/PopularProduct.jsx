import MainLayout from '@components/Layout/Layout';
import ProductItem from '@components/ProductItem/ProductItem';
import styles from './styles.module.scss';

function PopularProduct({ data }) {
  const { container } = styles;
  return (
    <div>
      <MainLayout>
        <div className={container}>
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
      </MainLayout>
    </div>
  );
}

export default PopularProduct;
