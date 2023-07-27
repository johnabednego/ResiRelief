import React, { useState } from 'react'
import SearchContainer from '../../components/Search/SearchContainer'
import Container from '../../components/Search/Container'
import Footer from '../../components/Footer/Footer'
import { useParams } from 'react-router-dom';

const Search = () => {
  const { data } = useParams();
  const [dataFromChild, setDataFromChild] = useState(0);

  // Callback function to receive data from the child component
  const receiveDataFromChild = (data) => {
    setDataFromChild(data);
  };
  if (data === "hostels" || data === "apartments" || data === "hotels" || data === "guest_houses"){
    return (
      <div className=' overflow-x-hidden'>
        <SearchContainer facility_type={data} sendDataToParent={receiveDataFromChild}/>
        <Container facility_type={dataFromChild}/>
        <Footer/>
      </div>
    )
  }
  return <h1>Error Page!!!!</h1>
 
}

export default Search
