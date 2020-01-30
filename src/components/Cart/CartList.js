import React from 'react'
import CartItem from './CartItem';

export default function CartList({value}) {
    const {cart} = value;
    return (
        <div className="container-fluid">
            {cart.map(item =>{ //set up key since there will be mulitple CartItems
                return <CartItem key={item.id} item={item} value={value} />;
            })}
        </div>
    )
}
