import styles from './styles.module.scss';
import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import Button from '@components/Button/Button';
import Mainlayout from '@components/Layout/Layout';
function CountdownBanner() {
  const { container, containerTimmer, title, boxBtn } = styles;
  const targetDate = '2025-12-31T00:00:00';
  return (
    <Mainlayout>
      <div className={container}>
        <div className={containerTimmer}>
          <CountdownTimer targetDate={targetDate} />
        </div>
        <p className={title}>The classics make a comeback</p>
        <div className={boxBtn}>
          <Button content={'Buy now'} />
        </div>
      </div>
    </Mainlayout>
  );
}

export default CountdownBanner;
