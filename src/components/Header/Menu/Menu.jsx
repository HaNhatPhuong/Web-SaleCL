import { SideBarContext } from '@/contexts/SideBarProvider';
import { useContext, useState } from 'react';
import styles from '../styles.module.scss';
import { StoreContext } from '@/contexts/storeProvider';
function Menu({ content, href }) {
  const { menu, subMenu } = styles;
  const { setIsOpen, setType } = useContext(SideBarContext);
  const { userInfo, handleLogout } = useContext(StoreContext);
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);
  console.log(userInfo);
  const handleClickShowLogin = () => {
    if (content.toLowerCase() === 'sign in' && !userInfo) {
      setIsOpen(true);
      setType('login');
    }
  };

  const handleRenderText = (content) => {
    if (content.toLowerCase() === 'sign in' && userInfo) {
      return `Hello: ${userInfo.username}`;
    }
    return content;
  };

  const handleHover = () => {
    if (content.toLowerCase() === 'sign in' && userInfo) {
      setIsShowSubMenu(true);
    }
  };

  return (
    <div
      className={menu}
      onMouseEnter={handleHover}
      onClick={handleClickShowLogin}
    >
      {handleRenderText(content)}
      {isShowSubMenu && (
        <div
          onMouseLeave={() => setIsShowSubMenu(false)}
          onClick={handleLogout}
          className={subMenu}
        >
          LOG OUT
        </div>
      )}
    </div>
  );
}

export default Menu;
