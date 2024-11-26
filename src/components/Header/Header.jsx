import BoxIcon from './Boxicon/Boxicon';
import { dataBoxicon, dataMenu } from './BoxIcon/contants';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import Logo from '../../assets/images/Logo-retina.png';
import redLoadIcon from '../../assets/icons/svgs/reload.svg';
import heartIcon from '../../assets/icons/svgs/heart.svg';
import cartIcon from '../../assets/icons/svgs/cart.svg';
import useScrollHandling from '@/hooks/useScrollHandling ';
import classNames from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';

function Myheader() {
  const {
    containerBoxIcon,
    containerMenu,
    containerHeader,
    containerBox,
    container,
    fixedHeader,
    topHeader,
    boxCart,
    quantity,
  } = styles;

  const { scrollPosition } = useScrollHandling();
  const [fixedPosition, setFixedPosition] = useState(false);

  const { isOpen, setIsOpen } = useContext(SideBarContext);

  console.log(isOpen);

  useEffect(() => {
    setFixedPosition(scrollPosition > 80);
  }, [scrollPosition]);

  return (
    <div
      className={classNames(container, topHeader, {
        [fixedHeader]: fixedPosition,
      })}
    >
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {/* <Boxicon type={'fb'} href={''} /> */}
            {dataBoxicon.map((item) => {
              return <BoxIcon type={item.type} href={item.href} />;
            })}
          </div>
          {/* icon end */}
          {/* menu start */}
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item) => {
              return <Menu content={item.content} href={item.href} />;
            })}
          </div>
        </div>
        {/* end ben trai */}
        {/* logo center */}
        <div>
          <img
            src={Logo}
            alt=''
            style={{
              width: '153px',
              height: '53px',
            }}
          />
        </div>
        {/* end logo */}
        {/* ben phai */}
        <div className={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3, dataMenu.length).map((item) => {
              return (
                <Menu
                  content={item.content}
                  href={item.href}
                  setIsOpen={setIsOpen}
                />
              );
            })}
          </div>
          {/*  */}
          <div className={containerBoxIcon}>
            <img width={26} height={26} src={redLoadIcon} alt='redLoadIcon' />
            <img width={26} height={26} src={heartIcon} alt='heartIcon' />
            <img width={26} height={26} src={cartIcon} alt='cartIcon' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myheader;
