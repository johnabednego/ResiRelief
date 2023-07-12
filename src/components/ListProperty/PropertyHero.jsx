import React from "react";
import { useSelector } from "react-redux";
import hostel from "./assets/hostel.jpg";
import apartment from "./assets/apartment.jpg";
import guest from "./assets/guest.jpg";
import hotel from "./assets/hotel.jpg";
import Nav from "../Nav/Nav";
import SignInModal from "../../components/SignIn/SignInModal";
import SignUpModal from "../../components/SignUp/SignUpModal";
import {ApartTrue} from '../../features/page/ListProperty/apartmentModal'
import {HostTrue} from '../../features/page/ListProperty/hostelModal'
import {HotTrue} from '../../features/page/ListProperty/hotelModal'
import {GuestHouseTrue} from '../../features/page/ListProperty/guestHouseModal'
import { useDispatch } from 'react-redux'

const PropertyHero = () => {
  const dispatch = useDispatch()
  const signInModal = useSelector((state) => state.signInModal.value);
  const signUpModal = useSelector((state) => state.signUpModal.value);
  return (
    <div className="overflow-hidden pb-8">
      <div className=" h-full w-full relative ">
        <div
          data-aos="zoom-in"
          data-aos-duration="3000"
          className=" xl:px-12 pb-1 fixed w-full z-10  "
        >
          <Nav />
        </div>
        <div className=" pt-28 lg:pt-16 bg-white">
          <h1 className=" font-bold text-center text-primary text-[35px] sm:text-[45px] mt-[66px]">
            LIST YOUR PROPERTY ON RESIRELIEF
          </h1>
          <p className=" text-center text-primary my-[16px]">
            Get the profits, bookings, and customers you've been missing by
            listing for free on ResiRelief, today!
          </p>
          {/**List 1 */}
          <div className=" px-1 sm:px-3 flex flex-col md:flex-row justify-center items-center md:items-stretch gap-4 box-border">
            {/**Hostel */}
            <div
              data-aos="fade-left"
              data-aos-duration="3000"
              className=" h-fit sm:h-auto basis-full box-border rounded-[16px] px-3 sm:px-0 listType relative flex flex-grow flex-shrink sm:basis-0 bg-white w-full max-w-full md:max-w-[542px] min-h-[230px] border-[1px] border-solid border-[#3171d9] overflow-hidden  "
            >
              <div className=" listTittle box-border mt-6 lg:mt-6 mr-[212px] md:mr-[150px] lg:mr-[212px] mb-0 ml-4 flex flex-col justify-between">
                <div className=" box-border">
                  <h1 className=" box-border mx-0 my-2 text-[30px]">
                    <strong>HOSTEL</strong>
                  </h1>
                  <p className="text-[14px] text-center sm:text-left">
                    An establishment which provides lodging for students,
                    workers, and travellers.
                  </p>
                </div>
                <button onClick={()=>dispatch(HostTrue())} className=" listButton min-w-[175px] w-fit mx-0 my-4 text-white bg-[#3171d9] border-[#3171d9] rounded-[100px] min-h-[42px] inline-block font-semibold text-center touch-manipulation cursor-pointer border-[1px] border-solid border-transparent whitespace-nowrap text-[14px] select-none px-[15px] py-[10px]">
                  <span>List HOSTEL</span>
                </button>
              </div>
              <div className=" listTypeImage absolute inline-block right-0 w-full h-full max-w-[150px] sm:max-w-[212px] md:max-w-[150px] lg:max-w-[212px] overflow-hidden rounded-tl-full rounded-bl-full box-border">
                <img
                  src={hostel}
                  alt="hostel"
                  className=" object-cover w-full h-full box-border"
                />
              </div>
            </div>

            {/**Apartment */}
            <div
              data-aos="fade-right"
              data-aos-duration="3000"
              className=" h-fit sm:h-auto basis-full box-border rounded-[16px] px-3 sm:px-0 listType relative flex flex-grow flex-shrink sm:basis-0 bg-white w-full max-w-full md:max-w-[542px] min-h-[230px] border-[1px] border-solid border-[#3171d9] overflow-hidden  "
            >
              <div className=" listTittle box-border mt-6 lg:mt-6 mr-[212px] md:mr-[150px] lg:mr-[212px] mb-0 ml-4 flex flex-col justify-between">
                <div className=" box-border">
                  <h1 className=" box-border mx-0 my-2 text-[30px]">
                    <strong>Apartment</strong>
                  </h1>
                  <p className="text-[14px] text-center sm:text-left">
                    A room or suite of rooms designed as a residence and
                    generally located in a building occupied by more than one
                    household.
                  </p>
                </div>
                <button onClick={()=>dispatch(ApartTrue())} className=" listButton min-w-[175px] w-fit mx-0 my-4 text-white bg-[#3171d9] border-[#3171d9] rounded-[100px] min-h-[42px] inline-block font-semibold text-center touch-manipulation cursor-pointer border-[1px] border-solid border-transparent whitespace-nowrap text-[14px] select-none px-[15px] py-[10px]">
                  <span>List Apartment</span>
                </button>
              </div>
              <div className=" listTypeImage absolute inline-block right-0 w-full h-full max-w-[150px] sm:max-w-[212px] md:max-w-[150px] lg:max-w-[212px] overflow-hidden rounded-tl-full rounded-bl-full box-border">
                <img
                  src={apartment}
                  alt="apartment"
                  className=" object-cover w-full h-full box-border"
                />
              </div>
            </div>
          </div>

          {/**List 2 */}
          <div className=" px-1 sm:px-3 mt-3 flex flex-col md:flex-row justify-center items-center md:items-stretch gap-4 box-border">
            {/**Guest House */}
            <div
              data-aos="flip-right"
              data-aos-duration="3000"
              className=" h-fit sm:h-auto basis-full box-border rounded-[16px] px-3 sm:px-0 listType relative flex flex-grow flex-shrink sm:basis-0 bg-white w-full max-w-full md:max-w-[542px] min-h-[230px] border-[1px] border-solid border-[#3171d9] overflow-hidden  "
            >
              <div className=" listTittle box-border mt-6 lg:mt-6 mr-[212px] md:mr-[150px] lg:mr-[212px] mb-0 ml-4 flex flex-col justify-between">
                <div className=" box-border">
                  <h1 className=" box-border mx-0 my-2 text-[30px]">
                    <strong>Guest House</strong>
                  </h1>
                  <p className="text-[14px] text-center sm:text-left">
                    A private house offering accommodation to paying guests.
                  </p>
                </div>
                <button onClick={()=>dispatch(GuestHouseTrue())} className=" listButton min-w-[175px] w-fit mx-0 my-4 text-white bg-[#3171d9] border-[#3171d9] rounded-[100px] min-h-[42px] inline-block font-semibold text-center touch-manipulation cursor-pointer border-[1px] border-solid border-transparent whitespace-nowrap text-[14px] select-none px-[15px] py-[10px]">
                  <span>List Guest House</span>
                </button>
              </div>
              <div className=" listTypeImage absolute inline-block right-0 w-full h-full max-w-[150px] sm:max-w-[212px] md:max-w-[150px] lg:max-w-[212px] overflow-hidden rounded-tl-full rounded-bl-full box-border">
                <img
                  src={guest}
                  alt="guest house"
                  className=" object-cover w-full h-full box-border"
                />
              </div>
            </div>

            {/**Hotel */}
            <div
              data-aos="flip-left"
              data-aos-duration="3000"
              className=" h-fit sm:h-auto basis-full box-border rounded-[16px] px-3 sm:px-0 listType relative flex flex-grow flex-shrink sm:basis-0 bg-white w-full max-w-full md:max-w-[542px] min-h-[230px] border-[1px] border-solid border-[#3171d9] overflow-hidden  "
            >
              <div className=" listTittle box-border mt-6 lg:mt-6 mr-[212px] md:mr-[150px] lg:mr-[212px] mb-0 ml-4 flex flex-col justify-between">
                <div className=" box-border">
                  <h1 className=" box-border mx-0 my-2 text-[30px]">
                    <strong>HOTEL</strong>
                  </h1>
                  <p className="text-[14px] text-center sm:text-left">
                    An establishment providing accommodation, meals, and other
                    services for travellers and tourists.
                  </p>
                </div>
                <button onClick={()=>dispatch(HotTrue())} className=" listButton min-w-[175px] w-fit mx-0 my-4 text-white bg-[#3171d9] border-[#3171d9] rounded-[100px] min-h-[42px] inline-block font-semibold text-center touch-manipulation cursor-pointer border-[1px] border-solid border-transparent whitespace-nowrap text-[14px] select-none px-[15px] py-[10px]">
                  <span>List HOTEL</span>
                </button>
              </div>
              <div className=" listTypeImage absolute inline-block right-0 w-full h-full max-w-[150px] sm:max-w-[212px] md:max-w-[150px] lg:max-w-[212px] overflow-hidden rounded-tl-full rounded-bl-full box-border">
                <img
                  src={hotel}
                  alt="property-type"
                  className=" object-cover w-full h-full box-border"
                />
              </div>
            </div>
          </div>

          {/**--------- */}
        </div>
      </div>
      {signInModal ? <SignInModal /> : null}
      {signUpModal ? <SignUpModal /> : null}
    </div>
  );
};

export default PropertyHero;
