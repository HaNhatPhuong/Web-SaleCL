import Myheader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import Banner from '@pages/OurShop/components/Banner';
import { OurShopProvider } from '@/contexts/OurShopProvider';
import Filter from '@pages/OurShop/components/Filter';
import ListProducts from '@pages/OurShop/components/ListProducts';

function OurShop() {
  const { container, functionBox, specialText, btnBack } = styles;
  const navigate = useNavigate();
  const handleBackPreviosPage = () => {
    navigate(-1);
  };
  return (
    <OurShopProvider>
      <Myheader />
      <MainLayout>
        <div className={container}>
          <div className={functionBox}>
            <div>
              Home &gt; <span className={specialText}>OurShop</span>
            </div>
            <div className={btnBack} onClick={() => handleBackPreviosPage()}>
              &lt; Return To HomePage
            </div>
          </div>
        </div>
        <Banner />
        <div>
          <Filter />
          <ListProducts />
        </div>
      </MainLayout>
    </OurShopProvider>
  );
}

export default OurShop;
