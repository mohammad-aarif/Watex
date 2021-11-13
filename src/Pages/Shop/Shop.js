import { LinearProgress } from '@mui/material';
import React from 'react';
import useShop from '../../Hooks/useShop';
import SingleItem from './SingleItem';

const Shop = () => {
    const [item, isProduct] = useShop();
    if(isProduct){
        return <LinearProgress />
      }
    return (
        <div className="container text-center">
        <div className="row">
            {
                item.map(item => <SingleItem key={item._id} item={item}></SingleItem>)

            }
        </div>
    </div>
    );
};

export default Shop;