import React from 'react';
import {
  IconButton
} from '../../../components/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCommentAlt, faCog, faPlusSquare, faUser, 
  faLayerGroup, faUserFriends
} from '@fortawesome/free-solid-svg-icons';
import {
} from '@fortawesome/free-regular-svg-icons';


const Navbar = props => {
  return (
    <nav className='Navbar px-2 px-md-5 py-xl-3 py-2 px-xl-3 d-flex flex-xl-column align-items-center justify-content-between justify-content-xl-start'>

      <IconButton
        className='mb-xl-4'
        title='Create Group'
        type='primary'
        active={ props.activeSidebar === 'createGroup' }
        onClick={ e => props.setActiveSidebar(props.activeSidebar === 'createGroup' ? null : 'createGroup') }
        renderIcon={ <FontAwesomeIcon icon={ faPlusSquare } /> }
      />

      <IconButton
        className='mb-xl-4'
        title='Friends List'
        type='primary'
        active={ props.activeSidebar === 'friendsList' }
        onClick={ e => props.setActiveSidebar(props.activeSidebar === 'friendsList' ? null : 'friendsList') }
        renderIcon={ <FontAwesomeIcon icon={ faUserFriends } /> }
      />

      <IconButton
        className='mb-xl-4'
        title='View Chats'
        type='primary'
        active={ props.activeSidebar === 'chats' }
        onClick={ e => props.setActiveSidebar(props.activeSidebar === 'chats' ? null : 'chats') }
        renderIcon={ <FontAwesomeIcon icon={ faCommentAlt } /> }
      />

      <IconButton
        className='mb-xl-4'
        title='My Profile'
        type='primary'
        active={ props.activeSidebar === 'profile' }
        onClick={ e => props.setActiveSidebar(props.activeSidebar === 'profile' ? null : 'profile') }
        renderIcon={ <FontAwesomeIcon icon={ faUser } /> }
      />

      <IconButton
        className='mb-xl-4'
        title='Find Groups'
        type='primary'
        active={ props.activeSidebar === 'findGroups' }
        onClick={ e => props.setActiveSidebar(props.activeSidebar === 'findGroups' ? null : 'findGroups') }
        renderIcon={ <FontAwesomeIcon icon={ faLayerGroup } /> }
      />

      <IconButton
        className='mt-auto'
        title='Settings'
        type='primary'
        renderIcon={ <FontAwesomeIcon icon={ faCog } /> }
      />

    </nav>
  );
}

export default Navbar;