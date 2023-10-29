import './App.css';
import Sidebar from './MyComponents/Sidebar';
import Header from './MyComponents/Header';
import Dash from './MyComponents/Dash';
import ChannelBar from './MyComponents/Channels';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import userImg from "./Images/user.jpg"

function App() {
  // let initChannels;
  // if (localStorage.getItem("todos") === null) {
  //   initChannels = [];
  // } else {
  //   initChannels = JSON.parse(localStorage.getItem("todos"));
  // }

  // let initChat;
  // if (localStorage.getItem("Uchats") === null) {
  //   initChat = [];
  // } else {
  //   initChat = JSON.parse(localStorage.getItem("Uchats"));
  // }


  // text channels 
  const [Tchannels, setTchannels] = useState([
    {
      cno: 1,
      Name: "Channel-1"
    },
    {
      cno: 2,
      Name: "Channel-2"
    },
    {
      cno: 3,
      Name: "Channel-3"
    },
    {
      cno: 4,
      Name: "Channel-4"
    },
  ]);
  // useEffect(() => {
  //   localStorage.setItem("Channels", JSON.stringify(Channels));
  // }, [Channels]);

  // voice channels 
  const [Vchannels, setVchannels] = useState([
    {
      cno: 1,
      Name: "Channel-1"
    },
    {
      cno: 2,
      Name: "Channel-2"
    },
    {
      cno: 3,
      Name: "Channel-3"
    },
    {
      cno: 4,
      Name: "Channel-4"
    },
  ]);
  // useEffect(() => {
  //   localStorage.setItem("Channels", JSON.stringify(Channels));
  // }, [Channels]);

  // voice channels 
  const [Uchats, setUchats] = useState([
    {
      cno: 1,
      Chat: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio impedit molestiae magni similique fugiat vero quo animi consectetur quam labore error esse voluptates, repudiandae quidem! Similique, nobis neque? Id, tenetur."
    },
    {
      cno: 2,
      Chat: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio impedit molestiae magni similique fugiat vero quo animi consectetur quam labore error esse voluptates, repudiandae quidem! Similique, nobis neque? Id, tenetur."
    },
    {
      cno: 3,
      Chat: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio impedit molestiae magni similique fugiat vero quo animi consectetur quam labore error esse voluptates, repudiandae quidem! Similique, nobis neque? Id, tenetur."
    },
    {
      cno: 4,
      Chat: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio impedit molestiae magni similique fugiat vero quo animi consectetur quam labore error esse voluptates, repudiandae quidem! Similique, nobis neque? Id, tenetur."
    },
    {
      cno: 5,
      Chat: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio impedit molestiae magni similique fugiat vero quo animi consectetur quam labore error esse voluptates, repudiandae quidem! Similique, nobis neque? Id, tenetur."
    },
    {
      cno: 6,
      Chat: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio impedit molestiae magni similique fugiat vero quo animi consectetur quam labore error esse voluptates, repudiandae quidem! Similique, nobis neque? Id, tenetur."
    },
    {
      cno: 7,
      Chat: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio impedit molestiae magni similique fugiat vero quo animi consectetur quam labore error esse voluptates, repudiandae quidem! Similique, nobis neque? Id, tenetur."
    }, {
      cno: 8,
      Chat: "Latest Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio impedit molestiae magni similique fugiat vero quo animi consectetur quam labore error esse voluptates, repudiandae quidem! Similique, nobis neque? Id, tenetur."
    },
  ]);


  // const [Uchats, setUchats] = useState(initChat);
  // useEffect(() => {
  //   localStorage.setItem("Uchats", JSON.stringify(Uchats));
  // }, [Uchats]);


  // useEffect(() => {
  //   localStorage.setItem("Channels", JSON.stringify(Channels));
  // }, [Channels]);

  const Tdate = new Date().toLocaleString().slice(0, 10);
  const Ttime = new Date().toLocaleString().slice(11, 16);
  const AmPm = new Date().toLocaleString().slice(20, 22);
  const currentDateTime = Tdate + Ttime + AmPm;
  // console.log(currentDateTime)

  const addChat = (Chat) => {
    // console.log(Chat);
    var cno;
    if (Uchats.length === 0) {
      cno = 1;
    } else {
      cno = Uchats.length + 1;
    }
    const myChat = {
      cno: cno,
      Chat: Chat,
    };
    setUchats([...Chat, myChat]);
  };


  return (
    <div className="App">
      {/* header */}
      <Header ChannelName="ChannelName" />

      <div className="flex ">
        {/* sidebar  */}
        <Sidebar Tchannels={Tchannels} Vchannels={Vchannels}
          userName="KaRaNn" userStatue="Online" userImage={userImg} />

        {/* Channels  */}
        {/* <ChannelBar GroupName="GroupName" Tchannels={Tchannels} Vchannels={Vchannels}  /> */}

        {/* Dash  */}
        <Dash userName="KaRaNn" userStatue="Online" userImage={userImg} addChat={addChat}
          Uchats={Uchats} currentDateTime={currentDateTime} />
      </div>
    </div>
  );
}

export default App;
