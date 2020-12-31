import React, { useState, useEffect } from 'react';
import { 
  ChatPage, Navbar, ChatSidebar, CreateGroupSidebar, 
  FindGroupsSidebar, FriendsSidebar, ProfileSidebar,
} from '../../domain/domain';

const Main = props => {
  const [activeSidebar, setActiveSidebar] = useState(null);

  const [pageContent, setPageContent] = useState({}); // Default null
  
  return (
    <div className='Main vw-100 vh-100 d-flex flex-column-reverse flex-xl-row overflow-hidden'>

      <Navbar
        activeSidebar={ activeSidebar }
        setActiveSidebar={ setActiveSidebar }
      />

      { activeSidebar === 'createGroup' && <CreateGroupSidebar /> }
      { activeSidebar === 'friendsList' && <FriendsSidebar /> }
      { activeSidebar === 'chats'       && <ChatSidebar /> }
      { activeSidebar === 'profile'     && <ProfileSidebar /> }
      { activeSidebar === 'findGroups'  && <FindGroupsSidebar /> }

      {/* If no page is selected, render the welcome message */}

      <ChatPage /> 

    </div>
  );
};

export default Main;