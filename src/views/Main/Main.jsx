import data from '../../data.json';
import React, { useState, useEffect } from 'react';
import { 
  ChatPage, Navbar, ChatSidebar, CreateGroupSidebar, 
  FindGroupsSidebar, FriendsSidebar, ProfileSidebar,
} from '../../domain/domain';
import { Avatar } from '../../components/components';
import { io } from 'socket.io-client';
import * as constants from '../../constants';
import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';

const socket = io(constants.CHAT_SERVICE_URL);
const id = uuidv4();
const name = faker.name.findName();

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

  console.log(constants.CHAT_SERVICE_URL);

  // UI State
  const [activeSidebar, setActiveSidebar] = useState('chats');
  const [activePage, setActivePage] = useState(null);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', e => {
      setInnerWidth(window.innerWidth);
    });
  }, []);

  // Data state
  const [user, setUser] = useState({ id, name });
  const [chats, setChats] = useState([ ...data.chats ]); // Refactor to use context API
  const [activeChat, setActiveChat] = useState(null); // Chat ID 

  useEffect(() => {

    // Refactor socket.io for modularity
    socket.on('message', msg => {

      const newChats = [ ...chats ];
      newChats.forEach(chat => {
        if (chat.chatId === msg.chatId) {
          chat.messages.push({ userId: msg.user.id, name: msg.user.name, text: msg.text, timestamp: '12:00am' });
        }
      });

      setChats(newChats);
    });

  }, []);


  const handleMessageSubmit = (e, msg) => {
    e.preventDefault();

    const text = msg.value;
    const userId = msg.user.id;
    const chatId = msg.chat.chatId;

    socket.emit('message', { text, user, chatId })
  }

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
          activeChat={ activeChat }
          setActiveChat={ setActiveChat }
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
            chat={ chats.filter(chat => chat.chatId === activeChat)[0] }
            user={ user }
            handleMessageSubmit={ handleMessageSubmit }
          /> 
        ) }

    </div>
  );
};

export default Main;