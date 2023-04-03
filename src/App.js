import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Friends from './pages/friends';
import Home from './pages/home';
import Rooms from './pages/room';
import Chats from './pages/chats';
import Karina from './pages/karina'

import './css/App.css'

import { getMessages, postMessage } from './hooks/chatMessagesAPIs';



function App() {
  const [response, setResponse] = useState([]);
  const [rooms, setRooms] = useState([]);
  //const [friends, setFriends] = useState([]);

  let [btnActive, setBtnActive] = useState("");
  //룸리스트 만들기
  function creatRoomList() { 
    const roomNames = response.map(res => res.roomname)
    const filteredRoomNames = roomNames.filter((room, index) => {
      return roomNames.indexOf(room) === index;
    })
    return filteredRoomNames;
  }

// 서버 연결 불가능시
  useEffect(() => { 
    setResponse([
      {
        id: 1,
        username: 'han',
        roomname: 'room1',
        text: 'text1'
      }, {
        id: 2,
        username: 'han',
        roomname: 'room2',
        text: 'text2'
      }, {
        id: 3,
        username: 'karina',
        roomname: 'room2',
        text: 'text3'
      }, {
        id: 4,
        username: 'karina',
        roomname: 'room2',
        text: 'text4'
      }
      
  ])
  
  }, [])
//서버 연결 가능 시
// useEffect(() => { 
  //     setInterval(async () => {
    //       await getMessages()
    //         .then((resData) => { 
      //           setResponse(resData)
      
      //         })
      
      //     }, 1000);
      //   }, [])
      
      
        useEffect(() => { 
          setRooms(creatRoomList)
        }, [response])
  
  const toggleActive = (e) => {
    console.log(e)
    setBtnActive((prev) => {
      return e
    });
  };

  
  return (
    <div className='App'>
      <header className="App-header">
      <BrowserRouter>
        <ul className='nav'>
          <li className={"btn" + ('home' === btnActive ? "active" : "")} value={'home'} ><Link to="/" onClick={() => toggleActive('home')}>HOME</Link> </li>
          <li className={"btn" + ('rooms' === btnActive ? "active" : "")} value={'rooms'} ><Link to="/rooms" onClick={() => toggleActive('rooms')}>Rooms</Link> </li>
          <li className={"btn" + ('friends' === btnActive ? "active" : "")} value={'friends'}><Link to="/friends" onClick={() => toggleActive('friends')}>Friends</Link></li>
          <li className={"btn" + ('Karina' === btnActive ? "active" : "")} value={'Karina'} ><Link to="/Karina" onClick={() => toggleActive('Karina')}>Karina</Link></li>
        </ul>

        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path="rooms" element={<Rooms rooms={rooms} />} />
          <Route path="friends" element={<Friends />} />
          <Route path="karina" element={<Karina />} />
          {rooms.map((room) => { 
            return <Route key={room} path={`rooms/${room}`} element={<Chats room={room} response={response} />} />
          })}
          
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
