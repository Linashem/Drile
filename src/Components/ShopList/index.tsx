import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ShopItem } from '../../Components/ShopItem';
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
  const [currentPage, setcurrentPage] = useState(0);
  const [pageLimit, setpageLimit] = useState(6);

 
  const getData = async () => {
    try {
      const response = await axios.get<GoodsProps[]>('http://localhost:3001/goods');
      setData(response.data);
      console.log(response);
    } catch (error) {
      console.log(error, 'err');
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
  const handleFilter = async (value) => {
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
          <button onClick={() => handleFilter('dressingtable')}>DRESSING TABLE</button>
          <button onClick={() => handleFilter('lamp')}>LAMP</button>
          <button onClick={() => handleFilter('cabinet')}>CABINET</button>
          <button onClick={() => handleFilter('sofa')}>SOFA</button>
          <button onClick={() => handleFilter('chair')}>CHAIR</button>
          <button onClick={() => handleFilter('bed')}>BED</button>
        </div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <div>
            <button type="submit">Search</button>
            <button onClick={() => handleReset()}>Reset</button>
          </div>
        </form>
        <div className={style.wrapper_cards}>
          {data.map((el) => (
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
    </>
  );
};
