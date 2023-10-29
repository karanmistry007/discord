import React from "react";
import "./Channels.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";

const Channels = (props) => {
  return (
    <>
      <div className="w-[240px] h-screen bg-[#2b2d31] text-[#a9bac1] relative hidden lg:block">
        <div className="px-4 flex justify-between items-center border-b shadow-sm border-[#00000030] bg-[#2b2d31]  text-[#a9bac1] h-[50px]">
          <h2 className=" font-semibold text-white h-fit w-fit">
            <span>{props.GroupName}</span>
          </h2>
          <KeyboardArrowDownIcon />
        </div>

        <div className="channel_text text-xs">
          <div className="channel_1">
            <h2 className="channel_head ">
              <KeyboardArrowDownIcon className=" scale-50" />
              <span>Text Channels</span>
            </h2>
            <ul className="channel_list text-sm">
              {props.Tchannels.length === 0 ? (
                ""
              ) : (
                <div className="">
                  {props.Tchannels.map((Channel) => {
                    return (
                      <li className="channels">
                        <a href="">
                          <span className="hash">#</span>
                          {Channel.Name}
                        </a>
                        <PersonAddIcon className="user" />
                      </li>
                    );
                  })}
                </div>
              )}
            </ul>
          </div>
        </div>

        <div className="channel_voice text-xs">
          <div className="channel_1">
            <h2 className="channel_head ">
              <KeyboardArrowDownIcon className=" scale-50" />
              <span>Voice Channels</span>
            </h2>
            <ul className="channel_list text-sm">
              {props.Vchannels.length === 0 ? (
                ""
              ) : (
                <div className="">
                  {props.Vchannels.map((Channel) => {
                    return (
                      <li className="channels">
                        <a href="">
                          <VolumeUpIcon className="speaker" />
                          {Channel.Name}
                        </a>
                        <PersonAddIcon className="user" />
                      </li>
                    );
                  })}
                </div>
              )}
            </ul>
          </div>
        </div>

        <div className="userDetails p-2 bg-[#202124aa] absolute bottom-0 left-0 w-full flex justify-between items-center">
          <div className="userImageText flex gap-2">
            <img className="w-8 h-8 rounded-3xl" src={props.userImage} alt="" />
            <div className="name">
              <h3 className="text-xs font-bold text-white">{props.userName}</h3>
              <p className="text-xs">{props.userStatue}</p>
            </div>
          </div>
          <div className="icons flex gap-2 items-center">
            <MicOffIcon className="scale-90 -scale-x-100" />
            <HeadphonesIcon className="scale-90" />
            <SettingsIcon className="scale-90" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Channels;
