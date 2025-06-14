import React, { useEffect } from 'react'
import './NavBar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { Link } from 'react-router-dom'
function NavBar({setSidebar}) {
  const fetchData = async () =>{
        const videoList_URL =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=Ke&videoCategoryId=${category}&key=${API_KEY}`
        await fetch(videoList_URL)
        .then(response=>response.json()).then(data=>setData(data.items))
        .catch((error)=>console.log(error));
     
      }
      useEffect(()=>{
        fetchData()
      },[])


  return (
    <nav className='flex-div'>
      <div className="nav-left flex-div">
        <img className="menu-icon"  onClick={()=>setSidebar(prev=> prev===false? true: false)} src={menu_icon} alt=""/>
        <div className="nav-container">
        <Link to='/'><img className='logo' src={logo} alt=""/></Link>
        <p className='mine'>MyTube</p>
        </div>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type='text' placeholder='Search'/>
        <img src={search_icon} alt='' onClick={()=>{}}/>
        </div>
        
      </div>
      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className='user-icon' alt="" />
      </div>
    </nav>
  )
}

export default NavBar
