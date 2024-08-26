import React from 'react';
import { IoMdCheckmarkCircle, IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { cx } from '../../../hooks/helper';

const UserList = ({ users, setActiveFriend }) => {
    return (
        <>
            {users.length === 0 ? (
                <p className='text-gray-300'>No friends available</p>
            ) : (
                <ul className="space-y-3">
                    {users.map((user) => {
                        const lastMessage = user.messages[user.messages.length - 1];
                        return (
                            <li
                                key={user._id}
                                className={cx(
                                    'flex flex-col p-3 rounded-md gap-1.5 cursor-pointer',
                                    user.status === 'active' ? 'bg-gray-700' : 'bg-gray-600'
                                )}
                                role='button'
                                onClick={() => setActiveFriend(user)}
                            >
                                <div className='flex items-center justify-between w-full'>
                                    <div className='flex gap-2.5 items-center'>
                                        <span
                                            className={cx(
                                                'flex items-center justify-center w-3 h-3 rounded-full',
                                                user.status === 'active' ? 'bg-green-500' : 'bg-gray-300'
                                            )}
                                        ></span>
                                        <h6 className="text-white font-medium">{user.name}</h6>
                                    </div>
                                    <span className='text-xs'>2 hours ago</span>
                                </div>

                                <div className='flex items-center justify-between w-full'>
                                    <p className={cx(
                                        "text-xs",
                                        lastMessage.isSeen ? 'text-sky-400 font-medium' : 'text-gray-300'
                                    )}>
                                        {lastMessage.text}
                                    </p>

                                    {lastMessage.isDelivered ? (
                                        <IoMdCheckmarkCircle className="text-gray-300" />
                                    ) : (
                                        <IoMdCheckmarkCircleOutline className="text-gray-300" />
                                    )}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
        </>
    );
};

export default UserList;