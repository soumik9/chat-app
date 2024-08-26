import React from 'react';
import { cx } from '../../../hooks/helper';

const MessagesWindow = ({ activeFriend, loggedInUser }) => {
    return (
        <div className="flex-1 overflow-y-auto flex flex-col justify-end">
            <div className="space-y-3">
                {activeFriend?.messages.map((message) => (
                    <div
                        key={message._id}
                        className={cx(
                            'flex items-end gap-1.5',
                            message.from === loggedInUser._id ? 'justify-end' : 'justify-start'
                        )}
                    >
                        {message.from !== loggedInUser._id && <img src="/avatar.jpg" alt="" className='w-8 h-8' />}
                        <div className='flex flex-col gap-[2px]'>
                            <div
                                className={cx(
                                    'p-3 rounded-lg text-white max-w-xs flex items-start flex-col',
                                    message.from === loggedInUser._id ? 'bg-gray-500' : 'bg-sky-500 bg-opacity-90'
                                )}
                            >
                                <p className="text-sm">{message.text}</p>
                            </div>
                            <span className={cx(
                                "text-[10px] text-gray-300 mr-[2px]",
                                message.from === loggedInUser._id ? 'text-left' : 'text-right')}
                            >
                                {message.time}
                            </span>
                        </div>
                        {message.from === loggedInUser._id && <img src="/avatar.jpg" alt="" className='w-8 h-8' />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MessagesWindow;