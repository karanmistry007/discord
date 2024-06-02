import React, { useState } from "react";
import "./SubChannels.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";

const SubChannels = (props) => {
  const [textDropdown, setTextDropdown] = useState(false);
  const [voiceDropdown, setVoiceDropdown] = useState(false);

  return (
    <>
      <section className="main-container w-[240px] h-screen bg-[#2b2d31] text-[#a9bac1] relative hidden lg:block">
        <div className="item-container">

          {/* CHANNEL HEADING */}
          <div className="px-4 flex justify-between items-center border-b shadow-sm border-[#00000030] bg-[#2b2d31]  text-[#a9bac1] h-[50px]">
            <h2 className=" font-semibold text-white h-fit w-fit">
              <span>{props.channelName}</span>
            </h2>
            <KeyboardArrowDownIcon />
          </div>
          {/* END CHANNEL HEADING */}

          {/* TEXT CHANNELS */}
          <div className="text-channels text-[10px] text-left mt-[15px]">
            <h2 className="text-channels-menu select-none uppercase cursor-pointer hover:text-white"
              onClick={(e) => { setTextDropdown(!textDropdown); console.log(textDropdown) }}
            >
              <KeyboardArrowDownIcon className={`scale-75 ${textDropdown ? "-rotate-90" : ""}`} />
              <span>Text Channels</span>
            </h2>
            <div className={`text-channels-dropdown text-sm select-none ${textDropdown ? "hidden" : 'show'}`}>
              {props.textChannels.map((data, index) => {
                return (
                  <a href={`${data.path}`} className={`${data.name} channel block mx-2 my-0.5 px-[12px] py-[6px] transition duration-200 ease-in-out rounded-md bg-[#2b2d31] hover:bg-[#393b41]`} key={index}>
                    <span className="hash text-[18px] mr-[10px] text-[#a9bac1]">#</span>
                    {data.name}
                    <PersonAddIcon className="float-right scale-0" />
                  </a>
                );
              })}
            </div>
          </div>
          {/* END TEXT CHANNELS */}


          {/* VOICE CHANNELS */}
          <div className="voice-channels text-[10px] text-left mt-[15px]">
            <h2 className="voice-channels-menu uppercase select-none cursor-pointer hover:text-white"
              onClick={(e) => { setVoiceDropdown(!voiceDropdown); console.log(voiceDropdown) }}
            >
              <KeyboardArrowDownIcon className={`scale-75 ${voiceDropdown ? "-rotate-90" : ""}`} />
              <span>Voice Channels</span>
            </h2>
            <div className={`voice-channels-dropdown text-sm select-none ${voiceDropdown ? "hidden" : 'show'}`}>
              {props.voiceChannels.map((data, index) => {
                return (
                  <a href={`${data.path}`} className={`${data.name} channel block mx-2 my-0.5 px-[12px] py-[6px] transition duration-200 ease-in-out rounded-md bg-[#2b2d31] hover:bg-[#393b41]`} key={index}>
                    <VolumeUpIcon className="speaker scale-75 mr-[10px] text-[#a9bac1]" />
                    {data.name}
                    <PersonAddIcon className="float-right scale-0" />
                  </a>
                );
              })}
            </div>
          </div>
          {/* END VOICE CHANNELS */}

          {/* USER SECTION */}
          <div className="user-details gap-2 p-2 bg-[#202124aa] absolute bottom-0 left-0 w-full flex justify-between items-center">
            <img className="w-8 h-8 rounded-3xl" src={props.userImage} alt="" />
            <div className="user-name-container flex-grow">
              <h3 className="user-name text-xs font-bold text-white">{props.userName}</h3>
              <p className="user-status text-xs flex items-center gap-1">
                <span className="inline-block w-2 h-2 bg-white align-middle rounded-full"></span>
                {props.userStatue}
              </p>
            </div>
            <div className="icons flex gap-2 items-center">
              <MicOffIcon className="scale-90 -scale-x-100" />
              <HeadphonesIcon className="scale-90" />
              <SettingsIcon className="scale-90" />
            </div>
          </div>
          {/* END USER SECTION */}


        </div>
      </section>
    </>
  );
};

export default SubChannels;
