// ChatApp.jsx
import React, { useState } from 'react';
import ChatSidebar from './components/ChatSidebar';
import ChatWindow from './components/ChatWindow';

const ChatApp = () => {

    const [isChatsTab, setIsChatsTab] = useState(true);

    return (
        <center className="h-screen bg-gray-800 flex items-center justify-center">

            <div className="w-8/12 h-[90vh] text-white border border-gray-500 rounded-md flex">

                <ChatSidebar
                    isChatsTab={isChatsTab}
                    setIsChatsTab={setIsChatsTab}
                />

                <ChatWindow />
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