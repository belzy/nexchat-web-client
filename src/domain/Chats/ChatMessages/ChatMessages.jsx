import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
import {
  ChatMessage,
} from '../../domain';

const ChatMessages = props => {

  useEffect(() => {

    const messagesListEl = document.querySelector('#chat-messages-list');
    messagesListEl.addEventListener('scroll', e => {

      const atBottom = messagesListEl.scrollHeight - messagesListEl.scrollTop === messagesListEl.clientHeight;

      if (atBottom) {
        // console.log('at bottom');
      }

    });

    const atBottom = messagesListEl.scrollHeight - messagesListEl.scrollTop === messagesListEl.clientHeight;


  }, []);

  return (
    <Container className='ChatMessages overflow-hidden flex-grow-1 d-flex flex-column justify-content-end' fluid={ true }>
      <ul id='chat-messages-list' className='ChatMessages__list p-0 m-0 overflow-auto'>
        {
          props.messages.map((message, index) => {
            return (
              <ChatMessage 
                className={ index === props.messages.length - 1 && `mb-4` }
                message={ message }
                key={ index }
                user={ props.user }
              />
            );
          })
        }
      </ul>
    </Container>
  );
}

export default ChatMessages;