import React from 'react';
import useShop from '../../../Hooks/useShop';
import ShopHomeItem from './ShopHomeItem';

const ShopHome = () => {
    const [item] = useShop();
    return (
        <div className="text-center">
            <h6 className="text-secondary">SHOP UNIQUE ITEMS</h6>
            <h1>Best Sellers</h1>
            <div className="container">
                <div className="row">
                    {
                        item.map(item => {
                            if(item.id <= 6){
                                return(
                                    <ShopHomeItem key={item._id} item={item}></ShopHomeItem>
                                )
                            }
                            else{
                                return null
                            }
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default ShopHome;