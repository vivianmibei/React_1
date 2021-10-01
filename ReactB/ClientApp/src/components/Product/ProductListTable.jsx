import React from 'react'
import { Icon, Label, Menu, Table, TableBody, TableRow } from 'semantic-ui-react'

import { Button, Form, Header, Modal } from 'semantic-ui-react'

import axios from 'axios';

import AddProductModal from './AddProductModal';
import EditProductModal from './EditProductModal';

import DeleteProductModal from './DeleteProductModal';







const ProductListTable = (props) => {
    const {product, fetchProducts } = props;


    const [open, setOpen] = React.useState(false)
    

     const deleteProduct = (id) => {
      axios
      .delete(`/Products/DeleteProduct/${id}`)
      .then(res => {
        console.log(res.data)
        fetchProducts();
      })

      .catch((e) => {
        console.log(e);
      });

    }
    return (

  <Table celled>
    <Table.Header><AddProductModal product={product}/>
      <Table.Row>
        <Table.HeaderCell>id</Table.HeaderCell>
        <Table.HeaderCell>name</Table.HeaderCell>
        <Table.HeaderCell>price</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
       
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {product.map( (p) => {
            return (
                <Table.Row> 
        
                <Table.Cell>{p.id}</Table.Cell>
                <Table.Cell>{p.name}</Table.Cell>
                <Table.Cell>{p.price}</Table.Cell>
                <EditProductModal/>
                <DeleteProductModal/>
         
              </Table.Row>
            )
        })}
     
     
    </Table.Body>
  </Table>
    );
};

export default ProductListTable;