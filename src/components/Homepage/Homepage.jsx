import Banner from '@components/Banner/Banner';
import Myheader from '@components/Header/Header';
import styles from './styles.module.scss';
import Info from '@components/Info/Info';
import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading';
import HeadingList from '@components/HeadingList/HeadingList';
import { useEffect, useState } from 'react';
import { getProducts } from '@/apis/productService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import SaleHomepage from '@components/SaleHomepage/SaleHomepage';

function Homepage() {
  const [listProducts, setListproducts] = useState([]);
  useEffect(() => {
    const query = {
      sortType: 0,
      page: 1,
      limit: 10,
    };

    getProducts(query).then((res) => {
      setListproducts(res.contents);
    });
  }, []);
  const { container } = styles;
  return (
    <div>
      <div className={container}>
        <Myheader />
        <Banner />
        <Info />
        <AdvanceHeading />
        <HeadingList data={listProducts.slice(0, 2)} />
        <PopularProduct data={listProducts.slice(2, 10)} />
        <SaleHomepage />
        <div style={{ height: '200px' }}></div>
      </div>
    </div>
  );
}

export default Homepage;
