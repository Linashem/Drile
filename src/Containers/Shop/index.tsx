import React from 'react';
import axios from 'axios';
import { ShopList } from '../../Components/ShopList';
// import React, { useEffect, useState } from 'react';
// import { ShopItem } from '../../Components/ShopItem';

// type GoodsProps = {
//   id: number;
//   title: string;
//   category: string;
//   desc: string;
//   imgUrl: string;
//   price: number;
// };

// export const Shop = () => {
//   const [data, setData] = useState<GoodsProps[]>([]);

//   const getData = async () => {
//     try {
//       const response = await axios.get<GoodsProps[]>('http://localhost:3001/goods');
//       setData(response.data);
//       console.log(response);
//     } catch (error) {
//       console.log(error, 'err');
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div>
//       {data.map((el) => (
//         <ShopItem
//           title={el.title}
//           key={el.id}
//           category={el.category}
//           price={el.price}
//           imgUrl={el.imgUrl}
//         />
//       ))}
//     </div>
//   );
// };
export const Shop = () => {
  return <ShopList />;
};
