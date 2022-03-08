import React from 'react'
import Video from "./Video"

export default function VideoList({videos,onClickVideo}) {
    const vids = videos.map(v=>{
        return <Video onClickVideo={(data)=>onClickVideo(data)}  key={v.id.videoId} data = {v} />
    })
    return (
        <div className="ui relaxed divided list">
           {vids} 
        </div>
    )
}
