import styles from '../styles.module.scss';

function Infocard({ content, discsription, src }) {
  const { containerCard, containerContent, tittle, des } = styles;
  return (
    <div className={containerCard}>
      <img width={40} height={41} src={src} alt='Truck' />
      <div className={containerContent}>
        <span className={tittle}>{content}</span>
        <span className={des}>{discsription}</span>
      </div>
    </div>
  );
}

export default Infocard;
