import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { MdEventAvailable } from "react-icons/md";
import { TbCurrencyRupee } from "react-icons/tb";
import { BsEnvelope } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiHouseLineBold } from "react-icons/pi";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import '../../assets/css/Admin.css';

const Sidebar = () => {
  const menus =[
    {name: "dashboard", link:'/admin/dashboard', icon: LuLayoutDashboard},
    {name: "Users", link:'/admin/users', icon: AiOutlineUser},
    {name: "events", link:'/admin/event', icon: MdEventAvailable},
    {name: "venue", link:'/admin/venue', icon: PiHouseLineBold},
    {name: "Booking Status", link:'/admin/booking', icon: FaRegBookmark},
    {name: "payment status", link:'/admin/payment', icon: TbCurrencyRupee},
    {name: "Feedback", link:'/admin/feedback', icon: BsEnvelope},
    {name: "Logout", link:'/login', justify: true, icon: IoMdLogOut}
  ]
  const [open, setOpen] = useState(true);
  return (
    <div>
      {/* <div className="flex gap-6"> */}
        <aside className={`bg-[#1c3b70] min-h-screen ${open ? 'w-64' : 'w-16'} duration-500 text-gray-100 px-4 h-screen sticky top-0` }>
            <div className="py-3 flex justify-end">
                <HiMenuAlt3 size={25} className="cursor-pointer" onClick={()=> setOpen(!open)}/>
            </div>
          <div className={`web-name whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>Fiesta</div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {
            menus?.map((menu,i) => (
            <Link to={menu?.link} key={i} className={` ${
              menu?.margin && "mt-5"
              } group flex items-center justify-items-center text-lg gap-3.5 p-2 menu-list rounded-md`}>
              <div>{React.createElement(menu?.icon, {size: "25"})}</div>
              <h2 style={{transitionDelay: `${i + 3}00ms`, }} className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>{menu?.name}</h2>
              <h2 className={` ${open && "hidden" } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group:hover:duration-300 group-hover:w-fit`}>{menu?.name}</h2>
          </Link>
            ))
          }
        </div>
        </aside>
      {/* </div> */}
    </div>
  )
}

export default Sidebar
