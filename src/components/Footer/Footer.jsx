import React from 'react'
import FooterFeed from './FooterFeed'

const data = [
  {
    heading: "Help", list: [
      { tittle: "Help Center", url: "Help Center" },
      { tittle: "FAQs", url: "FAQs" },
      { tittle: "Privacy policy", url: "Privacy policy" },
      { tittle: "Cookie policy", url: "Cookie policy" },
      { tittle: "Terms of use", url: "Terms of use" }
    ]
  },
  {
    heading: "Company", list: [
      { tittle: "About us", url: "About us" },
      { tittle: "Careers", url: "Careers" },
      { tittle: "PointsMax", url: "PointsMax" },
    ]
  },
  {
    heading: "Destinations", list: [
      { tittle: "Regions", url: "Regions" },
      { tittle: "Cities", url: "Cities" },
    ]
  },
  {
    heading: "Partner with us", list: [
      { tittle: "YCS partner portal", url: "YCS partner portal" },
      { tittle: "Partner Hub", url: "Partner Hub" },
      { tittle: "Advertise on ResiRelief", url: "Advertise on ResiRelief" },
    ]
  },
  {
    heading: "Get the app", list: [
      { tittle: "iOS app", url: "iOS app" },
      { tittle: "Android app", url: "Android app" },
    ]
  },
]

const Footer = () => {
  return (
    <div className='items-center justify-center w-full mt-12 py-[38px] px-[16px] flex flex-wrap text-white bg-[#2A4953] '>
      <div className=' border-[#a19f9f] border-b-[1px] pb-3 items-center justify-center  flex flex-wrap'>
        {data.map(feed => {
          return <FooterFeed feed={feed} />
        })}
      </div>
      <div className=' mt-8 w-full text-white text-center justify-center '>
        <h1 className=' text-[25px] font-medium '>All Rights Reserved</h1>
        <h1>All material herein ©2023 ResiRelief Company Ltd.</h1>
      </div>
    </div>
  )
}

export default Footer
