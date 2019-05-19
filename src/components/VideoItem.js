import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className={'video-item item'}>
      <img src={video.snippet.thumbnails.medium.url} className={'ui image'} alt=""/>
      <div className={'content'}>
        <a className="header">{video.snippet.title}</a>

      </div>
    </div>
  );
}

export default VideoItem;
