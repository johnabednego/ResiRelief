import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}


export const searchValueSlice = createSlice({
    name: 'searchValue',
    initialState,
    reducers: {
      True:(state)=>{
        state.value=true
      },
      False:(state)=>{
        state.value=false
        console.log(state.value)
      },
    },
  })
  
  
  // Action creators are generated for each case reducer function
  export const { True, False} = searchValueSlice.actions
  
  export default searchValueSlice.reducer