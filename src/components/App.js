import React, { useState } from 'react';
import SearchBar from "./SearchBar"
import youtube from "../api/youtube"
import VideoList from "./VideoList"
import VideoDetail from './VideoDetail';




function App() {
  const [videos, setVideos] = useState([])
  const [video, setVideo] = useState(null)


  console.log(video);

  async function onSearch(key) {
    const response = await youtube.get("/search", {
      params: { q: key }
    })
    setVideos(response.data.items)
    setVideo(response.data.items[0])
    console.log(response.data.items);
    console.log(response.data.items);
  }


  return (
    <div className="ui container">
      <SearchBar search={onSearch} />
      {/* Found {videos.length} videos. */}
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            {video && <VideoDetail data={video} />}
          </div>
          <div className="five wide column">
            <VideoList onClickVideo={(data) => { setVideo(data) }} videos={videos} />
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
