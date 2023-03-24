import React from 'react'
import './sidebar.css'
import SidebarButton from './SidebarButton'
import { FaSignOutAlt } from 'react-icons/fa';
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";

import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
function Sidebar() {
  return (
    <div className='sidebar-container'>
      <img src="https://images.unsplash.com/photo-1678674259544-62cdafd7388c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60" alt="#img" className='profile-img'/>
      <div >
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard/>}/>
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire/>}/>
        <SidebarButton title="Player" to="/player" icon={<FaPlay/>}/>
        <SidebarButton title="Favorite" to="/favorite" icon={<MdFavorite/>}/>
        <SidebarButton title="Library" to="/" icon={<IoLibrary/>}/>
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt/>}/>
    </div>
  )
}

export default Sidebar
