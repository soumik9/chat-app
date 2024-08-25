import React, { useState } from 'react';
import { cx } from '../../../hooks/helper';
import { IoSend } from "react-icons/io5";

const messagesData = [
    { id: 1, sender: 'Alice', text: 'Hi Bob!', time: '10:30 AM', fromUser: true },
    { id: 2, sender: 'Bob', text: 'Hello Alice!', time: '10:32 AM', fromUser: false },
    { id: 3, sender: 'Alice', text: 'How are you?', time: '10:33 AM', fromUser: true },
    { id: 4, sender: 'Bob', text: 'I am good, thanks! How about you?', time: '10:34 AM', fromUser: false },
];

const selectedUser = {
    name: 'Bob Smith',
    avatar: 'https://via.placeholder.com/40', // Placeholder image, replace with actual avatar URL
};

const ChatWindow = () => {
    const [messages] = useState(messagesData);

    return (
        <div className="w-8/12 border rounded-md border-gray-500 p-4 flex flex-col h-[90vh] justify-between bg-gray-800">
            {/* Selected User Info */}
            <div className="flex items-center space-x-3 pb-4 border-b border-gray-600">
                <img src={selectedUser.avatar} alt={selectedUser.name} className="w-10 h-10 rounded-full" />
                <h2 className="text-xl text-white">{selectedUser.name}</h2>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto flex flex-col-reverse space-y-3 space-y-reverse">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={cx(
                            'flex items-end gap-1.5', message.fromUser ? 'justify-end' : 'justify-start'
                        )}
                    >
                        {!message.fromUser && <img src="/avatar.jpg" alt="" className='w-8 h-8' />}
                        <div className='flex flex-col gap-[2px]'>
                            <div
                                className={cx(
                                    'p-3 rounded-lg text-white max-w-xs flex items-start flex-col',
                                    message.fromUser ? 'bg-gray-500' : 'bg-sky-500 bg-opacity-90'
                                )}
                            >
                                <p className="text-sm">{message.text}</p>
                            </div>
                            <span className={cx("text-[10px] text-gray-300 mr-[2px]", message.fromUser ? 'text-left' : 'text-right')}>{message.time}</span>
                        </div>
                        {message.fromUser && <img src="/avatar.jpg" alt="" className='w-8 h-8' />}
                    </div>
                ))}
            </div>

            {/* Message Input */}
            <div className="relative mt-4">
                <textarea
                    type="text"
                    placeholder="Type your message..."
                    rows={5}
                    className="w-full p-2 bg-gray-700 text-white rounded-md outline-none border border-gray-600 resize-none"
                />
                <button
                    className='absolute right-4 bottom-6 text-sky-300 hover:text-white trans text-[22px]'
                >
                    <IoSend />
                </button>
            </div>
        </div>
    );
};

export default ChatWindow;
