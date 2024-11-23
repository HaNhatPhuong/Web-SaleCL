import Banner from '@components/Banner/Banner';
import Myheader from '@components/Header/Header';
import styles from './styles.module.scss';
import Info from '@components/Info/Info';
import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading';
import HeadingList from '@components/HeadingList/HeadingList';

function Homepage() {
  const { container } = styles;
  return (
    <div>
      <div className={container}>
        <Myheader />
        <Banner />
        <Info />
        <AdvanceHeading />
        <HeadingList />
        <div style={{ height: '200px' }}></div>
      </div>
    </div>
  );
}

export default Homepage;
