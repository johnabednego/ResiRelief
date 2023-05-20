import React from 'react'
import Tittle from '../Tittle'
import Feed from './Feed'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";
const Feedback = () => {
    const data = [
        { id: 1, tittle: "WestView Homes Apartment", location: "Accra", message: "I will keep on recommending ResiRelief to my friends.", from: "Abednego from United States" },
        { id: 2, tittle: "South Homes Hotel", location: "Kumasi", message: "We booked Hotel Eucalyptus through ResiRelief after reading a handful of reviews, and it was easily the best.", from: "Fred from Accra" },
        { id: 3, tittle: "East Homes Hostel", location: "East Legon", message: "I could not have asked for a better stay than East Legon. Thanks to ResiRelief.", from: "Vanessa from Dubai" },
        { id: 4, tittle: "Savana Homes Hotel", location: "Cape Coast", message: "The location for this hotel made that so easy.  ResiRelief price was fantastic.", from: "Richard from Canada" },
        { id: 5, tittle: "Holiday Inn Oyum", location: "Accra", message: "Thanks ResiRelief for letting me change room without charge and rebate the difference. Nice staffs ResiRelief and Holiday Inn!", from: "Stephen from United Kingdom" },
        { id: 6, tittle: "Heritage Hotel", location: "East Legon", message: "We got a great last minute rate with ResiRelief and this room was spacious with a comfortable and warm bed.", from: "Henry from United States" },
        { id: 7, tittle: "Grant Guest House", location: "Kumasi", message: "Started with stress, ended with joy. Thanks ResiRelief.", from: "Pheobe from Brazil" },
        { id: 8, tittle: "UG Guest Center", location: "University of Ghana", message: "Our experience was truely memorable and hastle free. All thanks to ResiRelief and UG :)", from: "Mathias from United Kingdom" },
        { id: 9, tittle: "Ghana  Best", location: "Tamale", message: "Looks exactly what is posted here in ResiRelief. Great service and awesome stay!", from: "Diana from India" },
        { id: 10, tittle: "Comfort Zone Hotel", location: "Tema", message: "The location for this hotel made that so easy.  ResiRelief price was fantastic.", from: "John from Northen Ghana" }
    ]


    return (
        <div className=' sm:flex justify-center items-center -mt-[50px]'>
            <div>
                <div className='px-8 justify-center items-center w-full sm:flex text-center ' >
                    <Tittle tittle="Overheard from travelers and clients" subtittle="" />
                </div>
                <div
                
                data-aos="fade-left" data-aos-duration="3000"
                >

                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 0.5,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                    
                >
                      {
                    data.map(d => {
                        return <SwiperSlide ><Feed tittle={d.tittle} location={d.location} message={d.message} from={d.from} /></SwiperSlide>
                    })
                }

                </Swiper>
                </div>

              

            </div>
        </div>
    )
}

export default Feedback
