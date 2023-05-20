import React from 'react'

const Tittle = ({tittle, subtittle}) => {
  return (
    <div>
      <div className=' mt-20 justify-center xl:justify-start '>
        <h1 className=' text-[20px] text-center sm:text-left sm:text-[30px] md:text-[40px] font-bold '>{tittle}</h1>
        <h1 className='text-center sm:text-left text-[12px] md:text-[16px] font-normal' >{subtittle}</h1>
      </div>
    </div>
  )
}

export default Tittle
 