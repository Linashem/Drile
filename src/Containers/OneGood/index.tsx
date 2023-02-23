import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { OneGoodContent } from '../../Components/OneGoodContent';
import { GoodEffect, GoodSelectors } from '../../Store';

export const OneGood = () => {
  const { goodId } = useParams();
  console.log(goodId);
  const dispatch = useDispatch();
  const goodData = useSelector(GoodSelectors.getOneGoodData);
  useEffect(() => {
    if (goodId) {
      dispatch(GoodEffect.ferchOneGood(goodId));
    }
  }, [goodId]);

  return <OneGoodContent title={goodData.title} imgUrl={goodData.imgUrl} />;
};
