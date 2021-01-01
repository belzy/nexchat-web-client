import data from '../../data.json';
import React, { useState, useEffect } from 'react';
import { 
  ChatPage, Navbar, ChatSidebar, CreateGroupSidebar, 
  FindGroupsSidebar, FriendsSidebar, ProfileSidebar,
} from '../../domain/domain';
import { Avatar } from '../../components/components';

const MainGreeting = props => {
  return (
    <div className='w-100 h-100 d-flex align-items-center justify-content-center'>
      <div className='d-flex flex-column align-items-center'>
        <Avatar size='lg' className='mb-3' />
        <h5 className='h6 font-weight-bold'>Welcome to neXchat!</h5>
        <h5 className='h6 text-muted'>Please select a chat to start messaging</h5>
      </div>
    </div>
  );
};

const Main = props => {

  // UI State
  const [activeSidebar, setActiveSidebar] = useState('chats');
  const [activePage, setActivePage] = useState(null);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', e => {
      setInnerWidth(window.innerWidth);
    });
  }, [])

  // Data state
  const [pageContent, setPageContent] = useState({}); // Default null
  const [chats, setChats] = useState([ ...data.chats ]); // Refactor to use context API
  
  return (
    <div className='Main vw-100 vh-100 d-flex flex-column-reverse flex-xl-row overflow-hidden'>

      <Navbar
        activeSidebar={ activeSidebar }
        setActiveSidebar={ setActiveSidebar }
      />

      { activeSidebar === 'createGroup' && <CreateGroupSidebar /> }
      { activeSidebar === 'friendsList' && <FriendsSidebar />     }

      { activeSidebar === 'chats' && 
        <ChatSidebar 
          chats={ chats } 
          activePage={ activePage } 
          setActivePage={ setActivePage } 
        /> }

      { activeSidebar === 'profile'     && <ProfileSidebar />     }
      { activeSidebar === 'findGroups'  && <FindGroupsSidebar />  }

      { innerWidth < 1200 && !activeSidebar && (
        <MainGreeting />
      ) }

      { innerWidth >= 1200 && !activePage && (
        <MainGreeting />
      ) }

      { activePage === 'chat' && (
          <ChatPage
            activePage={ activePage }
            setActivePage={ setActivePage }
          /> 
        ) }

    </div>
  );
};

export default Main;