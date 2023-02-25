import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ShopItem } from '../../Components/ShopItem';
// import { Pagination } from '../Pagination';
import { Pagination } from 'antd';
import style from './ShopList.module.scss';

type GoodsProps = {
  id: number;
  title: string;
  category: string;
  desc: string;
  imgUrl: string;
  price: number;
  oldPrice?: number;
};

export const ShopList = () => {
  const [data, setData] = useState<GoodsProps[]>([]);
  const [value, setValue] = useState('');
  const [goodsPerPage] = useState(6);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const getData = async () => {
    try {
      const response = await axios.get<GoodsProps[]>('http://localhost:3001/goods');
      setData(response.data);
      setTotal(response.data.length);
      console.log(response);
    } catch (error) {
      console.log(error, 'err');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const lastGoodIndex = page * goodsPerPage;
  const firstGoodInex = lastGoodIndex - goodsPerPage;
  const curentGood = data.slice(firstGoodInex, lastGoodIndex);

  const handleReset = () => {
    getData();
  };
  const handleSearch = async (e: any) => {
    e.preventDefault();
    return await axios
      .get(`http://localhost:3001/goods?q=${value}`)
      .then((response) => {
        setData(response.data);
        setValue('');
      })
      .catch((err) => console.log(err, 'err'));
  };
  const handleFilter = async (value: string) => {
    return await axios
      .get(`http://localhost:3001/goods?category=${value}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err, 'err'));
  };

  return (
    <>
      <div className={style.wrapper}>
        <h2 className={style.wrapper_title}>Shop</h2>
        <div>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search..."
              value={value}
              onChange={(e: any) => {
                setValue(e.target.value);
              }}
            />
            <div>
              <button type="submit">Search</button>
              <button onClick={() => handleReset()}>Reset</button>
            </div>
          </form>
          <button onClick={() => handleFilter('dressingtable')}>DRESSING TABLE</button>
          <button onClick={() => handleFilter('lamp')}>LAMP</button>
          <button onClick={() => handleFilter('cabinet')}>CABINET</button>
          <button onClick={() => handleFilter('sofa')}>SOFA</button>
          <button onClick={() => handleFilter('chair')}>CHAIR</button>
          <button onClick={() => handleFilter('bed')}>BED</button>
        </div>
        <div className={style.wrapper_cards}>
          {curentGood.map((el) => (
            <ShopItem
              title={el.title}
              key={el.id}
              price={el.price}
              imgUrl={el.imgUrl}
              oldPrice={el.oldPrice}
              id={el.id}
            />
          ))}
        </div>
      </div>
      <Pagination
        onChange={(value) => setPage(value)}
        pageSize={goodsPerPage}
        total={total}
        current={page}
      />
    </>
  );
};
