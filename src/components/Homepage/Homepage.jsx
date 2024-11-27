import { getProducts } from '@/apis/productService';
import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading';
import Banner from '@components/Banner/Banner';
import Myfooter from '@components/Footer/Footer';
import Myheader from '@components/Header/Header';
import HeadingList from '@components/HeadingList/HeadingList';
import Info from '@components/Info/Info';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import SaleHomepage from '@components/SaleHomepage/SaleHomepage';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

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
        <Myfooter />
      </div>
    </div>
  );
}

export default Homepage;
