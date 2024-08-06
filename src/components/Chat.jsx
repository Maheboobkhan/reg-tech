// import React, { Component } from 'react';
// import dayjs from 'dayjs'; // Install dayjs using npm

// class ChatComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isModalOpen: false,
//             message: '',
//             messages: JSON.parse(localStorage.getItem('chatMessages')) || [
//                 { id: 1, text: 'Hello, how can I help you today?', sender: 'other', timestamp: dayjs().format('YYYY-MM-DD HH:mm') },
//                 { id: 2, text: 'I have a question about your services.', sender: 'me', timestamp: dayjs().subtract(1, 'minute').format('YYYY-MM-DD HH:mm') },
//                 { id: 3, text: 'Sure! What would you like to know?', sender: 'other', timestamp: dayjs().subtract(2, 'minute').format('YYYY-MM-DD HH:mm') }
//             ]

//         };
//         // this.audio = new Audio('audio.mp3'); // Load audio file
//     }

//     toggleModal = () => {
//         this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
//     }

//     handleInputChange = (e) => {
//         this.setState({ message: e.target.value });
//     }

//     handleSendMessage = () => {
//         if (this.state.message.trim()) {
//             const newMessage = {
//                 id: Date.now(),
//                 text: this.state.message,
//                 sender: 'me',
//                 timestamp: dayjs().format('YYYY-MM-DD HH:mm')
//             };
//             const updatedMessages = [...this.state.messages, newMessage];
//             this.setState({
//                 messages: updatedMessages,
//                 message: ''
//             });
//             localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));

//             if (newMessage.sender === 'me') {
//                 this.audio.play();
//             }
//         }
//     }

//     render() {
//         const { isModalOpen, message, messages } = this.state;

//         return (
//             <div className="relative z-[1500]">
//                 {/* Chat Icon */}
//                 <div
//                     className="fixed bottom-4 right-4 p-3 bg-pink-500 text-black rounded-full cursor-pointer shadow-lg transition-transform duration-300 hover:scale-110"
//                     onClick={this.toggleModal}
//                 >
//                     {isModalOpen ? (
//                         <svg
//                             width="24"
//                             height="24"
//                             fill="none"
//                             stroke="black"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             className="feather feather-x"
//                             viewBox="0 0 24 24"
//                         >
//                             <path d="M18 6L6 18M6 6l12 12"></path>
//                         </svg>
//                     ) : (
//                         <svg
//                             width="24"
//                             height="24"
//                             fill="none"
//                             stroke="black"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             className="feather feather-message-circle"
//                             viewBox="0 0 24 24"
//                         >
//                             <path d="M21 12.25v4.5a1.75 1.75 0 0 1-1.75 1.75H5.75A1.75 1.75 0 0 1 4 16.75v-4.5m17-4.25a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z"></path>
//                         </svg>
//                     )}
//                 </div>

//                 {/* Chat Modal */}
//                 {isModalOpen && (
//                     <div className="fixed bottom-20 right-4 md:w-80 w-[90vw] max-w-sm bg-white shadow-lg rounded-lg z-50">
//                         <h2 className="text-xl font-semibold text-black mb-4 p-4 border-b">Chat with Us</h2>
//                         <div className="p-4 h-64 overflow-y-auto border-b border-gray-200">
//                             {messages.map(message => (
//                                 <div
//                                     key={message.id}
//                                     className={`mb-2 p-2 rounded-lg ${message.sender === 'me' ? 'bg-pink-500 text-white self-end ml-auto w-3/4' : 'bg-gray-200 w-3/4 mr-auto text-black'}`}
//                                 >
//                                     <div className="flex flex-col">
//                                         <div>{message.text}</div>
//                                         <div className="text-xs text-gray-600 text-right">{message.timestamp}</div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                         <div className="p-4 flex items-center border-t border-gray-200">
//                             <input
//                                 type="text"
//                                 value={message}
//                                 onChange={this.handleInputChange}
//                                 placeholder="Type a message..."
//                                 className="flex-grow h-12 p-2 border border-gray-300 rounded-lg mx-2"
//                             />
//                             <button
//                                 onClick={this.handleSendMessage}
//                                 className="p-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
//                             >
//                                 Send
//                             </button>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         );
//     }
// }

// export default ChatComponent;


















import React, { Component } from 'react';
import dayjs from 'dayjs';
import Echo from 'laravel-echo';
import io from 'socket.io-client';
import Pusher from 'pusher-js';

Window.Pusher = Pusher;
window.io = io; // Make sure to expose the `io` object to the global scope

class ChatComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            message: '',
            messages: JSON.parse(localStorage.getItem('chatMessages')) || []
        };

        // Initialize Laravel Echo
        this.echo = new Echo({
            broadcaster: 'pusher',
            key: 'ac03cf0c4e0f52685591', // Match this with your Laravel config
            cluster: 'mt1', // Match this with your Laravel config
            encrypted: true
        });

        this.echo.channel('chat')
            .listen('MessageSent', (event) => {
                this.addMessage(event.message);
            });
    }

    addMessage = (message) => {
        const updatedMessages = [...this.state.messages, message];
        this.setState({
            messages: updatedMessages
        });
        localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
    }

    toggleModal = () => {
        this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
    }

    handleInputChange = (e) => {
        this.setState({ message: e.target.value });
    }

    handleSendMessage = () => {
        if (this.state.message.trim()) {
            const newMessage = {
                id: Date.now(),
                text: this.state.message,
                sender: 'me',
                timestamp: dayjs().format('YYYY-MM-DD HH:mm')
            };

            fetch('http://localhost:8000/send-message', { // Match this with your Laravel URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                },
                body: JSON.stringify({ message: newMessage })
            });

            this.setState({ message: '' });
        }
    }

    render() {
        const { isModalOpen, message, messages } = this.state;

        return (
            <div className="relative z-[1500]">
                {/* Chat Icon */}
                <div
                    className="fixed bottom-4 right-4 p-3 bg-pink-500 text-black rounded-full cursor-pointer shadow-lg transition-transform duration-300 hover:scale-110"
                    onClick={this.toggleModal}
                >
                    {isModalOpen ? (
                        <svg
                            width="24"
                            height="24"
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-x"
                            viewBox="0 0 24 24"
                        >
                            <path d="M18 6L6 18M6 6l12 12"></path>
                        </svg>
                    ) : (
                        <svg
                            width="24"
                            height="24"
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-message-circle"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21 12.25v4.5a1.75 1.75 0 0 1-1.75 1.75H5.75A1.75 1.75 0 0 1 4 16.75v-4.5m17-4.25a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z"></path>
                        </svg>
                    )}
                </div>

                {/* Chat Modal */}
                {isModalOpen && (
                    <div className="fixed bottom-20 right-4 md:w-80 w-[90vw] max-w-sm bg-white shadow-lg rounded-lg z-50">
                        <h2 className="text-xl font-semibold text-black mb-4 p-4 border-b">Chat with Us</h2>
                        <div className="p-4 h-64 overflow-y-auto border-b border-gray-200">
                            {messages.map(message => (
                                <div
                                    key={message.id}
                                    className={`mb-2 p-2 rounded-lg ${message.sender === 'me' ? 'bg-pink-500 text-white self-end ml-auto w-3/4' : 'bg-gray-200 w-3/4 mr-auto text-black'}`}
                                >
                                    <div className="flex flex-col">
                                        <div>{message.text}</div>
                                        <div className="text-xs text-gray-600 text-right">{message.timestamp}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 flex items-center border-t border-gray-200">
                            <input
                                type="text"
                                value={message}
                                onChange={this.handleInputChange}
                                placeholder="Type a message..."
                                className="flex-grow h-12 p-2 border border-gray-300 rounded-lg mx-2"
                            />
                            <button
                                onClick={this.handleSendMessage}
                                className="p-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default ChatComponent;
