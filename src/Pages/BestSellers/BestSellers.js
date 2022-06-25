import React from 'react';
import ProductList from '../../Components/Common/ProductList/ProductList';
import * as S from './style';



const BestSellers = ({ productsData }) => {
    return (
        <S.BestSellersWrapper>
            <h1>Best sellers</h1>
            <ProductList productsData={productsData} />
        </S.BestSellersWrapper>
    );
}

export default BestSellers;