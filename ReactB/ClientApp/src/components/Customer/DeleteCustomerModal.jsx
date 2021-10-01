import React from 'react'

import { Button, Form, Header, Icon, Modal } from 'semantic-ui-react'


const DeleteCustomerModal  = (props) => {
  const { Customer,fetchCustomers } = props;


  const [open, setOpen] = React.useState(false)

  
 
  return (
    <Modal
     
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='Small'
      trigger={<Button>Delete</Button>}
    >
      <Header icon>
        <Icon name='Delete' />
 delete customer
      </Header>
      <Modal.Content>
        <p>
            
          Are you sure you want to delete this customer?
        </p>
      </Modal.Content>
      <Modal.Content>
        <div>
        <Form>
    <Form.Field>
      <label> NAME</label>
      <input placeholder=' NAME' />
    </Form.Field>
    <Form.Field>
      <label>ADDRESS</label>
      <input placeholder='ADDRESS' />
    </Form.Field>
  </Form>
        </div>
        
      </Modal.Content>
      <Modal.Actions>
      <Button color='green' inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> YES
        </Button>
        <Button color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> NO
        </Button>
       
      </Modal.Actions>
    </Modal>
  )
}

export default DeleteCustomerModal;