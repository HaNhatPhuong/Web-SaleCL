import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import Mainlayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';

function HeadingList() {
  const { container, containerItems } = styles;
  const targetDate = '2025-12-31T00:00:00';
  return (
    <Mainlayout>
      {/* <CountdownTimer targetDate={targetDate} /> */}
      <div className={container}>
        <div>
          <CountdownBanner />
        </div>
        <div className={containerItems}>
          <div>1</div>
          <div>2</div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default HeadingList;
