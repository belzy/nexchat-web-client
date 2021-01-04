import React, { useState } from 'react';
import {
  Container, Form, FormGroup, Input
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPaperPlane, faPaperclip, faSmileWink,
} from '@fortawesome/free-solid-svg-icons';


const ChatFooter = props => {
  const [messageInput, setMessageInput] = useState('');
  
  return (
    <Container fluid='xxl' className='border-top border-secondary py-3 px-3 py-lg-4 px-lg-4'>
      <Form onSubmit={ e => {
        setMessageInput('');
        props.handleMessageSubmit(e, { value: messageInput, user: props.user, chat: props.chat });
      }}>
        <FormGroup className='mb-0 d-flex'>
          <Input 
            className='mr-2'
            style={{ overflow: 'hidden', overflowWrap: 'break-word', resize: 'vertical', height: '46px' }} 
            type='textarea' 
            placeholder='Type your message...'
            value={ messageInput }
            onChange={ e => setMessageInput(e.target.value) }
          />

          <button 
            className='btn btn-ico btn-secondary btn-minimal rounded-circle bg-transparent shadow-none text-muted d-flex justify-content-center align-items-center' style={{ width: '48px', height: '48px' }}><FontAwesomeIcon className='h5 text-muted m-0' icon={ faSmileWink } 
          /></button>

          <button 
            className='btn btn-ico btn-secondary btn-minimal rounded-circle bg-transparent shadow-none text-muted d-flex justify-content-center align-items-center' style={{ width: '48px', height: '48px' }}><FontAwesomeIcon className='h5 text-muted m-0' icon={ faPaperclip } 
          /></button>

          <button 
            type='submit'
            className='btn btn-ico btn-primary rounded-circle d-flex justify-content-center align-items-center' style={{ width: '48px', height: '48px' }}><FontAwesomeIcon className='h5 text-white m-0' icon={ faPaperPlane } 
          /></button>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default ChatFooter;