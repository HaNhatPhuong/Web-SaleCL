import Banner from '@components/Banner/Banner';
import Myheader from '@components/Header/Header';
import styles from './styles.module.scss';

function Homepage() {
  const { container } = styles;
  return (
    <div>
      <div className={container}>
        <Myheader />
        <Banner />
      </div>
    </div>
  );
}

export default Homepage;
