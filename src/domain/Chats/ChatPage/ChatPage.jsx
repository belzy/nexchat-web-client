import React, { useState, useEffect } from 'react';
import {
  ChatHeader, ChatMenu,
} from '../../domain';
import {
  Page,
} from '../../../components/components';

const ChatPage = props => {
  const [showPage, setShowPage] = useState(true);
  const [showMenu, setShowMenu] = useState(true);

  return (
    <Page visible={ showPage }>
      <div className='d-flex w-100 h-100'>
        <div className='flex-grow-1 h-100'>
          <ChatHeader
            heading='Heading'
            subHeading='Sub Heading'
            showPage={ showPage }
            setShowPage={ setShowPage }
            showMenu={ showMenu }
            setShowMenu={ setShowMenu }
          />

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