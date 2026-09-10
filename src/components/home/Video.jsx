import React from 'react'

const Video = () => {
    return (
        <div className='h-full w-full'>
            <video key="/video/home_video.mp4"
                className='h-screen w-screen object-cover'
                autoPlay playsInline loop muted src="/video/home_video.mp4"></video>
        </div>
    )
}

export default Video