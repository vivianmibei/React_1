import React, { Component } from "react";
import axios from 'axios';
import CustomerListTable from "./CustomerListTable";






export default class CustomerIndex extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            customer: [] 
         };
        
      }

      componentDidMount() {
         this.fetchCustomers();

      }
      fetchCustomers = () => {
        axios.get('/Customers/GetCustomer')
        .then((res) => {
          console.log(res.data);
          this.setState({
              customer: res.data,
          })
         
        })
        .catch((e) => {
          console.log(e);
        });
      };
      

     
     
   render() {
    const { customer } =this.state;
    
    return <div>
        
           <CustomerListTable customer={customer} fetchCustomers={this.fetchCustomers}/>
          

           
    </div>
}

}