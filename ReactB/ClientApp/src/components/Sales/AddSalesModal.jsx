import React from 'react'

import { Button, Form, Header, Icon, Modal } from 'semantic-ui-react'



const AddSalesModal  = (props) => {
  const { Sales } = props;


  const [open, setOpen] = React.useState(false)

  const options = [
    { key: 'c', text: 'Customer', value: 'customer' },
    { key: 'p', text: 'Product', value: 'product' },
    { key: 's', text: 'Store', value: 'store' },
  ]
  
 
  return (
    <Modal
   
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='Large'
      trigger={<Button>Create Sales</Button>}
    >
      <Header icon>
        <Icon name='Create Sales' />
   create sales
      </Header>
      
      <Modal.Content>
        <div>
          
        <Form>
        <Form.Field>
        
    
      <label> DATESOLD</label>
      <input placeholder=' DATESOLD' />
    </Form.Field>
    <Form.Field> <label>CUSTOMER</label>
       <Form.Select options={options} placeholder='' />
    </Form.Field>
    <Form.Field>
      <label>PRODUCT</label>
      <Form.Select options={options} placeholder=''/>
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
          <Icon name='checkmark' /> create
        </Button>
        <Button  color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> Cancel
        </Button>
        
      </Modal.Actions>
    </Modal>
  )
}

export default AddSalesModal;