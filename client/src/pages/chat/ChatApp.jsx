// ChatApp.jsx
import React, { useState } from 'react';
import ChatSidebar from './components/ChatSidebar';
import ChatWindow from './components/ChatWindow';
import { users } from '../../utils/data';

const ChatApp = () => {

    const [isChatsTab, setIsChatsTab] = useState(true);
    const [currentFriends, setCurrentFriends] = useState(users);
    const [activeFriend, setActiveFriend] = useState(null);
    const [loggedInUser, setLoggedInUser] = useState({ _id: "1", name: "Alice Johnson" });

    console.log(activeFriend, 'friend');

    return (
        <center className="h-screen bg-gray-800 flex items-center justify-center">

            <div className="w-8/12 h-[90vh] text-white border border-gray-500 rounded-md flex">

                <ChatSidebar
                    isChatsTab={isChatsTab}
                    setIsChatsTab={setIsChatsTab}
                    users={currentFriends}
                    setActiveFriend={setActiveFriend}
                />

                <ChatWindow
                    activeFriend={activeFriend}
                    loggedInUser={loggedInUser}
                />
            </div>

        </center>
    );
};

export default ChatApp;
{/* <ChatRoomList
                rooms={rooms}
                joinRoom={joinRoom}
            />
            {currentRoom && (
                <div className="flex flex-1">
                    <UserList users={users} />
                    <div className="flex flex-col flex-1">
                        <ChatWindow messages={messages} />
                        <MessageInput sendMessage={sendMessage} />
                    </div>
                </div>
            )} */}