import React from 'react'

export default function Video({ data,onClickVideo }) {
    return (!data?"Loading....":
        <div className="item" onClick={()=>onClickVideo(data)}>
            <img className="ui image" src={data.snippet.thumbnails.medium.url} alt="" />
            <div className="content">
                <div className="header">
                    {data.snippet.title}
                </div>
                <div className="description">
                    {data.snippet.description}
                </div>

            </div>
        </div>
    )
}
