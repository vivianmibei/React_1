import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'



import AddSalesModal from './AddSalesModal';


import EditSalesModal from './EditSalesModal';
import DeleteSalesModal from './DeleteSalesModal';

const SalesListTable = (props) => {
    const { sales } = props;
    return (

  <Table celled>
    <Table.Header><AddSalesModal sales={sales}/>
      <Table.Row>
        <Table.HeaderCell>id</Table.HeaderCell>
        <Table.HeaderCell>productId</Table.HeaderCell>
        <Table.HeaderCell>customerId</Table.HeaderCell>
        <Table.HeaderCell>storeId</Table.HeaderCell>
        <Table.HeaderCell>dateSold</Table.HeaderCell>
        <Table.HeaderCell>actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {sales.map( (s) => {
            return (
                <Table.Row> 
        
                <Table.Cell>{s.id}</Table.Cell>
                <Table.Cell>{s.productId}</Table.Cell>
                <Table.Cell>{s.customerId}</Table.Cell>
                <Table.Cell>{s.storeId}</Table.Cell>
                <Table.Cell>{s.dateSold}</Table.Cell>
                <EditSalesModal />
                <DeleteSalesModal />
              </Table.Row>
            )
        })}
     
     
    </Table.Body>
  </Table>
    );
};

export default SalesListTable;