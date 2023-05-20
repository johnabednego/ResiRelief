import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}


export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
      home: (state) => {
        state.value = 0
       
      },
      about_us:(state)=>{
        state.value=1
      },
      contact_us:(state)=>{
        state.value=2
      },
      log_in:(state)=>{
        state.value=3
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { home, hotels,apartments,hostels,about_us,contact_us,log_in } = pageSlice.actions
  
  export default pageSlice.reducer