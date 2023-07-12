import { configureStore } from '@reduxjs/toolkit';
import pageReducer from '../features/page/pageSlice'
import locationReducer from '../features/page/locationSlice'
import housingReducer from '../features/page/housingSlice'
import searchValueReducer from '../features/page/searchValueSlice'
import signInReducer from '../features/nav/signInSlice'
import signUpReducer from '../features/nav/signUpSlice'
import apartmentReducer from '../features/page/ListProperty/apartmentModal'
import hostelReducer from '../features/page/ListProperty/hostelModal'
import hotelReducer from '../features/page/ListProperty/hotelModal'
import guestHouseReducer from '../features/page/ListProperty/guestHouseModal'
export const store = configureStore({
  reducer: {
     page: pageReducer,
     location:locationReducer,
     housing:housingReducer,
     searchValue:searchValueReducer,
     signInModal:signInReducer,
    signUpModal:signUpReducer,
    apartmentModal:apartmentReducer,
    hostelModal:hostelReducer,
    hotelModal:hotelReducer,
    guestHouseModal:guestHouseReducer,
  },
});
