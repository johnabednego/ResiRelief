import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


import ExploreFeed from './ExploreFeed'
import accra from './assets/ghana/accra.jpg'
import east_legon from './assets/ghana/east_legon.jpg'
import kumasi from './assets/ghana/kumasi.jpg'
import cape_coast from './assets/ghana/cape_coast.jpg'
import greater_accra from './assets/ghana/greater_accra.jpg'
import aburi from './assets/ghana/aburi.jpg'
import takoradi from './assets/ghana/takoradi.jpg'
import prampram from './assets/ghana/prampram.jpg'

const Explore = () => {
  const data = [
    {id:1, image:accra, tittle:"Accra", value:"600"},
    {id:2, image:kumasi, tittle:"Kumasi", value:"52"},
    {id:3, image:cape_coast, tittle:"Cape Coast", value:"19"},
    {id:4, image:east_legon, tittle:"East Legon", value:"18"},
    {id:5, image:greater_accra, tittle:"Greater Accra", value:"801"},
    {id:6, image:aburi, tittle:"Aburi", value:"3"},
    {id:7, image:takoradi, tittle:"Takoradi", value:"20"},
    {id:7, image:prampram, tittle:"Prampram", value:"9"},
  ]


  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
     swipeToSlide:true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  const renderSlides = () =>
    data.map(feed => (
      <ExploreFeed image={feed.image} tittle={feed.tittle} value={feed.value} />
    ));
  
  return (
    <div data-aos="flip-right" data-aos-duration="3000" className='shadow-md rounded-md pr-4 sm:rounded-tl-full sm:rounded-tr-full' >
      <Slider {...settings}>
        {renderSlides()}
      </Slider>
    </div>
  )
}

export default Explore
