import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}


export const hotelModal = createSlice({
    name: 'hotelModal',
    initialState,
    reducers: {
      HotTrue:(state)=>{
        state.value=true
      },
      HotFalse:(state)=>{
        state.value=false
      },
    },
  })
  
  
  // Action creators are generated for each case reducer function
  export const { HotTrue, HotFalse} = hotelModal.actions
  
  export default hotelModal.reducer