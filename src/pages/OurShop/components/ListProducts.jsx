import MainLayout from '@components/Layout/Layout';
import ProductItem from '@components/ProductItem/ProductItem';
import { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import styles from '../styles.module.scss';

function ListProducts() {
  const { containerProduct } = styles;
  const { products } = useContext(OurShopContext);
  return (
    <>
      <MainLayout>
        <div className={containerProduct}>
          {products.map((item) => (
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
    </>
  );
}

export default ListProducts;
