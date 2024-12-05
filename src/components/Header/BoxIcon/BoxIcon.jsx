import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import styles from '../styles.module.scss';

function BoxIcon({ type, href }) {
  const { Boxicon } = styles;

  const handleRenderIcon = (type) => {
    switch (type) {
      case 'fb':
        return <FaFacebookF color='#fff' />;
      case 'ins':
        return <FaInstagram color='#fff' />;
      case 'ytb':
        return <FaYoutube color='#fff' />;
      default:
        return null;
    }
  };

  return (
    <a
      href={href}
      className={Boxicon}
      target='_blank'
      rel='noopener noreferrer'
    >
      {handleRenderIcon(type)}
    </a>
  );
}

export default BoxIcon;
