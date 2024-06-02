import './App.css';
import Channels from './Components/Channels';
import Header from './Components/Header';
import SubChannels from './Components/SubChannels';
import Dashboard from './Components/Dashboard';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import userImg from "./Images/user.jpg"
import valorant from './Images/valorant.jpg'
import avengers from './Images/avengers.jpg'
import watchdogs from './Images/watchdogs.jpg'
import assassin from './Images/assasian.jpg'
import girl from './Images/girl.jpg'

function App() {
  //! CHANNELS
  const [channels, setChannels] = useState([
    {
      id: 1,
      name: "Assassin",
      path: "assassin",
      members: ["ksmistry007@gmail.com"],
      image: assassin
    },
    {
      id: 2,
      name: "Avengers",
      path: "avengers",
      members: ["ksmistry007@gmail.com"],
      image: avengers
    },
    {
      id: 3,
      name: "Watch Dogs",
      path: "watch-dogs",
      members: ["ksmistry007@gmail.com"],
      image: watchdogs
    },
    {
      id: 4,
      name: "Valorant",
      path: "valorant",
      members: ["ksmistry007@gmail.com"],
      image: valorant
    },
    {
      id: 5,
      name: "Girl",
      path: "girl",
      members: ["ksmistry007@gmail.com"],
      image: girl
    },
  ])

  //! TEXT CHANNELS
  const [textChannels, setTextChannels] = useState([
    {
      id: 1,
      name: "general",
      path: "general",
      members: ["ksmistry007@gmail.com"],
      channel: 1
    },
    {
      id: 2,
      name: "pacify",
      path: "pacify",
      members: ["ksmistry007@gmail.com"],
      channel: 1
    },
    {
      id: 3,
      name: "study",
      path: "study",
      members: ["ksmistry007@gmail.com"],
      channel: 2
    },
    {
      id: 4,
      name: "gta",
      path: "gta",
      members: ["ksmistry007@gmail.com"],
      channel: 3
    },
  ]);

  //! VOICE CHANNELS
  const [voiceChannels, setVoiceChannels] = useState([
    {
      id: 1,
      name: "general",
      path: "general",
      members: ["ksmistry007@gmail.com"],
      channel: 1
    },
    {
      id: 2,
      name: "pacify",
      path: "pacify",
      members: ["ksmistry007@gmail.com"],
      channel: 1
    },
    {
      id: 3,
      name: "study",
      path: "study",
      members: ["ksmistry007@gmail.com"],
      channel: 2
    },
    {
      id: 4,
      name: "gta",
      path: "gta",
      members: ["ksmistry007@gmail.com"],
      channel: 3
    },
  ]);

  //! CHATS
  const [userChats, setUserChats] = useState([
    {
      id: 1,
      chat: "Curabitur gravida arcu ac tortor dignissim convallis aenean et. Est velit egestas dui id ornare arcu odio ut sem."
    },
    {
      id: 2,
      chat: "Amet massa vitae tortor condimentum lacinia quis. Faucibus purus in massa tempor nec feugiat nisl pretium fusce."
    },
    {
      id: 3,
      chat: "Tristique nulla aliquet enim tortor at auctor urna nunc id. Eu feugiat pretium nibh ipsum consequat nisl vel."
    },
    {
      id: 4,
      chat: "Risus nec feugiat in fermentum posuere urna nec. Urna neque viverra justo nec ultrices dui sapien eget."
    },
    {
      id: 5,
      chat: "Sed velit dignissim sodales ut eu sem integer vitae justo. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur."
    },
    {
      id: 6,
      chat: "Enim praesent elementum facilisis leo vel fringilla. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius."
    },
    {
      id: 7,
      chat: "Ultricies integer quis auctor elit sed vulputate mi sit amet. Id venenatis a condimentum vitae sapien pellentesque."
    },
    {
      id: 8,
      chat: "Nunc non blandit massa enim nec dui nunc mattis. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat."
    },
  ]);

  //! FORMAT DATE AND TIME
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Get the day, month, and year
    const day = String(dateString.getDate()).padStart(2, '0');
    const month = String(dateString.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = dateString.getFullYear();

    // Get the hours and minutes
    let hours = dateString.getHours();
    const minutes = String(dateString.getMinutes()).padStart(2, '0');

    // Determine AM/PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'

    // Format the time
    const time = `${hours}:${minutes} ${ampm}`;

    // Combine date and time
    return `${day}-${month}-${year} ${time}`;
  };



  return (
    <div className="App">

      {/* HEADER */}
      <Header
        ChannelName="Channel Name"
      />

      <div className="flex ">

        {/* SIDEBAR  */}
        <Channels
          userName="KaRaNn"
          userStatue="Online"
          userImage={userImg}
          channels={channels}
        />

        {/* CHANNELS  */}
        <SubChannels
          channelName="Channel Name"
          textChannels={textChannels}
          voiceChannels={voiceChannels}
          userName="KaRaNn"
          userStatue="Online"
          userImage={userImg}
        />

        {/* DASHBOARD  */}
        <Dashboard
          userName="KaRaNn"
          userStatue="Online"
          userImage={userImg}
          addChat={userChats}
          Uchats={userChats}
          currentDateTime={formatDate(new Date())}
        />

      </div>

    </div>
  );
}

export default App;
