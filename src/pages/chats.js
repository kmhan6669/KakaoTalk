import { useEffect, useState } from "react";

import { postMessage } from '../hooks/chatMessagesAPIs'

function Chats({ room, response }) {
    console.log(response)
    const [chats, setChats] = useState(chatList(room));
    const [inputChat, setInputChat] = useState('')
    function chatList(roomName) {
        const chatList = response.filter((res) => res.roomname === roomName)
        const sortChatList = chatList.sort((a, b) => new Date(a.date) - new Date(b.date))
        return sortChatList
    }

    useEffect(() => { 
        setChats(chatList(room))
    },[response])

    function handleChange(e) { 
        setInputChat(e.target.value)
        
    }
    function submitHandler(e) { 
        e.preventDefault();
        postMessage({ roomName: room, text: inputChat })
        setInputChat('');

    }
    return (
    <div>
        <div>
            {chats?.map((chat) => { 
                return (
                    <div key={chat.id}>
                        {chat.username} : {chat.text}    ({chat.date})
                    </div>
                )
            })}
        </div>
            <form onSubmit={submitHandler}>
                <input value={inputChat || ''} onChange={handleChange}/>
                <button type='submit'>{`<-`}</button>
        </form>
    </div>
    )
}

export default Chats;