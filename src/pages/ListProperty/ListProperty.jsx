import React from 'react'
import PropertyHero from '../../components/ListProperty/PropertyHero'
import Task from '../../components/ListProperty/Task'
import Footer from '../../components/Footer/Footer'
import ListApartmentModel from '../../components/Apartmets/ListApartment/ListApartmentModel'
import ListHostelModel from '../../components/Hostels/ListHostel/ListHostelModel'
import ListHotelModel from '../../components/Hotels/ListHotel/ListHotelModel'
import ListGuestHouseModel from '../../components/GuestHouses/ListGuestHouse/ListGuestHouseModel'
import { useSelector } from "react-redux";

const ListProperty = () => {
  const apartmentModal = useSelector((state) => state.apartmentModal.value)
  const hostelModal = useSelector((state) => state.hostelModal.value)
  const hotelModal = useSelector((state) => state.hotelModal.value)
  const guestHouseModal = useSelector((state) => state.guestHouseModal.value)
  return (
    <div>
      <PropertyHero />
      <Task/>
      <Footer/>
      {apartmentModal?
    <ListApartmentModel  />:null}
    {hostelModal?
    <ListHostelModel/>:null}
    {hotelModal?
    <ListHotelModel/>:null}
    {guestHouseModal?
    <ListGuestHouseModel/>:null}
    </div>
  )
}

export default ListProperty
