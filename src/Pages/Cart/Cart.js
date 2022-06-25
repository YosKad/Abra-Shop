import React, { useState, Fragment } from 'react';
import EmptyCart from '../../Assets/empty-cart.svg';
import CartProductList from '../../Components/Common/CartProductList';
import * as S from './style';

// adding products base on zeplin to check the style 
const products = [
    {
        "id": 1,
        "name":"Black T-shirt",
        "price" : 89,
        "image":"https://elad-test-1.s3.amazonaws.com/tshirt.png",
        "quantity": 1,
        "catagories" : ["clothing", "best-seller"]
      },
      {
        "id": 4,
    
        "name":"White Hat",
        "price" : 57,
        "image":"https://elad-test-1.s3.amazonaws.com/white-hat.png",
        "quantity": 1,
        "catagories" : ["clothing"]
      
      },
      {
        "id": 6,
    
        "name":"Black Notebook",
        "price" : 57,
        "image":"https://elad-test-1.s3.amazonaws.com/note.png",
        "quantity": 1,
        "catagories" : ["office", "best-seller"]
      
      },
      
 
 
    
];

const Cart = () => {
    const [cartProducts, addCartProducts] = useState(() => products);

    console.log(cartProducts, addCartProducts);

    return (
        <S.StyledCartWrapper>
            <S.CartTitle>My cart</S.CartTitle>

            {cartProducts.length ?
                <Fragment>
                    <S.ProductCartContent>Items are reserved for 60 minutes</S.ProductCartContent>
                    <CartProductList cartProducts={cartProducts} />
                
                    <S.ProductCartTotal>
                        <span>Subtotal:</span>
                        <span>176 ILS</span>
                    </S.ProductCartTotal>
                </Fragment>
                
                :
                
                <S.EmptyCartContainer>
                    <S.EmptyCartImg src={EmptyCart} alt='empty cart' />
                    <S.EmptyCartText>Your cart is empty</S.EmptyCartText>
                </S.EmptyCartContainer>
            }
            
            <S.CartButton disabled>Checkout</S.CartButton>

        </S.StyledCartWrapper>
    );
}

export default Cart;