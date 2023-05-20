import React from 'react'
const ExploreFeed = ({image,tittle, value}) => {
  return (
    <div className=' mt-[20px] ml-4 cursor-pointer '>
      <img src={image} alt={tittle} className='  hover:scale-[1.09] transition-all duration-500 h-[180px] w-[200px] rounded-tl-xl rounded-br-xl ' />
      <div className='mt-2 '>
        <h1 className=' text-black text-lg font-bold ' >{tittle}</h1>
        <h1 className=' text-[14px] font-normal '>{value} properties</h1>
      </div>
    </div>
  )
}

export default ExploreFeed
