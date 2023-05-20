import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "Hotel",
}


export const housingSlice = createSlice({
    name: 'housing',
    initialState,
    reducers: {
      housing:(state, action)=>{
        state.value=action.payload
      },
    },
  })
  
  
  // Action creators are generated for each case reducer function
  export const { housing} = housingSlice.actions
  
  export default housingSlice.reducer