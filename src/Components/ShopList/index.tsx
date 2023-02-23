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

  return (
    <div className={style.wrapper}>
      <h2 className={style.wrapper_title}>Shop</h2>
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
  );
};
