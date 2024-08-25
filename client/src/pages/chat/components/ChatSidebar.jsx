import React from 'react';
import { cx } from '../../../hooks/helper';
import UserList from '../partials/UserList';

const ChatSidebar = ({ isChatsTab, setIsChatsTab }) => {
    return (
        <div className='w-4/12 flex flex-col gap-y-4 p-4'>
            <h5>Chat App</h5>

            <div className='flex'>
                <button
                    className={cx(
                        'w-1/2 py-2.5 rounded-l-md trans',
                        isChatsTab ? 'bg-sky-500' : 'bg-gray-500 text-gray-300'
                    )}
                    onClick={() => setIsChatsTab(true)}
                >
                    Chats
                </button>
                <button
                    className={cx(
                        'w-1/2 py-2.5 rounded-r-md trans',
                        !isChatsTab ? 'bg-sky-500 text-white' : 'bg-gray-500 text-gray-300'
                    )}
                    onClick={() => setIsChatsTab(false)}
                >
                    Rooms
                </button>
            </div>

            {isChatsTab && <UserList />}
            {!isChatsTab && <p className='text-gray-300'>No Rooms available</p>}
        </div>
    );
};

export default ChatSidebar;