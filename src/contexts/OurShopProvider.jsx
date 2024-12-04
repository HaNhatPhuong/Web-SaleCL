import { createContext, useEffect, useState } from 'react';
import { getProducts } from '@/apis/productService';

export const OurShopContext = createContext();

export const OurShopProvider = ({ children }) => {
  const sortOptions = [
    { label: 'Default sorting', value: '0' },
    { label: 'Sort by Popularity', value: '1' },
    { label: 'Sort by Average rating', value: '2' },
    { label: 'Sort by Latest', value: '3' },
    { label: 'Price: low to high', value: '4' },
    { label: 'Price: high to low', value: '5' },
  ];
  const showOptions = [
    { label: 'Show: 8', value: '8' },
    { label: 'Show: 12', value: '12' },
    { label: 'Show: All', value: 'all' },
  ];
  const [sortId, setSortId] = useState('0');
  const [showId, setShowId] = useState('8');
  const [isShowGrid, setIsShowGrid] = useState(true);

  const [products, setProducts] = useState([]);
  // const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isLoadMore, setIsLoadMore] = useState(false);
  // const [page, setPage] = useState(1);
  // const [total, setTotal] = useState(0);

  const values = {
    sortOptions,
    showOptions,
    setSortId,
    setShowId,
    setIsShowGrid,
    products,
    isShowGrid,
    // isLoading,
    // handleLoadMore,
    // total,
    // isLoadMore,
  };

  useEffect(() => {
    const query = {
      sortType: sortId,
      page: 1,
      limit: showId,
    };
    getProducts(query)
      .then((res) => {
        setProducts(res.contents);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sortId, showId]);

  return (
    <OurShopContext.Provider value={values}>{children}</OurShopContext.Provider>
  );
};
