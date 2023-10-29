import React from 'react'
import './Sidebar.css'
import ChannelBar from './Channels';
import dm from '../Images/dm.png'
import valorant from '../Images/valorant.jpg'
import avengers from '../Images/avengers.jpg'
import watchdogs from '../Images/watchdogs.jpg'
import assasian from '../Images/assasian.jpg'
import girl from '../Images/girl.jpg'





const Sidebar = (props) => {


  const focusEffect = () => {
    // var dm=document.querySelector('.direct_messages');
    // var ll=document.querySelector('.direct_messages').querySelector('.line_left');
    // dm.classList.add('bg-[#5865f2]', 'rounded-2xl');
    // ll.classList.add("scale-100");
    // props.GroupName==
  }


  return (
    <>
      <div className='w-[72px] h-screen bg-[#1e1f22] hidden md:block'>
        <div className="icons  flex flex-col justify-center items-center mt-3 gap-2">
          <div onClick={focusEffect} className="direct_messages relative w-[48px] rounded-3xl clic hover:rounded-2xl hover:bg-[#5865f2] transition-all duration-300 p-2.5 bg-[#313338] m-auto">
            <img src={dm} alt="" />
            <div className="line_left h-10 w-2 rounded-2xl scale-50 bg-white absolute left-[-16px] top-1 transition-all duration-300"></div>
          </div>
  
          <div className="ul bg-[#464646] h-[2px] w-8 m-auto"></div>

          <div onClick={focusEffect} className="assasian relative w-[48px]  hover:rounded-2xl m-auto">
            <img src={assasian} alt="" />
            <div className="line_left h-10 w-2 rounded-2xl scale-50 bg-white absolute left-[-16px] top-1 transition-all duration-300"></div>
          </div>

          <div onClick={focusEffect} className="valorant relative w-[48px]  hover:rounded-2xl m-auto">
            <img src={valorant} alt="" />
            <div className="line_left h-10 w-2 rounded-2xl scale-50 bg-white absolute left-[-16px] top-1 transition-all duration-300"></div>
          </div>

          <div onClick={focusEffect} className="avengers relative w-[48px]  hover:rounded-2xl m-auto">
            <img src={avengers} alt="" />
            <div className="line_left h-10 w-2 rounded-2xl scale-50 bg-white absolute left-[-16px] top-1 transition-all duration-300"></div>
          </div>

          <div onClick={focusEffect} className="watchdogs relative w-[48px]  hover:rounded-2xl m-auto">
            <img src={watchdogs} alt="" />
            <div className="line_left h-10 w-2 rounded-2xl scale-50 bg-white absolute left-[-16px] top-1 transition-all duration-300"></div>
          </div>

          <div onClick={focusEffect} className="girl relative w-[48px]  hover:rounded-2xl m-auto">
            <img src={girl} alt="" />
            <div className="line_left h-10 w-2 rounded-2xl scale-50 bg-white absolute left-[-16px] top-1 transition-all duration-300"></div>
          </div>
          

        </div>
      </div>


      
      {/* Channels  */}
      <ChannelBar GroupName="GroupName" Tchannels={props.Tchannels} Vchannels={props.Vchannels} 
      userName={props.userName} userStatue={props.userStatue} userImage={props.userImage} />


    </>

  )
}

export default Sidebar
