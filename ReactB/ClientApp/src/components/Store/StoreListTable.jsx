import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'


import { Button, Form, Header, Modal } from 'semantic-ui-react'


import axios from 'axios';

import AddStoreModal from './AddStoreModal';


import EditStoreModal from './EditStoreModal';
import DeleteStoreModal from './DeleteStoreModal';


const StoreListTable = (props) => {
    const { store,fetchStores } = props;

    const [open, setOpen] = React.useState(false)

    const deleteStore = (id) => {
      axios
      .delete(`/Stores/DeleteStore/${id}`)
      .then(res => {
        console.log(res.data)
        fetchStores();
      })

      .catch((e) => {
        console.log(e);
      });

    }

    
    return (

  <Table celled>
    <Table.Header><AddStoreModal store={store}/>
      <Table.Row>
        <Table.HeaderCell>id</Table.HeaderCell>
        <Table.HeaderCell>name</Table.HeaderCell>
        <Table.HeaderCell>address</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
       
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {store.map( (s) => { 
            return (
                <Table.Row> 
        
                <Table.Cell>{s.id}</Table.Cell>
                <Table.Cell>{s.name}</Table.Cell>
                <Table.Cell>{s.address}</Table.Cell>
                <EditStoreModal/>
                <DeleteStoreModal/>
               </Table.Row>
            )
        })}
    </Table.Body>
  </Table>
    );
};

export default StoreListTable;