import React, { Component } from "react";
import axios from 'axios';
import SalesListTable from "./SalesListTable";

export default class SalesIndex extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            sales: []
         };
        
      }

      componentDidMount() {
         this.fetchSales();

      }
      fetchSales = () => {
        axios.get('/Sales/GetSales')
        .then((res) => {
          console.log(res.data);
          this.setState({
              sales: res.data,
          })
         
        })
        .catch((e) => {
          console.log(e);
        });
      };
   render() {
       const { sales } =this.state;
       return <div>
         
           <SalesListTable sales={sales}/>
       </div>
   }

}