import Button from '@components/Button/Button';
import styles from './styles.module.scss';
import { useEffect, useRef, useState } from 'react';
import useTranslateXImage from '@/hooks/useTranslateXImage ';

function SaleHomepage() {
  const { container, title, des, boxBtn, boxImage, text } = styles;
  const { translateXPosition } = useTranslateXImage();

  return (
    <div className={container}>
      <div
        className={boxImage}
        style={{
          transform: `translateX(${translateXPosition}px)`,
          transition: 'transform 0.4s ease',
        }}
      >
        <img src='/src/assets/images/Salehomepage1.jpeg' alt='' />
      </div>
      <div className={text}>
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
