import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://yungooso-nextjs.vercel.app/api/messages';

function App() {
  const [messages, setMessages] = useState([]);
  const [friends, setFriends] = useState([]);
  useEffect(() => { 
    setInterval(() => {
      axios.get(API_URL)
        .then((res) => {
          setMessages(res.data);
          return res.data;
        })
        .then((resData) => { 
        })
    }, 1000);
  }, [])
  
  return (
    <div>
      {messages.map((message) => { 
        return (
          <div key={message.id}>{message.username} : { message.text}</div>
        )
      })}
    </div>
  );
}

export default App;
