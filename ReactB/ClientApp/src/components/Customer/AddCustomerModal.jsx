import React from 'react'

import { Button, Form, Header, Icon, Modal } from 'semantic-ui-react'


const AddCustomerModal  = (props) => {
  const { Customer } = props;


  const [open, setOpen] = React.useState(false)

  
 
  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='Large'
      trigger={<Button>New customer</Button>}
    >
      <Header icon>
        <Icon name='Create Customer' />
   create new customer
      </Header>
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
          <Icon name='checkmark' /> create
        </Button>
        <Button basic color='black' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> Cancel
        </Button>
        
      </Modal.Actions>
    </Modal>
  )
}

export default AddCustomerModal;