import { dataInfo } from '@components/Info/contants';
import Infocard from '@components/Info/Infocard/Infocard';
import Mainlayout from '@components/Layout/Layout';
import styles from './styles.module.scss';

function Info() {
  const { container } = styles;
  return (
    <div>
      <Mainlayout>
        <div className={container}>
          {dataInfo.map((item) => {
            return (
              <Infocard
                content={item.content}
                discsription={item.discsription}
                src={item.src}
              />
            );
          })}
        </div>
      </Mainlayout>
    </div>
  );
}

export default Info;
