import React from 'react'
import { Icon, Label, Menu, Table, TableBody, TableRow } from 'semantic-ui-react'

import { Button, Form, Header, Modal } from 'semantic-ui-react'

import axios from 'axios';

import AddCustomerModal from './AddCustomerModal';

import EditCustomerModal from './EditCustomerModal';
import DeleteCustomerModal from './DeleteCustomerModal';



const CustomerListTable = (props) => {
    const { customer,fetchCustomers } = props;

    const [open, setOpen] = React.useState(false)
    

     const deleteCustomer = (id) => {
      axios
      .delete(`/Customers/DeleteCustomer/${id}`)
      .then(res => {
        console.log(res.data)
        fetchCustomers();
      })

      .catch((e) => {
        console.log(e);
      });

    }

 
    return (

  <Table celled>
    <Table.Header><AddCustomerModal customer={customer}/>
      <Table.Row>
        <Table.HeaderCell>id</Table.HeaderCell>
        <Table.HeaderCell>name</Table.HeaderCell>
        <Table.HeaderCell>address</Table.HeaderCell>
        <Table.HeaderCell>actions</Table.HeaderCell>
          </Table.Row>
    </Table.Header>

    <Table.Body>
        {customer.map( (c) => {
            return (
                <Table.Row >
                <Table.Cell>{c.id}</Table.Cell>
                <Table.Cell>{c.name}</Table.Cell>
                <Table.Cell>{c.address}</Table.Cell>
                <EditCustomerModal/>
                <DeleteCustomerModal/>
                </Table.Row>
            )
       })}
                
</Table.Body>
    </Table>
   );
    };

  


export default CustomerListTable;