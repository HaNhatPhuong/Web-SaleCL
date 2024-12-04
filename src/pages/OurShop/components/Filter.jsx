import { TfiLayoutGrid4 } from 'react-icons/tfi';
import { CiBoxList } from 'react-icons/ci';
import styles from '../styles.module.scss';
import cls from 'classnames';
import { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import SelectBox from '@pages/OurShop/components/SelectBox';
function Filter() {
  const { containerFilter, boxIcon, boxLeft, selectBox, show, sort } = styles;
  const { showOptions, sortOptions, setSortId, setShowId, setIsShowGrid } =
    useContext(OurShopContext);
  const getValueSeclect = (value, type) => {
    if (type === 'sort') {
      setSortId(value);
    } else {
      setShowId(value);
    }
  };
  const handleGetShowGrid = (type) => {
    setIsShowGrid(type === 'grid');
  };

  return (
    <div className={containerFilter}>
      <div className={boxLeft}>
        <SelectBox
          options={sortOptions}
          getValue={getValueSeclect}
          type='sort'
        />
        <div className={boxIcon}>
          <TfiLayoutGrid4
            size={25}
            cursor={'pointer'}
            onClick={() => handleGetShowGrid('grid')}
          />
          <div
            style={{ height: '20px', width: '1px', backgroundColor: '#e1e1e1' }}
          />

          <CiBoxList
            size={27}
            cursor={'pointer'}
            onClick={() => handleGetShowGrid('list')}
          />
        </div>
      </div>
      <div className={boxLeft}>
        <div>Show</div>
        <SelectBox
          options={showOptions}
          getValue={getValueSeclect}
          type='show'
        />
      </div>
    </div>
  );
}

export default Filter;
