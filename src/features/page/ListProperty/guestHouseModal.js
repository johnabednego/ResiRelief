import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}


export const guestHouseModal = createSlice({
    name: 'guestHouseModal',
    initialState,
    reducers: {
      GuestHouseTrue:(state)=>{
        state.value=true
      },
      GuestHouseFalse:(state)=>{
        state.value=false
      },
    },
  })
  
  
  // Action creators are generated for each case reducer function
  export const { GuestHouseTrue, GuestHouseFalse} = guestHouseModal.actions
  
  export default guestHouseModal.reducer