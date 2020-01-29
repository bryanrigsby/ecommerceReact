import React, {Component} from 'react';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
    state={
        products: [],
        detailProduct: detailProduct
    };
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return {products: tempProducts};
        });
    };
    getItem = id => {               //gets the item if the item.id equals the id
        const product = this.state.products.find(item => item.id===id);
        return product;
    }
    handleDetail = id => { //gets the product returned from getItem and sets the state of the ProductProvider detailProduct to that product
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct: product};
        });
    };
    addToCart = (id) => {
        console.log(`cart.id is ${id}`);
    };
    render() {
        return (
            <ProductContext.Provider 
            value={{
                ...this.state, //destructuring
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer};
