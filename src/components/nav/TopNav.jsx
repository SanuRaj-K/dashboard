import React from "react";
import { Avatar, Notification, Search, Settings } from "../../data/iconsData";

function TopNav() {
  return (
    <div>
      <div className=" flex justify-between h-[60px] px-5 rounded-[100px] items-center bg-white">
        <div className=" uppercase text-[20px] font-semibold">Overview</div>
        <div className="  flex   justify-between   ">
          <div  className=" text-xs mr-3   bg-[#F3F4F7]  rounded-[25px] flex-center">
            <img className="  h-[26px] ml-2 w-[26px]" src={Search} alt="search" />
            <input
              className=" outline-none placeholder-black ml-2  bg-[#F3F4F7]"
              type="text"
              placeholder="Search"
              name=""
              id=""
            />
          </div>
          <div className=" flex justify-start items-center  gap-5">
            <img
              className="h-36px cursor-pointer w-[36px]"
              src={Settings}
              alt="settings"
            />
            <img
              className="h-36px cursor-pointer w-[36px]"
              src={Notification}
              alt="Notification"
            />
            <hr className=" bg-[#B6B6B6] h-5 w-1" />
            <div className=" flex justify-between cursor-pointer items-center">
              <img src={Avatar} className="  h-36px w-[36px]" alt="avatar" />
              <div className=" flex flex-col  pl-3">
                <p className=" text-[10px] text-[#B6B6B6] ">
                  @WilliamBiiii{" "}
                  <span className=" text-black font-semibold bg-[#00FF6B]  px-2 py-1 rounded-[32px]">
                    Pro
                  </span>
                </p>
                <h3 className=" text-sm font-semibold">William Blake</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
