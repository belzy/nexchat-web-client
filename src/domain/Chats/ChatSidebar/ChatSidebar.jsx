import React from 'react';
import { Card, CardBody, List } from 'reactstrap';
import {
  Avatar,
  Sidebar,
} from '../../../components/components';

const ChatCardItem = props => {

  const { chatId, name, image, isGroup, messages } = props.chatData;
  const newestMessage = messages[messages.length - 1];

  return (
    <li 
      className='mt-3 mb-3' 
      style={{ cursor: 'pointer' }}
      onClick={ props.onClick }
    >
      <Card>
        <CardBody className='d-flex align-items-center'>
          <Avatar className='mr-3' size='md' src={ image } />

          <div className='flex-grow-1'>
            <div className='d-flex justify-content-between w-100 align-items-center'>
              <h5 className='text-truncate h6 mb-0 font-weight-bold'>{ name }</h5>
              <p className='text-muted mb-0 text-nowrap ml-3'>{ newestMessage.timestamp }</p>
            </div>

            <p className='text-truncate mb-0'>{ newestMessage.text }</p>
          </div>

        </CardBody>
      </Card>
    </li>
  );
};

const ChatCardList = props => {
  return (
    <List type='unstyled'>
      {
        props.chats.map((chat, index) => (
          <ChatCardItem 
            key={ index } 
            chatData={ chat } 
            onClick={ e => props.setActivePage(props.activePage !== 'chat' ? 'chat' : props.activePage) }
          />
        ))
      }      
    </List>
  );
};

const ChatSidebar = props => {
  return (
    <Sidebar>
      <h3 className='h3 font-weight-bold m-0'>
        Chats
      </h3>

      <ChatCardList 
        chats={ props.chats } 
        activePage={ props.activePage }
        setActivePage={ props.setActivePage }
      />
      
    </Sidebar>
  );
};

export default ChatSidebar;