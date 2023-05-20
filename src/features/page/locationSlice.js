import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "Accra",
}


export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
      location:(state, action)=>{
        state.value=action.payload
      },
    },
  })
  
  
  // Action creators are generated for each case reducer function
  export const { location} = locationSlice.actions
  
  export default locationSlice.reducer