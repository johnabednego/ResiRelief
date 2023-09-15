import React from 'react'

const Room = ({ data }) => {
    return (
       
        <center>
             <div className=" flex flex-col bg-white border rounded-lg shadow-md p-4 mx-4 items-start justify-start text-start w-[90%]">
            <h2 className="text-xl font-semibold mb-2">{data.title}</h2>
            <p className="text-gray-600 mb-4">{data.description}</p>
            <div className=" flex flex-wrap items-center gap-3">
                {data.occupancies.map(number => {
                    return (
                        <div className="flex">
                            <div className=" mt-1 mr-1 w-5 overflow-hidden shrink-0 flex flex-row pt-[3.6px] pb-[3.6px] pr-[1px] pl-[1px] box-border items-start justify-start">
                                <img
                                    className=" w-[17.82px] h-[12.69px]"
                                    alt=""
                                    src="/vector_rooms.svg"
                                />
                            </div>
                            <p className="text-lg font-semibold">{number} <small>in a room</small></p>
                        </div>
                    )
                })}
            </div>
        </div>
        </center>
    )
}

export default Room
