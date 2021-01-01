import React, { useState, useEffect } from 'react';
import {
  ChatHeader, ChatMenu, ChatFooter,
} from '../../domain';
import {
  Page,
} from '../../../components/components';

const ChatPage = props => {

  // UI State
  const [showPage, setShowPage] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Page visible={ props.activePage === 'chat' }>
      <div className='d-flex w-100 h-100'>
        <div className='flex-grow-1 h-100 d-flex flex-column justify-content-between'>
          <ChatHeader
            heading='Heading'
            subHeading='Sub Heading'
            showPage={ props.activePage }
            setShowPage={ showPage => props.setActivePage(showPage ? 'chat' : null) }
            showMenu={ showMenu }
            setShowMenu={ setShowMenu }
          />

          <ChatFooter />
        </div>
      
        <ChatMenu
          visible={ showMenu }
          setShowMenu={ setShowMenu }
        >
        </ChatMenu>
      </div>
    </Page>
  );
};

export default ChatPage;