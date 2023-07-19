import React, { useEffect } from 'react'
import SearchContainer from '../../components/Search/SearchContainer'
const Search = () => {
  useEffect(() => {
    const handleWindowLoad = () => {
      // Reset the zoom level
      window.resizeTo(window.innerWidth, window.innerHeight);
    };

    // Add event listener to trigger on window load
    window.addEventListener('load', handleWindowLoad);

    return () => {
      // Clean up the event listener
      window.removeEventListener('load', handleWindowLoad);
    };
  }, []);
  return (
    <div>
      <SearchContainer/>
    </div>
  )
}

export default Search
