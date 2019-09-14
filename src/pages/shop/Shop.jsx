import React,{useState} from 'react';
import SHOP_DATA from '../../data/ShopData'
import PreviewCollection from '../../components/preview-collection/PreviewCollection.jsx'


const Shop = () => {
    const [shopData, setShopData] = useState(SHOP_DATA);
    return (
        <div className="shop-page">
            {
                shopData.map(data=><PreviewCollection {...data} key={data.id}/>)
            }
        </div>
    );
}

export default Shop;
