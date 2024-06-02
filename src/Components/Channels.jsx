import React from 'react'
import './Channels.css'
import dm from '../Images/dm.png'





const Channels = (props) => {

  return (
    <>
      <section className='main-container w-[72px] h-screen bg-[#1e1f22] hidden md:block'>
        <div className="icon-container flex flex-col justify-center items-center mt-3 gap-2">

          {/* DIRECT MESSAGE SECTION */}
          <a href='/messages' id="direct_messages" className="direct_messages icon cursor-pointer relative w-[48px] rounded-3xl hover:rounded-2xl hover:bg-[#5865f2] transition-all duration-300 p-2.5 bg-[#313338] m-auto">
            <img src={dm} alt="" />
            <div className="line_left h-10 w-2 rounded-2xl scale-50 bg-white absolute left-[-16px] top-1 transition-all duration-300"></div>
          </a>
          {/* END DIRECT MESSAGE SECTION */}

          {/* UNDERLINE */}
          <div className="ul bg-[#464646] h-[2px] w-8 m-auto rounded-lg"></div>
          {/* END UNDERLINE */}

          {/* CHANNELS */}
          {props.channels.map((data, index) => {
            return (
              <a href={`/${data.path}`} key={index} className={`${data.name} icon cursor-pointer relative w-[48px]  hover:rounded-2xl m-auto`} title={data.name}>
                <img src={data.image} alt={data.name} />
                <div className="line_left h-10 w-2 rounded-2xl scale-50 bg-white absolute left-[-16px] top-1 transition-all duration-300"></div>
              </a>
            )
          })}
          {/* END CHANNELS */}

        </div>
      </section>
    </>
  )
}

export default Channels
