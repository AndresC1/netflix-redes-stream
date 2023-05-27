// import React from 'react'

export default function Reproductor({infoMovie}) {
  return (
    <div>
        <video className="w-full h-[100vh]" data-dashjs-player src={infoMovie.video} controls></video>
    </div>
  )
}
