import React, { useState } from "react";
import Nav from "../Nav/Nav";
import SignInModal from "../../components/SignIn/SignInModal";
import SignUpModal from "../../components/SignUp/SignUpModal";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import Overview from "./Overview";
import { useLocation } from 'react-router-dom';
import Room from "./Room";
import Facilities from "./Facilities";
import Policies from "./Policies";
import Review from "./Review";
import PicturesModal from "./PicturesModal";



const MoreDetails = () => {
  const signInModal = useSelector((state) => state.signInModal.value);
  const signUpModal = useSelector((state) => state.signUpModal.value);

  const [showPictures, setShowPictures] = useState(false)
  const [details, setDetails] = useState(0);
  const location = useLocation();
  const { state } = location;



  const d_overview = () => setDetails(0);
  const d_rooms = () => setDetails(1);
  const d_facilities = () => setDetails(2);
  const d__reviews = () => setDetails(3);
  const d_policies = () => setDetails(4);

  const images = [
    state.image,"/1_img.png","/2_img.png",
    "/3_img.png","/4_img.png","/5_img.png",
    "/6_img.png",
  ]

if(state){
  return (
    <div>
      {/* //  {/* Navigation bar */}
      <div className="fixed w-full z-50">
        <Nav />
      </div>

      {/* pictures and sub headings */}
      <div className="  relative w-full flex flex-col items-center h-fit justify-center text-center text-xs">
        <div className=" mb-6 flex flex-col items-center justify-center w-full h-fit ">
          <div className=" detailsBody mt-[100px] rounded flex flex-row flex-wrap items-center justify-center h-fit w-full">
            {/* main */}
            <div className=" items-start justify-start ">
              <img
                className=" w-[416px] h-72 shrink-0 object-cover z-[0]"
                alt=""
                src={state.image}
              />
              {/**See all photoes */}
              <div onClick={()=>setShowPictures(true)} className=" float-right -mt-6 relative cursor-pointer text-white my-0 mx-[!important]  right-[8px] bottom-[8px] rounded bg-[rgba(0,0,0,0.5)] shadow-[0px_1px_3px_1px_rgba(0,_0,_0,_0.2)] w-fit overflow-hidden shrink-0 flex flex-row pt-[7px] px-3 pb-[7px] box-border items-start justify-start">
                <div className=" w-fit flex flex-row items-center justify-center gap-[8px]">
                  <div className="w-3 overflow-hidden shrink-0 flex flex-row pt-[1.5px] px-px pb-0.5 box-border items-start justify-start">
                    <img
                      className="relative w-2.5 h-[8.5px]"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className=" w-fit flex flex-row pt-0 pb-[1px] pl-0.5 box-border items-start justify-center">
                    <div className="relative leading-[12px]">
                      See all photos
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*other images*/}
            <div className=" ml-2 flex flex-col items-start justify-center gap-[8px]">
              <img
                className="flex-1 relative max-h-full w-[220px] overflow-hidden object-cover"
                alt=""
                src="/1_img.png"
              />
              <img
                className="flex-1 relative max-h-full w-[220px] overflow-hidden object-cover"
                alt=""
                src="/2_img.png"
              />
            </div>
            <div className=" ml-2 flex flex-col items-start justify-center gap-[8px]">
              <img
                className="flex-1 relative max-h-full w-[220px] overflow-hidden object-cover"
                alt=""
                src="/3_img.png"
              />
              <img
                className="flex-1 relative max-h-full w-[220px] overflow-hidden object-cover"
                alt=""
                src="/4_img.png"
              />
            </div>
            <div className=" ml-2 flex flex-col items-start justify-center gap-[8px]">
              <img
                className="flex-1 relative max-h-full w-[220px] overflow-hidden object-cover"
                alt=""
                src="/5_img.png"
              />
              <img
                className="flex-1 relative max-h-full w-[220px] overflow-hidden object-cover"
                alt=""
                src="/6_img.png"
              />
            </div>
          </div>
          {/* The navigatioins */}
          <div className=" mt-6 text-[#4E4E4E] relative bg-white box-border w-full h-fit text-left text-sm justify-center items-center flex flex-wrap">
            <div className=" rounded border-[1px] border-solid flex-wrap pl-2 w-fit flex justify-center items-center text-center  h-fit py-[0.56rem]">
              <div
                onClick={() => d_overview()}
                className={
                  details === 0
                    ? " text-[#5392F9] mr-4 cursor-not-allowed  top-[16.8px] leading-[20px]"
                    : " my-1 rounded border-[1px] border-solid p-1 cursor-pointer mr-4  top-[16.8px] leading-[20px]"
                }
              >
                Overview
              </div>
              <div
                onClick={() => d_rooms()}
                className={
                  details === 1
                    ? " text-[#5392F9] mr-4  cursor-not-allowed top-[16.8px] left-[95.31px] leading-[20px]"
                    : " my-1 rounded border-[1px] border-solid p-1 cursor-pointer mr-4 top-[16.8px] left-[95.31px] leading-[20px]"
                }
              >
                Rooms
              </div>
              <div
                onClick={() => d_facilities()}
                className={
                  details === 2
                    ? " text-[#5392F9] mr-4 cursor-not-allowed top-[16.8px] left-[171.36px] leading-[20px]"
                    : " my-1 rounded border-[1px] border-solid p-1 cursor-pointer mr-4 top-[16.8px] left-[171.36px] leading-[20px]"
                }
              >
                Facilities
              </div>
              <div
                onClick={() => d__reviews()}
                className={
                  details === 3
                    ? " text-[#5392F9] mr-4 cursor-not-allowed top-[16.8px] left-[260px] leading-[20px]"
                    : " my-1 rounded border-[1px] border-solid p-1 cursor-pointer mr-4 top-[16.8px] left-[260px] leading-[20px]"
                }
              >
                Reviews
              </div>
              <div
                onClick={() => d_policies()}
                className={
                  details === 4
                    ? " text-[#5392F9] mr-4 cursor-not-allowed top-[16.8px] left-[434.21px] leading-[20px]"
                    : " my-1 rounded border-[1px] border-solid p-1 cursor-pointer mr-4 top-[16.8px] left-[434.21px] leading-[20px]"
                }
              >
                Policies
              </div>
            </div>
            {/* price */}
            <div className=" px-6 border-[1px] border-solid top-[17.79px] flex justify-center items-center h-[55.99px] text-right text-xs ">
              <div className="leading-[14px]">from</div>
              <div className=" text-[#E12D2D] text-sm leading-[14px] ml-2">
                ₵
              </div>
              <div className=" ml-1 text-[#E12D2D] text-[22px] leading-[22px]">
                {state.price}
              </div>
            </div>
            {/* view deal */}
            <div className=" px-2 border-[1px] border-y-[1px] border-solid h-[55.99px] flex justify-center items-center">
              <div className=" shadow-md shadow-primary cursor-pointer rounded-10xs bg-[#5392F9] flex flex-row pt-[5px] pb-[7px] pr-[6px] pl-1.5 items-start justify-start text-center text-white">
                <b className=" leading-[19.6px]">VIEW THIS DEAL</b>
              </div>
            </div>
          </div>
        </div>
        {/*  Details*/}
        {details === 0 ? <Overview d_facilities={d_facilities} data={state} /> : null}
        {details === 1 ? <h1><Room data={state}/></h1> : null}
        {details === 2 ? <h1><Facilities/></h1> : null}
        {details === 3 ? <h1><Review data={state}/></h1> : null}
        {details === 4 ? <h1><Policies/></h1> : null}
        <Footer />
      </div>

      {signInModal ? <SignInModal /> : null}
      {signUpModal ? <SignUpModal /> : null}
      {showPictures? <PicturesModal images={images} setShowPictures={setShowPictures}  />: null}
    </div>
  );
}
else{
  return(
    <div className=" w-full h-screen flex align-middle justify-center items-center text-center text-secondary">
      <h1 className=" font-extrabold text-[#FF0000]">
      No Facility Selected <br></br>Go Back!!!
      </h1>
    </div>
  )
}
};

export default MoreDetails;
