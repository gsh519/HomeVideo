import React, {useState} from 'react'
import axios from 'axios'
import {SearchBox, Youtube} from './index'

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const Video = () => {

  const [videos, setVideos] = useState([]);

  const onSearchYoutube = (keyword) => {
    const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${keyword}&maxResults=3&key=${YOUTUBE_API_KEY}`;
    axios.get(url).then((res) => {
      setVideos(res.data.items)
    }).catch(() => {
      console.log('通信に失敗しました。')
    })
  }

  console.log(videos)

  return (
    <>
      <SearchBox onSearchYoutube={onSearchYoutube} />
      <Youtube videos={videos} />
    </>
  )
}

export default Video