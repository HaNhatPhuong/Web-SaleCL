import Button from '@components/Button/Button';
import styles from './styles.module.scss';
function Banner() {
  const { container, content, tittle, des } = styles;
  return (
    <div className={container}>
      <div className={content}>
        <h1 className={tittle}>XStore Marseill</h1>
        <div className={des}>
          Make yours celebrations even more special this years with beautiful.
        </div>
        <div>
          <Button content={'Go To Shop'} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
