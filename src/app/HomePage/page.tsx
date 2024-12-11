import React from 'react'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa6'
import FoodCategory from '../foodcatagery/page'

import bannerbg from "../../../public/bannerbg.jpg"
import { FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';
import WhyChooseUs from '@/components/whychooseus'



function HomePage() {
  return (
    <>
<section
  className="bg-black"
>
  <div className='relative px-3 lg:px-[30px] xl:px-[135px] flex flex-col-reverse justify-evenly md:flex-row md:items-center md:py-[70px] lg:py-[130px] max-w-[1440px] mx-auto'>
  {/* Background Layer */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-10"
    style={{
      backgroundImage: `url(${bannerbg.src})`,
    }}
  ></div>

  {/* Vertical Social Media Icons */}
  <div
  className="relative flex flex-row left-0 gap-6 justify-center px-0 py-5 md:py-0 lg:py-5 md:pr-4 lg:pr-14 md:flex-col  "
  style={{ position: "relative", height: "100%" }}
>
  <span
    className=" bg-gray-500 absolute h-[1px] top-[50%] left-[2%] w-[22%] md:w-px md:h-[100%] block md:left-[30%] lg:left-[14%] md:top-[-130%] "

  ></span>
  <a
    href="#"
    className="text-white hover:text-[#FF9F0D] text-lg"
    style={{
      display: "block",
      height: "100%",
    }}
  >
    <FaFacebook />
  </a>
  <a href="#" className="text-white hover:text-[#FF9F0D] text-lg">
    <FaTwitter />
  </a>
  <a href="#" className="text-white hover:text-[#FF9F0D] text-lg">
    <FaPinterest />
  </a>
  <span
    className="bg-gray-500 block absolute h-[1px] top-[50%] right-[2%] w-[22%] 
            md:w-[1px] md:h-full md:left-[30%] lg:left-[14%] md:top-[140px] lg:top-[180px] md:bottom-0"
  ></span>
</div>


  {/* Content */}
  <div className="relative z-10 text-white w-full md:w-[43%]">
    <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] whitespace-nowrap  " style={{fontFamily:"Great Vibes"}}>
      Its Quick & Amusing!
    </h1>

    <h1 className="text-[18px] md:text-[40px] xl:text-[50px] font-bold whitespace-nowrap md:whitespace-normal pb-[30px] leading-tight">
      <span className="text-[#FF9F0D]">Th</span>e Art of speed food Quality
    </h1>

    <p className="text-[12px] md:text-[16px] font-normal">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
    </p>

    <div className="flex flex-col md:flex-row items-center md:items-start">
      <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800">
        See More
      </button>
    </div>
  </div>

  {/* Image */}
  <div className="mt-[50px] md:mt-0 relative z-10 md:w-[43%]">
    <Image
      src="/food.png"
      alt="Hero Image"
      width={700}
      height={500}
      className=""
    />
  </div>
  </div>
</section>




       
       
       
       
       
       
       
<section className="bg-black">
  <div className=' px-3 lg:px-[30px] xl:px-[135px] md:py-[70px] grid grid-cols-1 lg:grid-cols-2 lg:gap-10 lg:py-[50px] py-[15px] lg:items-center h-auto max-w-[1440px] mx-auto items-start'>
  {/* Text Content */}
  <div className="text-white">
    <h1 className="text-[#FF9F0D] text-[24px] md:text-[32px] font-greatVibes font-normal whitespace-nowrap" style={{fontFamily:"Great Vibes"}}>
      About us
    </h1>
    <h2 className="text-[18px] md:text-[40px] lg:text-[50px] font-bold whitespace-nowrap lg:whitespace-normal leading-tight">
      <span className="text-[#FF9F0D]">We</span> Create the best foody product
    </h2>
    <p className="text-[12px] md:text-[16px] font-normal mt-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
      pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
      augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed
      vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
    </p>
    <ul className="mt-8 space-y-4">
      <li className="flex items-start text-[12px] md:text-[16px] font-normal">
        <span className="mr-[10px] text-[#FF9F0D]">
          <FaCheck />
        </span>
        Lacus nisi, et ac dapibus sit eu velit in consequat.
      </li>
      <li className="flex items-start text-[12px] md:text-[16px] font-normal">
        <span className="mr-[10px] text-[#FF9F0D]">
          <FaCheck />
        </span>
        Quisque diam pellentesque bibendum non dui volutpat fringilla
      </li>
      <li className="flex items-start text-[10px] md:text-[16px] font-normal">
        <span className="mr-[10px] text-[#FF9F0D]">
          <FaCheck />
        </span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </li>
    </ul>
    <div className="flex flex-col lg:flex-row items-center lg:items-start">
    <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] mb-[20px] hover:bg-yellow-800">
      Read More
    </button>
    </div>
  </div>




  {/* Images Grid */}
  <div className="grid grid-cols-3 lg:grid-cols-2 gap-4 w-full h-full ">
    <div className="w-full h-full lg:col-span-2">
      <Image
        src="/foodpic1.jpeg"
        alt="Main Dish"
        className="object-cover w-full h-[80px] md:h-[180px] lg:h-full rounded-lg " 
        width={700}
        height={500}
      />
    </div>
      <div className="w-full h-full">
        <Image
          src="/foodpic2.jpeg"
          alt="Dish 2"
          className="object-cover w-full h-[80px] md:h-[180px] lg:h-full rounded-lg"
          width={700}
        height={500}
        />
      </div>
      <div className="w-full h-full">
        <Image
          src="/foodpic3.jpeg"
          alt="Dish 3"
          className="object-cover w-full h-[80px] md:h-[180px] lg:h-full rounded-lg"
          width={700}
        height={500}
        />
    </div>
  </div>
  </div>
</section>



<section className="bg-black">
  <div className="px-3 lg:px-[30px] xl:px-[135px] md:py-[70px] grid grid-cols-1 lg:grid-cols-2 lg:gap-10 lg:py-[50px] py-[15px] lg:items-center h-auto max-w-[1440px] mx-auto items-start">
    {/* Text Content */}
    <div className="text-white">
      <h1 className="text-[#FF9F0D] text-[24px] md:text-[32px] font-greatVibes font-normal whitespace-nowrap" style={{ fontFamily: "Great Vibes" }}>
        About us
      </h1>
      <h2 className="text-[18px] md:text-[40px] lg:text-[50px] font-bold whitespace-nowrap lg:whitespace-normal leading-tight">
        <span className="text-[#FF9F0D]">We</span> Create the best foody product
      </h2>
      <p className="text-[12px] md:text-[16px] font-normal mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
        pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
        augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed
        vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
      </p>
      <ul className="mt-8 space-y-4">
        <li className="flex items-start text-[12px] md:text-[16px] font-normal">
          <span className="mr-[10px] text-[#FF9F0D]">
            <FaCheck />
          </span>
          Lacus nisi, et ac dapibus sit eu velit in consequat.
        </li>
        <li className="flex items-start text-[12px] md:text-[16px] font-normal">
          <span className="mr-[10px] text-[#FF9F0D]">
            <FaCheck />
          </span>
          Quisque diam pellentesque bibendum non dui volutpat fringilla
        </li>
        <li className="flex items-start text-[10px] md:text-[16px] font-normal">
          <span className="mr-[10px] text-[#FF9F0D]">
            <FaCheck />
          </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </li>
      </ul>
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] mb-[20px] hover:bg-yellow-800">
          Read More
        </button>
      </div>
    </div>

    {/* Images Grid */}
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full h-full max-w-[700px] mx-auto lg:mx-0">
      <div className="w-full h-full col-span-2 lg:col-span-3 lg:h-auto">
        <Image
          src="/foodpic1.jpeg"
          alt="Main Dish"
          className="object-cover w-full h-[180px] md:h-[250px] lg:h-[300px] rounded-lg"
          width={700}
          height={500}
        />
      </div>
      <div className="w-full h-full">
        <Image
          src="/foodpic2.jpeg"
          alt="Dish 2"
          className="object-cover w-full h-[80px] md:h-[120px] lg:h-[140px] rounded-lg"
          width={700}
          height={500}
        />
      </div>
      <div className="w-full h-full">
        <Image
          src="/foodpic3.jpeg"
          alt="Dish 3"
          className="object-cover w-full h-[80px] md:h-[120px] lg:h-[140px] rounded-lg"
          width={700}
          height={500}
        />
      </div>
    </div>
  </div>
</section>







    <FoodCategory/>
    <WhyChooseUs/>
    </>
  )
}

export default HomePage