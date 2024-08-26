import React, { useRef, useState } from 'react';
import { cx } from '../../../hooks/helper';
import { IoSend } from "react-icons/io5";
import { TbBold, TbItalic, TbUnderline } from "react-icons/tb";
import { PiImageLight } from "react-icons/pi";
import MessagesWindow from '../partials/MessagesWindow';

const avatar = 'https://via.placeholder.com/40';

const ChatWindow = ({ activeFriend, loggedInUser }) => {

    const fileInputRef = useRef(null);
    const messagesEndRef = useRef(null);
    const contentEditableRef = useRef(null);

    const [newMessage, setNewMessage] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageName, setSelectedImageName] = useState('');
    const [selectedImageFile, setSelectedImageFile] = useState(null);

    // apply style - bold, italic, underline
    const applyStyle = (style) => document.execCommand(style);

    // Handle file upload
    const handleFileUpload = (event) => {
        const file = event.target.files[0];

        if (file) {
            setSelectedImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
                setSelectedImageName(file.name);
            };
            reader.readAsDataURL(file);
            event.target.value = null;
        }
    };

    const removeSelectedImage = () => {
        setSelectedImageFile(null);
        setSelectedImage(null);
        setSelectedImageName('');
    };

    // on press enter send message
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault(); // Prevents inserting a newline
            // handleSendMessage();
        }
    };

    return (
        <div className="w-8/12 border rounded-md border-gray-500 p-4 flex flex-col h-[90vh] justify-between bg-gray-800">
            {activeFriend ? (<div className='h-full flex items-center justify-center'>
                <p className='text-gray-300'>No friend selected</p>
            </div>) : (<>
                <div className="flex items-center space-x-3 pb-4 border-b border-gray-600">
                    <img src={avatar} alt={activeFriend?.name} className="w-10 h-10 rounded-full" />
                    <h2 className="text-xl text-white">{activeFriend?.name}</h2>
                </div>

                <MessagesWindow
                    activeFriend={activeFriend}
                    loggedInUser={loggedInUser}
                />

                <div>
                    <div className="border-t border-neutral-300"></div>

                    {/* Message Input Section */}
                    <div className={`flex justify-between py-3 px-2`}>
                        <div className='flex gap-3'>
                            <button type='button' className='outline-none' onClick={() => applyStyle('bold')}>
                                <TbBold className='text-[22px]' />
                            </button>
                            <button type='button' className='outline-none' onClick={() => applyStyle('italic')}>
                                <TbItalic className='text-[22px]' />
                            </button>
                            <button type='button' className='outline-none' onClick={() => applyStyle('underline')}>
                                <TbUnderline className='text-[22px]' />
                            </button>
                        </div>

                        {/* Selected Image Preview or image upload */}
                        {selectedImage ? (
                            <div className="flex items-center gap-x-4 ">
                                <span className="text-black-low-emp text-xs">{selectedImageName}</span>
                                <button
                                    type="button"
                                    onClick={removeSelectedImage}
                                    className="text-red-500 text-xs"
                                >
                                    &times;
                                </button>
                            </div>
                        ) : (
                            <label htmlFor="file-upload" className='cursor-pointer'>
                                <input
                                    id="file-upload"
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleFileUpload}
                                />
                                <PiImageLight className='text-[22px] font-medium' />
                            </label>
                        )}
                    </div>

                    {/* Message Input Area */}
                    <div className={`relative`} >
                        <div
                            contentEditable
                            ref={contentEditableRef}
                            onKeyDown={handleKeyDown}
                            onInput={() => setNewMessage(contentEditableRef.current.innerHTML)}
                            placeholder="Start writing.."
                            className=" bg-gray-700 text-white border border-gray-600 outline-none rounded-md w-full sm:min-h-[8em] sm:max-h-[8em] min-h-[5em] max-h-[5em] overflow-y-auto p-3 leading-normal text-start"
                        ></div>

                        <button
                            className='absolute right-4 bottom-6 text-sky-300 hover:text-white trans text-[22px]'
                        >
                            <IoSend />
                        </button>
                    </div>
                </div>
            </>)}
        </div>
    );
};

export default ChatWindow;
