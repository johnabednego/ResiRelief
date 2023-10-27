import React, { useEffect, useRef, useState } from 'react'
import Nav from "../../components/Nav/Nav";
import CountrySelector from '../../components/Form/CountrySelector';
const HostelList = () => {
    const [errorMessage, setErrorMessage] = useState("")
    const [hostelName, setHostelName] = useState("")
    const [hostelSlang, setHostelSlang] = useState("")
    const [hostelCity, setHostelCity] = useState("")
    const [hostelTown, setHostelTown] = useState("")
    const [email, setEmail] = useState("")
    const [retypeEmail, setRetypeEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [country, setCountry] = useState("")
    const [hostelDescription, setHostelDescription] = useState("")
    const [isChecked, setIsChecked] = useState(false);
    const [overviewImage, setOverviewImage] = useState()
    const [selectedImages, setSelectedImages] = useState([]);
    const [mapDirectionLink, setMapDirectionLink] = useState('');
    const [urlError, setUrlError] = useState('');

    //Handle Overview Image select
    const handleOverviewImage = (e) => {
        const files = e.target.files;
        const selected = Array.from(files);
        setOverviewImage(selected)
        e.target.value = null;
    }
    const handleRemoveOverviewImage = () => {
        setOverviewImage(null)
    }
    // Handle image selection
    const handleImageSelect = (e) => {
        const files = e.target.files;
        const selected = Array.from(files);
        setSelectedImages([...selectedImages, ...selected]);
        e.target.value = null;
    };

    // Handle image removal
    const handleRemoveImage = (index) => {
        const updatedSelectedImages = [...selectedImages];
        updatedSelectedImages.splice(index, 1);
        setSelectedImages(updatedSelectedImages);
    };

    // Handle image upload to the backend
    const handleImageUpload = async () => {
        const formData = new FormData();

        selectedImages.forEach((image, index) => {
            formData.append(`image-${index}`, image);
        });

        // try {
        //   // Replace 'YOUR_BACKEND_API_URL' with your actual backend API endpoint
        //   const response = await axios.post('YOUR_BACKEND_API_URL', formData, {
        //     headers: {
        //       'Content-Type': 'multipart/form-data',
        //     },
        //   });

        //   // Handle the response from the backend as needed
        //   console.log('Images uploaded successfully:', response.data);
        // } catch (error) {
        //   console.error('Error uploading images:', error);
        // }
    };
    // Check if there are no selected images to recreate the input field
    // const isInputVisible = selectedImages.length === 0;

    const validateUrl = (url) => {
        if (url) {
            try {
                // Attempt to create a new URL instance
                new URL(url);
                setUrlError(''); // Valid URL
            } catch (error) {
                setUrlError('Please enter a valid URL');
            }
        }
        else {
            setUrlError('');
        }
    };

    const handleMapDirectionLinkChange = (e) => {
        const url = e.target.value;
        setMapDirectionLink(url);
        validateUrl(url);
    };


    const handleSubmit = async (e) => {
        e.preventDefault()
        const pattern = /^[0-9+]+$/;
        if (email !== retypeEmail) {
            setErrorMessage("Email Mismatch!!")
        }
        else if (phoneNumber.length < 10 || !pattern.test(phoneNumber)) {
            setErrorMessage("Invalid Phone Number")
        }
        else if (phoneNumber.charAt(0).toString() !== "+") {
            setErrorMessage("Country Code in phone number is required, starting with +")
        }
        else if (country.length < 1) {
            setErrorMessage("Country is requied")
        }
        else if (!isChecked) {
            setErrorMessage("Agree to ResiRelief terms of service")
        }

        else {
            const data = {
                hostelName: hostelName,
                hostelSlang: hostelSlang,
                email: email,
                phoneNumber: phoneNumber,
                country: country,
                agreement: isChecked,
            }
            console.log(data)
        }
    }
    return (
        <div className=" bg-hostelList bg-cover bg-fixed shadow-input h-full">
            <div className=" h-full w-full relative ">
                <div
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    className=" xl:px-12 pb-1 fixed w-full z-10  "
                >
                    <Nav />
                </div>
                <div className="pb-8 pt-28 lg:pt-16 text-white bg-black bg-opacity-60 flex flex-col justify-center items-center">
                    <h1 className="font-bold text-center  text-[35px] sm:text-[45px] mt-[66px]">
                        LIST YOUR HOSTEL ON RESIRELIEF
                    </h1>
                    <h1 className=" text-center text-[20px]  my-[16px]"> Fill the form below to have your hostel listed </h1>
                    {errorMessage?.length > 0 ? <h1 className=' w-full mt-3 mb-3  text-[rgb(220,38,38)] text-lg text-center'>{errorMessage}</h1> : null}
                    <div className='p-3 box-border m-0 basis-full flex-grow-0 max-w-full'>
                        <form onSubmit={handleSubmit} action="" method="post" data-cy="application form">
                            <div className=' box-border flex flex-wrap items-center -m-3 w-[calc(100%_+_24px)] md:w-[100vh]'>
                                <div className=' flex flex-col sm:flex-row p-3 box-border m-0 basis-full flex-grow-0  gap-3 w-[20vh]'>
                                    {/**hostelName */}
                                    <div className=' flex flex-col w-full'>
                                        <div className='pb-1 text-left'>
                                            <span className='text-[14px] leading-5 font-normal'>Hostel Name</span>
                                        </div>
                                        <div className=' box-border flex flex-wrap w-full'>
                                            <div className='w-full flex items-start'>
                                                <input onChange={(e) => setHostelName(e.target.value)} required type="text" name="hostelName" id="hostelName" data-cy="hostelName" placeholder="Hostel Name" className='  m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
                                            </div>
                                        </div>
                                    </div>
                                    {/**Hostel Slang */}
                                    <div className=' w-full flex flex-col'>
                                        <div className='pb-1 text-left'>
                                            <span className='text-[14px] leading-5 font-normal'>Hostel Slang</span>
                                        </div>
                                        <div className=' box-border flex flex-wrap w-full'>
                                            <div className='w-full flex items-start'>
                                                <input onChange={(e) => setHostelSlang(e.target.value)} required type="text" name="hostelSlang" id="hostelSlang" data-cy="hostelSlang" placeholder="Hostel Slang" className='  m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/** email */}
                                <div className=' flex flex-col sm:flex-row p-3 box-border m-0 basis-full flex-grow-0 max-w-full gap-3 w-[20vh]'>
                                    {/**Email */}
                                    <div className=' w-full flex flex-col'>
                                        <div className='pb-1 text-left'>
                                            <span className='text-[14px] leading-5 font-normal'>Email</span>
                                        </div>
                                        <div className=' box-border flex flex-wrap w-full'>
                                            <div className='w-full flex items-start'>
                                                <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" data-cy="email" placeholder="Double-check for typos" className='  m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
                                            </div>
                                        </div>
                                    </div>
                                    {/**Retype Email */}
                                    <div className=' w-full flex flex-col'>
                                        <div className='pb-1 text-left'>
                                            <span className='text-[14px] leading-5 font-normal'>Retype Email</span>
                                        </div>
                                        <div className=' box-border flex flex-wrap w-full'>
                                            <div className='w-full flex items-start'>
                                                <input onChange={(e) => setRetypeEmail(e.target.value)} required type="email" name="confirmEmail" id="confirmEmail" data-cy="confirmEmail" placeholder="" className='  m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/** phone and country */}
                                <div className=' flex flex-col sm:flex-row p-3 box-border m-0 basis-full flex-grow-0 max-w-full gap-3 w-[20vh]'>
                                    {/**Phone Number */}
                                    <div className=' flex flex-col w-full'>
                                        <div className='pb-1 text-left'>
                                            <span className='text-[14px] leading-5 font-normal'>Phone Number</span>
                                        </div>
                                        <div className=' box-border flex flex-wrap w-full'>
                                            <div className='w-full flex items-start'>
                                                <input onChange={(e) => setPhoneNumber(e.target.value)} required type="tel" name="phoneNumber" id="phoneNumber" data-cy="phoneNumber" placeholder="+233240234579" className='  m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
                                            </div>
                                        </div>
                                    </div>
                                    {/**country */}
                                    <div className=' w-full flex flex-col'>
                                        <div className='pb-1 text-left'>
                                            <span className='text-[14px] leading-5 font-normal'>Country</span>
                                        </div>
                                        <div className=' text-black box-border flex flex-wrap w-full'>
                                            <div className='w-full flex items-start'>
                                                <CountrySelector setUserCountry={setCountry} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/**hostel City and Hostel Town */}
                                <div className=' flex flex-col sm:flex-row p-3 box-border m-0 basis-full flex-grow-0  gap-3 w-[20vh]'>
                                    {/**hostel City */}
                                    <div className=' flex flex-col w-full'>
                                        <div className='pb-1 text-left'>
                                            <span className='text-[14px] leading-5 font-normal'>Hostel City</span>
                                        </div>
                                        <div className=' box-border flex flex-wrap w-full'>
                                            <div className='w-full flex items-start'>
                                                <input onChange={(e) => setHostelCity(e.target.value)} required type="text" name="hostelCity" id="hostelCity" data-cy="hostelCity" placeholder="Accra" className='  m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
                                            </div>
                                        </div>
                                    </div>
                                    {/**Hostel Town */}
                                    <div className=' w-full flex flex-col'>
                                        <div className='pb-1 text-left'>
                                            <span className='text-[14px] leading-5 font-normal'>Hostel Town</span>
                                        </div>
                                        <div className=' box-border flex flex-wrap w-full'>
                                            <div className='w-full flex items-start'>
                                                <input onChange={(e) => setHostelTown(e.target.value)} required type="text" name="hostelTown" id="hostelTown" data-cy="hostelTown" placeholder="Legon" className='  m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                  {/**Map Direction */}
                                <div className=' flex flex-col sm:flex-row p-3 box-border m-0 basis-full flex-grow-0  gap-3 w-[20vh]'>
                                    {/**Map Direction Link */}
                                    <div className=' flex flex-col w-full'>
                                        <div className='pb-1 text-left'>
                                            <span className='text-[14px] leading-5 font-normal'>Map Direction Link</span>
                                        </div>
                                        <div className=' box-border flex flex-wrap w-full'>
                                            <div className='w-full flex items-start'>
                                                <input
                                                    value={mapDirectionLink}
                                                    onChange={handleMapDirectionLinkChange}
                                                    required type="text" name="mapDirection" id="mapDirection" data-cy="mapDirection" placeholder="https://maps.app.goo.gl/Fy3Pf4TPFJp5dzCKA" className='  m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
                                            </div>
                                        </div>
                                        {urlError && <p className="text-[#EF4444]">{urlError}</p>}

                                    </div>
                                    {/**Hostel Slang */}
                                    {/* <div className=' w-full flex flex-col'>
                                        <div className='pb-1 text-left'>
                                            <span className='text-[14px] leading-5 font-normal'>Hostel Slang</span>
                                        </div>
                                        <div className=' box-border flex flex-wrap w-full'>
                                            <div className='w-full flex items-start'>
                                                <input onChange={(e) => setHostelSlang(e.target.value)} required type="text" name="hostelSlang" id="hostelSlang" data-cy="hostelSlang" placeholder="Hostel Slang" className='  m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
                                            </div>
                                        </div>
                                    </div> */}
                                </div>

                                <div className=' flex flex-col sm:flex-row p-3 box-border m-0 basis-full flex-grow-0  gap-3 w-[20vh]'>
                                    {/**hostel Description */}
                                    <div className=' flex flex-col w-full'>
                                        <div className='pb-1 text-left'>
                                            <span className='text-[14px] leading-5 font-normal'>Hostel Description</span>
                                        </div>
                                        <div className=' box-border flex flex-wrap w-full'>
                                            <div className='w-full flex items-start'>
                                                <textarea 
                                                rows={10}
                                                cols={30}
                                                onChange={(e) => setHostelDescription(e.target.value)} 
                                                required name="hostelName" id="hostelName" data-cy="hostelName" 
                                                placeholder="e.g: Conveniently situated in Legon-UG, part of Accra, this property puts you close to attractions and
                                                 interesting dining options. This 4-star property is packed with in-house facilities to improve the quality and joy
                                                of your stay." className=' resize-none  m-0 text-[14px] w-full p-2 font-normal text-[#2A2A2E]  bg-[#FFFFFF] border-[1px] 
                                                border-solid  border-[#CED0D4] box-border appearance-none rounded-[4px] ' />
                                            </div>
                                        </div>
                                        {hostelDescription.length>0 && hostelDescription.split(' ').length<30 && <p className="text-[#EF4444]">Must be greater than 30 words</p>}
                                    </div>
                                </div>

                                {/**Images */}
                                <div className=' p-[0.75rem]'>
                                    {/**Overview image */}
                                    <div className=' mb-8'>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            multiple
                                            onChange={handleOverviewImage}
                                            className="hidden"
                                            id="overviewImg"
                                        />
                                        <label
                                            htmlFor="overviewImg"
                                            className="bg-blue-500 text-white p-2 rounded cursor-pointer"
                                        >
                                            Upload Overview Image
                                        </label>
                                        {overviewImage?.map((image, index) => (
                                            <div className="my-4">
                                                {/* <div onClick={() => handleRemoveOverviewImage()} className='w-full flex flex-row-reverse'>
                                                <button className=' z-10 -mb-[25px] bg-[#EF4444] text-white px-1 py-0 font-bold text-[20px] rounded-tl-lg '>x</button>
                                            </div> */}
                                                <img
                                                    src={URL.createObjectURL(image)}
                                                    className=" rounded-md w-[280px] h-[280px] shadow-lg"
                                                />
                                            </div>))}
                                    </div>

                                    {/**Other Images */}
                                    <div className=''>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            multiple
                                            onChange={handleImageSelect}
                                            className="hidden"
                                            id="imageInput"
                                        />
                                        <label
                                            htmlFor="imageInput"
                                            className="bg-blue-500 text-white p-2 rounded cursor-pointer"
                                        >
                                            Upload Other Images
                                        </label>
                                        <div className=' justify-center sm:justify-start w-full flex flex-wrap gap-3'>
                                            {selectedImages.map((image, index) => (
                                                <div key={index} className="my-4">
                                                    <div onClick={() => handleRemoveImage(index)} className='w-full flex flex-row-reverse'>
                                                        <button className=' z-[3] -mb-[25px] bg-[#EF4444] text-white px-1 py-0 font-bold text-[20px] rounded-tl-lg '>x</button>
                                                    </div>
                                                    <img
                                                        src={URL.createObjectURL(image)}
                                                        alt={`Selected ${index}`}
                                                        className=" rounded-md w-[280px] h-[280px] shadow-lg"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        {/* {selectedImages.length > 0 && (
                                            <button
                                                onClick={handleImageUpload}
                                                className="bg-blue-500 text-white p-2 rounded"
                                            >
                                                Upload Images
                                            </button>
                                        )} */}
                                    </div>
                                </div>

                                {/**Check Box */}
                                <div className='flex items-baseline p-3 box-border m-0 basis-full flex-grow-0 max-w-full gap-3'>
                                    <input onChange={() => setIsChecked(!isChecked)} type="checkbox" checked={isChecked} name="" id="" />
                                    <span className='text-[14px] leading-5 font-normal'>I agree to ResiRelief’s terms of service</span>
                                </div>
                                {/** Submit button */}
                                <div className='transition-all duration-150 ease-in-out delay-0 p-3 box-border m-0 basis-full flex-grow-0 max-w-full'>
                                    <button type="submit" className=' signinButton relative border-none p-3 rounded-[4px] select-none text-white w-full '>
                                        <div className='flex items-center justify-center'>
                                            <div className=''>
                                                <span className='text-[14px] leading-5 font-medium'>Submit</span>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HostelList
