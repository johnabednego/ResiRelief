import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}


export const hostelModal = createSlice({
    name: 'hostelModal',
    initialState,
    reducers: {
      HostTrue:(state)=>{
        state.value=true
      },
      HostFalse:(state)=>{
        state.value=false
      },
    },
  })
  
  
  // Action creators are generated for each case reducer function
  export const { HostTrue, HostFalse} = hostelModal.actions
  
  export default hostelModal.reducer