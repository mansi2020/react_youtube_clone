import React from 'react'
import { Link } from 'react-router-dom'
import {abbreviateNumber} from "js-abbreviation-number"

import {BsFillCheckCircleFill} from "react-icons/bs"

const VideoCard = ({video}) => {
  return (
    <Link to={`video/${video?.videoId}`}>
      <div className="flex mb-9 flex-col">
        <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
          <img className="object-cover h-full w-full" src={video?.thumbnails[0]?.url} alt="thumbnail" />
        </div>
      </div>
    </Link>
  )
}

export default VideoCard
