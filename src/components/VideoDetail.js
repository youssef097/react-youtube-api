import React, { useState, useEffect, useRef } from 'react'

export default function VideoDetail({ data }) {
    const mainVid = useRef()

    return (!data ? "Loading...." :
        <div>
            <div className="ui embed">
                <iframe src={"https://www.youtube.com/embed/"+data.id.videoId}></iframe>
            </div>
            <div className="ui segment">    
                
                <h4 className="ui header">
                    {data.snippet.title}
                </h4>
                <p>
                    {data.snippet.description}
                </p>
            </div>


        </div>
    )
}
