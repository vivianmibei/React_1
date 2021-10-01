import React, { Component } from "react";
import axios from 'axios';

import ProductListTable from "./ProductListTable";




export default class ProductIndex extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            product: []
         };
        
      }

      componentDidMount() {
         this.fetchProducts();

      }
      fetchProducts = () => {
        axios.get('/Products/GetProduct')
        .then((res) => {
          console.log(res.data);
          this.setState({
              product: res.data,
          })
         
        })
        .catch((e) => {
          console.log(e);
        });
      };
   render() {
    
           
    const { product } =this.state;
    
    return <div>
        
           <ProductListTable product={product} fetchProducts={this.fetchProducts}/>
           
    </div>
}

}
    
    


