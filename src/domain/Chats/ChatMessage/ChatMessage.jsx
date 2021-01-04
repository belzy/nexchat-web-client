import React from 'react';
import { 
  IconButton, Avatar ,
} from '../../../components/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

const ChatMessage = props => {

  const isOwnMessage = props.message.userId === props.user.id;

  return (
    <li 
      className={ 
        `ChatMessage mt-4 d-flex ${ isOwnMessage ? 'ml-auto justify-content-end' : 'mr-auto' } ${ props.className && props.className }` 
      }
    >
      <div className={ `d-flex align-items-center ${ !isOwnMessage ? 'flex-row' : 'flex-row-reverse' }` }>
        <Avatar size='sm' className={ `align-self-end ${ isOwnMessage ? 'ml-2' : 'mr-2' }` } />

        <div className={ `p-3 rounded-top ${ isOwnMessage ? 'bg-primary rounded-left' : 'bg-secondary rounded-right' }` }>
          { !isOwnMessage && <h6 className='h6 font-weight-bold mb-1'>{ props.message.name }</h6> }
          <p className={ `m-0 ${ isOwnMessage && 'text-white' }` }>{ props.message.text }</p>
          <small className={ `${ isOwnMessage ? 'text-secondary' : 'text-muted' } mb-0 mt-1` }>{ props.message.timestamp }</small>
        </div>

        <IconButton 
          renderIcon={ <FontAwesomeIcon icon={ faEllipsisV } /> } 
        />

      </div>
    </li>
  );
};

export default ChatMessage;