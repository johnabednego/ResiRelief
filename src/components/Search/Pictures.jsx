import React, { useState } from 'react'
import ImageZoom from './ImageZoom'


const Pictures = ({images, setShowPictures}) => {
    const [state, setState] = useState(false)
    const [url, setUlr] = useState()
    const zoomImage = (e)=>{
        setState(true)
        setUlr(e.target.src)
    }
    return (
        <>
        <div className='flex'>

            <div className='bg-white pt-4 pr-6 relative pb-2'>

                <button
                    className="closeButton rounded-[4px] select-none box-border flex justify-center items-center text-center p-1 ml-auto  border-0  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowPictures(false)}
                >
                    <span className=" -mt-1 flex justify-center items-center  bg-transparent text-white opacity-95 h-6 w-6 text-2xl  outline-none focus:outline-none">
                        x
                    </span>
                </button>
                <div className=' w-full justify-center items-center flex flex-wrap gap-3'>
                {images.map((src)=>{
                    return <img onClick={zoomImage} src={src} alt=""  className=" cursor-pointer shadow-md relative  w-[220px] h-[140px] overflow-hidden object-cover" />
                })}
                </div>
            </div>
        </div>
        {state? <ImageZoom setState={setState} imageUrl={url}/>:null}
        </>
    )
}

export default Pictures
