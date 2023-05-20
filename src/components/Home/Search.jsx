import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { housing } from '../../features/page/housingSlice'
import {True} from '../../features/page/searchValueSlice'
import SearchList from '../LiveSearch/SearchList'

const Search = () => {
    const dispatch = useDispatch()
    const searchValue = useSelector(state=>state.searchValue.value)
    const handleHousing = (e) => {
        dispatch(housing(e.target.value))
    }

    //handling search
    const handleSearch = () => {
        dispatch(True()) 
       
    }
    

    return (
        <div className=' shadow-lg flex h-fit py-[10px] px-[40px] items-center w-[60%] justify-between rounded-tl-full rounded-br-full bg-[#2A4953] opacity-95 '>
            <div className='flex '>
                <div className='bg-house w-10 h-10 '></div>
                <div className=' -mt-2 text-white'>
                    <h1 className='text-[20px] font-medium '>Housing Type</h1>
                    <select onChange={(e) => handleHousing(e)} className="bg-[#2A4953] cursor-pointer text-white rounded-lg max-w-fit focus:outline-none ">
                        <option value="Hotel">Hotel</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Hostel">Hostel</option>
                    </select>
                </div>
            </div>
            <div className='flex mt-4 '>
                <div className=' animate-bounce bg-location w-10 h-10 '></div>
                <div className=' -mt-2'>
                    <h1 className='text-[20px] font-medium text-white  mb-2'>Location</h1>
                    <SearchList />
                </div>
            </div>
            <div onClick={() => handleSearch()} className=' items-center text-center justify-center shadow-2xl bg-[#2A4953]  rounded-lg border-2 border-solid border-white flex text-white w-fit p-2 h-10 hover:opacity-40 cursor-pointer '>
                <h1 className=' -mt-1 font-semibold  text-xl '>Search</h1>
            </div>
        </div>
    )
}

export default Search
