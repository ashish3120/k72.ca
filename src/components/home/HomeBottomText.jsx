import React from 'react'
import { Link } from 'react-router-dom'
const HomeBottomText = () => {
    return (
        <div className='font-[font2] flex text-center justify-center gap-42'>
            <Link className='uppercase text-[5vw] border-3 border-white-500 rounded-full px-8  leading-[5.5vw] pt-2 hover:border-[#D3FD50] hover:text-[#D3FD50]' to='/projects' >projets</Link>
            <Link className='uppercase text-[5vw] border-3 border-white-500 rounded-full px-8 leading-[5.5vw] pt-2 hover:border-[#D3FD50] hover:text-[#D3FD50]' to='/agents' >agents</Link>
        </div>
    )
}

export default HomeBottomText