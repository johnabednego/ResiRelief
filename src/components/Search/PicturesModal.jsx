import React from 'react'
import Pictures from './Pictures'

const PicturesModal = ({images, setShowPictures}) => {
    return (
        <div className=' flex items-center justify-center w-[90%] mt-8'>
            <div
                className="pt-7 w-[90%] ml-[5%] items-center justify-center sm:pt-0 h-[100vh] flex flex-wrap overflow-x-hidden overflow-y-auto fixed inset-0  z-50 outline-none focus:outline-none scrollbar-hide"
            >
                <div className="relative my-6 items-center">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                       <Pictures images={images} setShowPictures={setShowPictures}/>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
    )
}

export default PicturesModal
