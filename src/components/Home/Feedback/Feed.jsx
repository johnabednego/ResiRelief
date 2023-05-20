import React from 'react'

const Feed = ({tittle, location,message,from}) => {
    return (
        <div className=' px-2 sm:ml-4 pt-6 text-center  shadow-md   bg-gradient-to-b bg-white w-[281px] h-[381px] rounded-[3px] border-b-[10px] border-b-primary ' >
                <h1 className='text-primary text-2xl font-bold '>{tittle}</h1>
                <h1 className='text-[#737373] text-[1.3em] ' >in {location}</h1>
                <h1 className=' pt-2 text-[20px] font-bold text-center '>"{message}"</h1>
                <h1 className='text-[1.3em] m-4'>- {from}</h1>
        </div>
    )
}

export default Feed
