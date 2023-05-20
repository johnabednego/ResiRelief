import React,{useEffect} from 'react';
import { useSelector } from 'react-redux'
import Home from './pages/Home/Home';
import Aos from 'aos'
import "aos/dist/aos.css"
import About from './pages/About/About';
import Contact from './pages/Contact/Contact'
function App() {
  const pageNumber = useSelector((state) => state.page.value)
  useEffect(() => {
    Aos.init()
  })
  return (
   <div>
    {/* {pageNumber===1?<About/>:<Home/>} */}
    <Contact/>
   </div>
  );
}

export default App;
