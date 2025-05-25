import React from 'react'
import './SideBar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import cars from '../../assets/cars.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import brother from '../../assets/brother.png'
import bull from '../../assets/bull.png'
import kuha from '../../assets/kuha.png'
import meeee from '../../assets/meeee.png'
import tim from '../../assets/tim.png'
import news from '../../assets/news.png'

function SideBar({sidebar, category, setCategory}) {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="shortcut-links">
            <div className={`side-link ${category===0?"active":""}`} onClick={()=> setCategory(0)}>
                <img src={home} alt="" /><p>Home</p>
            </div>
            <div className={`side-link ${category===20?"active":""}`} onClick={()=> setCategory(20)}>
                <img src={game_icon} alt="" /><p>Gaming</p>
            </div>
            <div className={`side-link ${category===2?"active":""}`} onClick={()=> setCategory(2)}>
                <img src={cars} alt="" /><p>Cars</p>
            </div>
            <div className={`side-link ${category===17?"active":""}`} onClick={()=> setCategory(17)}>
                <img src={sports} alt="" /><p>Sports</p>
            </div>
            <div className={`side-link ${category===24?"active":""}`} onClick={()=> setCategory(24)}>
                <img src={entertainment} alt="" /><p>Entertainment</p>
            </div>
            <div className={`side-link ${category===28?"active":""}`} onClick={()=> setCategory(28)}>
                <img src={tech} alt="" /><p>Tech</p>
            </div>
            <div className={`side-link ${category===10?"active":""}`} onClick={()=> setCategory(10)}>
                <img src={music} alt="" /><p>Music</p>
            </div>
            <div className={`side-link ${category===22?"active":""}`} onClick={()=> setCategory(22)}>
                <img src={blogs} alt="" /><p>Blogs</p>
            </div>
            <div className={`side-link ${category===25?"active":""}`} onClick={()=> setCategory(25)}>
                <img src={news} alt="" /><p>News</p>
            </div>
            <hr/>
        </div>
        <div className="subscribed-list">
            <h3>Subscribed</h3>
            <div className="side-link">
                <img src={brother} alt="" /><p>Gamer</p>
            </div>
            <div className="side-link">
                <img src={bull} alt="" /><p>Bull</p>
            </div>
            <div className="side-link">
                <img src={kuha} alt="" /><p>The Creationist</p>
            </div>
            <div className="side-link">
                <img src={meeee} alt="" /><p>J-Football</p>
            </div>
            <div className="side-link">
                <img src={tim} alt="" /><p>Everyday Walker</p>
            </div>

        </div>
    </div>
  )
}

export default SideBar
