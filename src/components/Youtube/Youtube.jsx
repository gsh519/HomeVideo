import React from 'react'

const Youtube = (props) => {
  const {videos} = props;

  const video = videos.map((video) => {
    const url = 'https://www.youtube.com/embed/' + video.id.videoId;
    return (
      <div style={{margin: '20px', textAlign: 'center'}} key={video.id.videoId}>
        <iframe 
          id="ytplayer" 
          type="ytplayer" 
          width="480" 
          height="270"
          src={url}
          frameborder="0"
          title={video.id.videoId}
        />
      </div>
    )
  })

  return (
    <div>
      {video}
    </div>
  )
}

export default Youtube