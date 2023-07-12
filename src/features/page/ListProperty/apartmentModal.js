import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}


export const apartmentModal = createSlice({
    name: 'apartmentModal',
    initialState,
    reducers: {
      ApartTrue:(state)=>{
        state.value=true
      },
      ApartFalse:(state)=>{
        state.value=false
      },
    },
  })
  
  
  // Action creators are generated for each case reducer function
  export const { ApartTrue, ApartFalse} = apartmentModal.actions
  
  export default apartmentModal.reducer