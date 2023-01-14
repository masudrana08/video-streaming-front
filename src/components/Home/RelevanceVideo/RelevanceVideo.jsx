import React from 'react'
import { relevanceVideo } from '../../../demo/relevanceVideo'
import './relevanceVideo.css'
import {RxDotsVertical} from 'react-icons/rx'
export default function RelevanceVideo() {
  const getAgo=(x)=>{
    const currentTime = new Date();
    const createdTime = new Date(x);
    const timeDiff = (currentTime - createdTime) / 1000;
    if(timeDiff > 31536000){
      return Math.floor((timeDiff / 31536000)) + ' years ago'
    }else if(timeDiff > 2628000){
      return Math.floor((timeDiff / 2628000)) + ' months ago'
    }else if(timeDiff > 86400){
      return Math.floor((timeDiff / 86400)) + ' days ago'
    }else if(timeDiff > 3600){
      return Math.floor((timeDiff / 3600)) + ' hours ago'
    }else if(timeDiff > 60){
      return Math.floor((timeDiff / 60)) + ' minutes ago'
    }else{
      return timeDiff + ' second ago'
    }
  }
    
  return (
    <div className='relevanceCont'>
        {
          relevanceVideo.map((video, i)=>{
            return (
              <div className="relevanceVideo">
                <div className="imgCont">
                  <img src={video.thumbnailId} alt="Foowork Video Thumbnail" />
                </div>
                <div className="textCont">
                  <div className='profile'>
                    <img src="https://yt3.ggpht.com/ytc/AMLnZu_xXlTuUsQq8VY3z29czWIMq3uc-jFYg9bU5GZJ=s68-c-k-c0x00ffffff-no-rj" alt="" />
                  </div>
                  <div>
                    <div className="title">{video.title.join(" ")}</div>
                    <div className="sec2">
                      <a href={video.uploader.username}><p>{video.uploader.name}</p></a>
                      <div><p>Likes: {video.like.length}</p></div>
                      <div><p>{getAgo(video.createdAt)}</p></div>
                    </div>
                  </div>
                  <div className="menuCont">
                    <RxDotsVertical />
                  </div>
                
                </div>
              </div>
            )
          })
        }
    </div>
  )
}
