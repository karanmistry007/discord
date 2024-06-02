import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RedeemIcon from '@mui/icons-material/Redeem';
import GifBoxIcon from '@mui/icons-material/GifBox';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useEffect, useRef, useState } from 'react';
import { Chat } from '@mui/icons-material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Dash = (props) => {
  const scrollToLatestChat = useRef(null);
  useEffect(() => {
    if (scrollToLatestChat.current) {
      const scrollableDiv = scrollToLatestChat.current;
      scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
    }
    const enter = () => {
      const ChatBox = document.querySelector(".myInput");
      // console.log(ChatBox)
      ChatBox.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          submit()
        }
      }
      );
    }
    enter()
  }, []);

  // console.log(props)
  const [Uchats, setUchats] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!Uchats) {
      alert("Chat is Empty")
    }
    else {
      props.addChat(Uchats);
      setUchats("");
    }
  }
  return (
    <>
      <div className='w-full md:w-[calc(100vw-72px)] lg:w-[calc(100vw-72px-240px)] pt-[50px] h-screen bg-[#313338] flex justify-end flex-col items-start px-3  md:px-4 text-slate-300'>
        <div ref={scrollToLatestChat} className="chats flex flex-col gap-6 overflow-y-auto pr-2 md:pr-5 xl:pr-20">

          {props.Uchats.length === 0 ?
            "" :
            <div className="1">
              {props.Uchats.map((data, index) => {
                return (
                  <div className="userImageText flex gap-2 my-5" key={index}>
                    <img className='w-10 h-10 rounded-3xl' src={props.userImage} alt="" />
                    <div className="text-sm md:text-base">
                      <h3 className='text-blue-500'>
                        {props.userName}
                        <span className='text-xs text-slate-400 ml-3'>
                          {props.currentDateTime}
                        </span>
                      </h3>
                      <h6 className='font-light'>
                        {data.chat}
                      </h6>
                    </div>
                  </div>
                )
              })}
            </div>
          }



        </div>
        <div className="messagebox  text-[#a9bac1] px-4 py-2.5 mt-2  mb-6 w-full bg-[#3a3c41] rounded-lg flex justify-between items-center gap-3">
          <div className="icons-1 w-[95%] ">
            <AddCircleIcon className='mr-3' />
            <input value={Uchats}
              onChange={(e) => {
                setUchats(e.target.value);
                // console.log(e.target.value) 
              }}
              className='myInput bg-transparent w-[calc(100vw-128px)] md:w-[calc(100vw-350px)] lg:w-[calc(100vw-600px)] outline-0 text-slate-200 placeholder:opacity-70 placeholder:text-sm' placeholder='Message #Channel-1' type="text" name="message" id="" />
          </div>
          <div className="endicons md:flex gap-3 hidden">
            <RedeemIcon />
            <GifBoxIcon />
            <StickyNote2Icon />
            <EmojiEmotionsIcon />
          </div>
          <div className="md:hidden">
            <EmojiEmotionsIcon />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dash
