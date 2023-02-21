import React from 'react';
import { Product } from '../Product';

export const AssortSingleSofa = () => {
  return (
    <>
      <Product
        imgUrl={'/img/img1.png'}
        imgAlt={'Metal Vintage Pendant'}
        newprice={423}
        // oldprice={529}
        title={'Metal Vintage Pendant'}
      />
      <Product
        imgUrl={'/img/img2.png'}
        imgAlt={'Klosh Table Clock'}
        newprice={500}
        oldprice={700}
        title={'Klosh Table Clock'}
      />
      <Product
        imgUrl={'/img/img3.png'}
        imgAlt={'Arne Dining Chair'}
        newprice={400}
        oldprice={550}
        title={'Arne Dining Chair'}
      />
      <Product
        imgUrl={'/img/img4.png'}
        imgAlt={'Klosh Wall Clock'}
        newprice={300}
        oldprice={400}
        title={'Klosh Wall Clock'}
      />
      <Product
        imgUrl={'/img/img5.png'}
        imgAlt={'Modern Outdoor Chair'}
        newprice={423}
        oldprice={529}
        title={'Modern Outdoor Chair'}
      />
      <Product
        imgUrl={'/img/img6.png'}
        imgAlt={'Modern Bedroom Storage'}
        newprice={423}
        oldprice={600}
        title={'Modern Bedroom Storage'}
      />
    </>
  );
};
