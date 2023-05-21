import React from 'react'
import sign_up from './assets/sign_up.png'
import upload_details from './assets/upload_details.png'
import set_prices from './assets/set_prices.png'
import go_live from './assets/go_live.png'
const Task = () => {
    const data = [
        {tittle:"Sign up for a ResiRelief account", image:sign_up, alt:'sign_up'},
        {tittle:"Upload your property details and pictures", image:upload_details, alt:'upload_details'},
        {tittle:"Set your prices and available dates", image:set_prices, alt:'set_prices'},
        {tittle:"See your listing go live in front of millions of travelers", image:go_live, alt:'go_live'}
    ]
  return (
    <div className=' flex py-16 text-center'>
      <div className='container w-full md:w-[970px] lg:w-[1170px] mr-auto ml-auto px-[15px]'>
        <h1 className=' text-[#2a2a2e] mt-0 mb-8 font-bold text-[24px] '>All you have to do</h1>
      <div className=' ml-0 mr-0'>
            {/**What to do*/}
            {data.map(item=>(
                         <div className=' w-full lg:w-1/4 lg:float-left relative min-h-[1px] px-[15px]'>
                         <div className='flex flex-row justify-start  lg:flex-col lg:justify-center items-center text-center'>
                             <img className=' w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] mb-5' src={item.image} alt={item.alt} />
                             <p className='text-[16px] font-bold lg:ml-0 ml-[15px] lg:text-left text-center'>{item.tittle}</p>
                         </div>
                     </div>
            ))}
       
      </div>
      </div>
    </div>
  )
}

export default Task
