import React, { Component } from "react";
import axios from 'axios';
import StoreListTable from "./StoreListTable";

export default class StoreIndex extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            store: []
         };
        
      }

      componentDidMount() {
         this.fetchStores();

      }
      fetchStores = () => {
        axios.get('/Stores/GetStore')
        .then((res) => {
          console.log(res.data);
          this.setState({
              store: res.data,
          })
         
        })
        .catch((e) => {
          console.log(e);
        });
      };
   render() {
    const { store } =this.state;
    return <div>
           <StoreListTable store={store} fetchStores={this.fetchStores}/>
         
    </div>
}

}