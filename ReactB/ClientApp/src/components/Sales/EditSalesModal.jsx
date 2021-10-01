import React from 'react'

import { Button, Form, Header, Icon, Modal } from 'semantic-ui-react'


const EditSalesModal  = (props) => {
  const { Sales,fetchSales } = props;


  const [open, setOpen] = React.useState(false)

  const options = [
    { key: 'c', text: 'Customerid', value: 'customerid' },
    { key: 'p', text: 'Productid', value: 'productid' },
    { key: 's', text: 'Storeid', value: 'storeid' },
  ]
 
  return (
    <Modal

      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='Small'
      trigger={<Button>Edit</Button>}
    >
      <Header icon>
        <Icon name='Edit' />
   edit sales
      </Header>
      <Modal.Content>
        <div>
        <Form>
    <Form.Field>
      <label> DATESOLD</label>
      <input placeholder=' DATESOLD' />
    </Form.Field>
    <Form.Field>
      <label>CUSTOMER</label>
      <Form.Select options={options} placeholder='' />
    </Form.Field>
    <Form.Field>
      <label>PRODUCT</label>
      <Form.Select options={options} placeholder='' />
    </Form.Field>
    <Form.Field>
      <label>STORE</label>
      <Form.Select options={options} placeholder='' />
    </Form.Field>
  </Form>
        </div>
        
      </Modal.Content>
      <Modal.Actions>
      <Button color='green' inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> edit
        </Button>
        <Button color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> Cancel
        </Button>
        
      </Modal.Actions>
    </Modal>
  )
}

export default EditSalesModal;