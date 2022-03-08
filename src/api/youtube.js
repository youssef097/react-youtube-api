import axios from "axios"
const KEY = "AIzaSyBFKL3RAt3ji9S7HnvQrVLSu9Wmx4NVvTM"


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResult: 5,
        key: KEY
    }
})
