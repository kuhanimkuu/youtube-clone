import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import moment from 'moment'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY } from '../../Data'
import { valueConverter } from '../../Data'
import { useParams } from 'react-router-dom'


const PlayVideo = () => {
    const{videoId} = useParams();
    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([])
    const fetchVideoData = async () =>{
        // Fetching Video data
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY} `
        await fetch(videoDetails_url)
       .then(res => res.json()).then(data=>setApiData(data.items[0]))
    
    }
    const fetchOtherData = async ()=>{
        // Fetching channel data
        const channelData_url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY} `
        await fetch(channelData_url)
        .then(res=>res.json()).then(data=>setChannelData(data.items[0]))
        // fetching comment data
        const comment_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=45&videoId=${videoId}&key=${API_KEY} `
        await fetch(comment_url)
        .then(res=>res.json()).then(data=>setCommentData(data.items))
    }
useEffect(()=>{
    fetchVideoData();
},[videoId])
useEffect(()=>{
fetchOtherData()
},[apiData])
  return (
    <div className='play-video'>
     
      <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"  referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <h3>{apiData?apiData.snippet.title:"Title here"}</h3>
      <div className="play-video-info">
        <p>{apiData?valueConverter(apiData.statistics.viewCount):"16K"} &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
        <div>
            <span><img src={like} alt="" />{apiData?valueConverter(apiData.statistics.likeCount):'155'}</span>
            <span><img src={dislike} alt="" /></span>
            <span><img src={share} alt="" />Share</span>
            <span><img src={save} alt="" /> Save</span>
        </div>
        </div>
        <hr/>
        <div className="publisher">
            <img src={channelData?channelData.snippet.thumbnails.default.url:''} alt="" />
            <div>
                <p>{apiData?apiData.snippet.channelTitle:""}</p>
                <span>{channelData?valueConverter(channelData.statistics.subscriberCount):''} Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
           <p>{apiData?apiData.snippet.description.slice(0,250):'Description Here'}</p>
            <hr/>
            <h4>{apiData?valueConverter(apiData.statistics.commentCount):'102'} Comments</h4>
            
            {commentData.map((item,index)=>{
                return(
           <div key={index} className="comments">
                <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                <div>
                    <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                    <p>{item.snippet.topLevelComment.snippet.textDisplay}
                    </p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>{valueConverter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
                )
            })}
 
        </div>
    </div>
  )
}

export default PlayVideo
