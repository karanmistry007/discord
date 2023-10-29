import React from "react";
import HelpIcon from "@mui/icons-material/Help";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PushPinIcon from "@mui/icons-material/PushPin";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

const Header = (props) => {
  return (
    <>
      <div className="w-full md:w-[calc(100vw-72px)] lg:w-[calc(100vw-72px-240px)] border-b px-3 flex items-center justify-between shadow-sm border-[#00000030] fixed bg-[#313338]  text-[#a9bac1]  h-[50px] right-0 top-0">
        <div className="flex items-center gap-5">
          <div className="burger md:hidden">
            <span className="line-1 block h-0.5 w-6 bg-white"></span>
            <span className="line-1 my-1.5 block h-0.5 w-6 bg-white"></span>
            <span className="line-1 block h-0.5 w-6 bg-white"></span>
          </div>

          <div className="text-white flex items-center">
            <span className=" text-[#a9bac1] text-2xl mr-2">#</span>
            {props.ChannelName}
          </div>
        </div>
        <div className="hidden icons sm:flex  items-center gap-5">
          <div className="text-[#a9bac1] text-2xl">#</div>
          <div className="1">
            <NotificationsIcon />
          </div>
          <div className="1">
            <PushPinIcon />
          </div>
          <div className="1">
            <PeopleAltIcon />
          </div>
          <div className="search bg-[#242424] rounded-md w-fit relative">
            <input
              type="text"
              className="focus-visible:w-[240px] focus-visible:bg-transparent transition-all duration-300 text-sm outline-0 w-[140px] bg-transparent placeholder:text-sm px-1.5 py-0.5"
              name="search"
              placeholder="Search"
              id=""
            />
            <SearchIcon className="absolute bg-[#242424] right-0 scale-[0.8]" />
          </div>
          <div className="1">
            <InboxIcon />
          </div>
          <div className="1">
            <HelpIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
