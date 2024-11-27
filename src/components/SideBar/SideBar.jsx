import { useContext } from 'react';
import styles from './styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import classNames from 'classnames';
import { AiOutlineClose } from 'react-icons/ai';
import Login from '@components/ContentSideBar/Login/Login';
import Compare from '@components/ContentSideBar/Compare/Compare';
import Cart from '@components/ContentSideBar/Cart/Cart';
import Wishlist from '@components/ContentSideBar/WishList/WishList';
function SideBar() {
  const { container, overlay, sideBar, slideSideBar, boxIcon } = styles;
  const { isOpen, setIsOpen, type } = useContext(SideBarContext);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleRenderContent = () => {
    switch (type) {
      case 'login':
        return <Login />;
      case 'compare':
        return <Compare />;
      case 'wishlist':
        return <Wishlist />;
      case 'cart':
        return <Cart />;
      case 'detail':
        return <DetailProduct />;

      default:
        return <Login />;
    }
  };
  // console.log(type);
  return (
    <div className={container}>
      <div
        className={classNames({
          [overlay]: isOpen,
        })}
        onClick={handleToggle}
      />
      <div
        className={classNames(sideBar, {
          [slideSideBar]: isOpen,
        })}
      >
        {isOpen && (
          <div className={boxIcon} onClick={handleToggle}>
            <AiOutlineClose />
          </div>
        )}
        {handleRenderContent()}
      </div>
    </div>
  );
}

export default SideBar;
