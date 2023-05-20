import React from 'react'

const FooterFeed = ({feed}) => {
  return (
    <div className=' mt-3 mb-4 sm:mt-1 w-fit px-2 sm:px-8 md:px-12 h-fit'>
      <h1 className=' my-3 text-[22px] font-bold'>{feed.heading}</h1>
      <ul className='text-[#dfdcdc]'>
        {feed.list.map(li=>(
             <li className=' cursor-pointer border-[#dfdcdc] hover:border-b-[1px] w-fit m-1 text-[18px] leading-5 font-normal '>{li.tittle}</li>
        ))}
      </ul>
    </div>
  )
}

export default FooterFeed
