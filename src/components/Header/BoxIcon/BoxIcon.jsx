import styles from '../styles.module.scss';
import fbIcon from '../../../assets/icons/svgs/fbicon.svg';
import igIcon from '../../../assets/icons/svgs/igicon.svg';
import ytbIcon from '../../../assets/icons/svgs/ytbicon.svg';
function BoxIcon({ type, href }) {
  const { Boxicon } = styles;

  const handleRenderIcon = (type) => {
    switch (type) {
      case 'fb':
        return fbIcon;
      case 'ins':
        return igIcon;
      case 'ytb':
        return ytbIcon;
    }
  };
  return (
    <div className={Boxicon}>
      <img src={handleRenderIcon(type)} alt={type} />
    </div>
  );
}

export default BoxIcon;
