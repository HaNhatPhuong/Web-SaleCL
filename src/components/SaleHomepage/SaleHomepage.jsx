import Button from '@components/Button/Button';
import styles from './styles.module.scss';
import { useEffect, useRef, useState } from 'react';
import useTranslateX from '@components/SaleHomepage/TranslateXImage';

function SaleHomepage() {
  const { container, title, des, boxBtn, boxImage } = styles;
  const { translateXPosition } = useTranslateX();
  // const useScrollHandling = () => {

  //   return {
  //     scrollDriction,
  //     scrollPosition,
  //   };
  // };
  // const useTranslateXImage = () => {
  //   const { scrollPosition, scrollDriction } = useScrollHandling();
  //   const [translateXPosition, setTranslateXPosition] = useState(80);

  // const handleTranslateX = () => {
  //   if (scrollDriction === 'down' && scrollPosition >= 1500) {
  //     setTranslateXPosition(
  //       translateXPosition <= 0 ? 0 : translateXPosition - 1
  //     );
  //   } else if (scrollDriction === 'up') {
  //     setTranslateXPosition(
  //       translateXPosition >= 80 ? 80 : translateXPosition + 1
  //     );
  //   }
  // };

  //   return {
  //     translateXPosition,
  //   };
  // };
  return (
    <div className={container}>
      <div
        className={boxImage}
        style={{
          transform: `translateX(${translateXPosition}px)`,
          transition: 'transform 0.6s ease',
        }}
      >
        <img src='/src/assets/images/Salehomepage1.jpeg' alt='' />
      </div>
      <div>
        <h2 className={title}>Sale of the year</h2>
        <p className={des}>
          Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
        </p>
        <div className={boxBtn}>
          <Button content={'Read More'} isPriamry={false} />
        </div>
      </div>
      <div
        className={boxImage}
        style={{
          transform: `translateX(-${translateXPosition}px)`,
          transition: 'transform 0.6s ease',
        }}
      >
        <img src='/src/assets/images/Salehomepage2.jpeg' alt='' />
      </div>
    </div>
  );
}

export default SaleHomepage;
