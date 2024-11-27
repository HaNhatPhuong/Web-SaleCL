import { SideBarContext } from '@/contexts/SideBarProvider';
import useScrollHandling from '@/hooks/useScrollHandling ';
import classNames from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { PiShoppingCartLight } from 'react-icons/pi';
import { TfiReload } from 'react-icons/tfi';
import Logo from '../../assets/images/Logo-retina.png';
import BoxIcon from './Boxicon/Boxicon';
import { dataBoxicon, dataMenu } from './BoxIcon/contants';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';

function Myheader() {
  const {
    containerBoxIcon,
    containerMenu,
    containerHeader,
    containerBox,
    container,
    fixedHeader,
    topHeader,
    // boxCart,
    // quantity,
  } = styles;

  const { scrollPosition } = useScrollHandling();
  const [fixedPosition, setFixedPosition] = useState(false);

  const { setIsOpen, setType } = useContext(SideBarContext);

  const handleOpenSideBar = (type) => {
    setIsOpen(true);
    setType(type);
  };

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
            alt='Logo'
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
                  // setIsOpen={setIsOpen}
                />
              );
            })}
          </div>
          {/*  */}
          <div className={containerBoxIcon}>
            <TfiReload size={20} onClick={() => handleOpenSideBar('compare')} />
            <CiHeart size={28} onClick={() => handleOpenSideBar('wishlist')} />
            <PiShoppingCartLight
              size={26}
              onClick={() => handleOpenSideBar('cart')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myheader;
