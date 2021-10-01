import React from 'react'

import { Button, Form, Header, Icon, Modal } from 'semantic-ui-react'


const AddProductModal  = (props) => {
  const { Product } = props;


  const [open, setOpen] = React.useState(false)

  
 
  return (
    <Modal
     
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='Large'
      trigger={<Button>New Product</Button>}
    >
      <Header icon>
        <Icon name='Create Product' />
   create new product
      </Header>
      <Modal.Content>
        <div>
        <Form>
    <Form.Field>
      <label> NAME</label>
      <input placeholder=' NAME' />
    </Form.Field>
    <Form.Field>
      <label>PRICE</label>
      <input placeholder='PRICE' />
    </Form.Field>
  </Form>
        </div>
        
      </Modal.Content>
      <Modal.Actions>
      <Button color='green' inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> create
        </Button>
        <Button  color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> Cancel
        </Button>
        
      </Modal.Actions>
    </Modal>
  )
}

export default AddProductModal;