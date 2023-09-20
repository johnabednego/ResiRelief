import React from "react";
import {
    TransformWrapper,
    TransformComponent,
} from "react-zoom-pan-pinch";

const ImageZoom = ({ setState, imageUrl }) => {

    return (
        <div className=' flex items-center justify-center  mt-8'>
            <div
                className="pt-7  ml-[5%] items-center justify-center sm:pt-0 h-[100vh] flex flex-wrap overflow-x-hidden overflow-y-auto fixed inset-0  z-50 outline-none focus:outline-none scrollbar-hide"
            >
                <div className="relative my-6 items-center">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className='flex'>

                            <div className='bg-white pt-0 pl-2 relative pb-2'>

                                <button
                                    className="closeButton rounded-[4px] select-none box-border flex justify-center items-center text-center p-1 ml-auto  border-0  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setState(false)}
                                >
                                    <span className=" -mt-1 flex justify-center items-center  bg-transparent text-white opacity-95 h-6 w-6 text-2xl  outline-none focus:outline-none">
                                        x
                                    </span>
                                </button>
                                <div className=" mt-2">
                                    <TransformWrapper>
                                        <TransformComponent>
                                            <img src={imageUrl} alt="test" className="shadow-md" />
                                        </TransformComponent>
                                    </TransformWrapper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>

    );
};

export default ImageZoom;

