import axios from 'axios'
import { useState,useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import flagMexico from '../../../public/images/emojione-v1_flag-for-mexico.svg';


const StepOne = () => {
  return (
    <div className="mr-auto b bg-white h-[1214px] relative w-full">
      <div className="container">
      <header className="w-full xs:h-12 xs:flex xs:justify-start xs:items-center xs:p-8 xs:gap-3 lg:p-5 bg-backgroud lg:py-8 lg:px-20">
        <h1 className="font-bold text-2xl">resimex</h1>
        <Image src={flagMexico} alt="logo" width={30} />
      </header>
        <div>
          <Link href="/" className="top-[195px] left-[150px] absolute font-Mulish text-[12px] text-blue">
          {`<Back to home`}
         </Link>
          <h2 className="font-Nunito font-bold text-[32px] absolute top-[229px] left-[149px] text-DarkBlue">
            Your personal information
          </h2>
          <div className="w-[665px] h-[679px] border-backgroud border-solid ml-[150px] top-[302px] rounded-lg border-2 shadow-lg absolute">
            <input
              placeholder="Legal Name"
              type="text"
              className="w-[548px] border-b-2 ml-[43px] mt-[91px]  placeholder-black placeholder-Mulish outline-none "
            />
            <input
              type="text"
              placeholder="Nationality"
              className="w-[282px] border-b-2 ml-[43px] mt-[36px]  placeholder-black placeholder-Mulish outline-none"
            />
            <input
              type="text"
              placeholder="Your Gender"
              className="w-[242px] border-b-2 ml-[43px] mt-[36px]  placeholder-black placeholder-Mulish outline-none"
            />
            <input
              placeholder="Your Residence"
              type="text"
              className="w-[548px] border-b-2 ml-[43px] mt-[36px]  placeholder-black placeholder-Mulish outline-none"
            />
            <input
              type="text"
              placeholder="Residence adress"
              className="w-[325px] border-b-2 ml-[43px] mt-[36px]  placeholder-black placeholder-Mulish outline-none"
            />
            <input
              type="text"
              placeholder="Postcode"
              className="w-[167px] border-b-2 ml-[43px] mt-[36px] placeholder-black placeholder-Mulish outline-none"
            />
            <input
              placeholder="Contact Phone"
              type="text"
              className="w-[548px] border-b-2 ml-[43px] mt-[36px] placeholder-black placeholder-Mulish outline-none"
            />
            <input
              placeholder="Email"
              type="text"
              className="w-[548px] border-b-2 ml-[43px] mt-[36px]  placeholder-black placeholder-Mulish outline-none"
            />
            <input
              type="text"
              placeholder="Your job"
              className="w-[282px] border-b-2 ml-[43px] mt-[36px] placeholder-black placeholder-Mulish outline-none"
            />
            <input
              type="text"
              placeholder="Date of birth"
              className="w-[242px] border-b-2 ml-[43px] mt-[36px]  placeholder-black placeholder-Mulish outline-none"
            />
            <input
              placeholder="Any comments"
              type="text"
              className="w-[548px] border-b-2 ml-[43px] mt-[36px]  placeholder-black placeholder-Mulish outline-none"
            />
            <button className="bg-blue w-[548px] h-[56px] text-white rounded-md mt-[37px] ml-[43px]"
            type="submit" >
              SAVE AND CONTINUE
            </button>
          </div>
          <div className="bg-backgroud w-[285px] h-[343px] rounded-lg shadow-lg absolute top-[302px] left-[845px] flex justify-center flex-wrap">
            <h3 className="text-[22px] mt-[35px] text-DarkBlue font-bold w-[226px] h-[44px] font-Nunito leading-[22px]">
              Help & frequency questions
            </h3>
            <p className="w-[233px] font-Mulish text-base  leading-5">
              Lifestyle choices vary, which is why we take the time to learn
              about your individual situation and requirements.
              <br />
              <br />
              We ll assist you from start to ﬁnish, ensuring you have the
              insight and knowledge needed to succeed.
            </p>
          </div>
        </div>
        <div className="bg-DarkBlue flex  pl-[98px]  justify-between h-[136px] m-auto absolute bottom-0 w-full">
        <div className="flex items-center pt-[40px] pb-[40px]">
          <div className="bg-white rounded-full w-[55px] h-[55px] flex flex-col justify-center items-center ">
            <Image
              src="/images/Vector(1).png"
              alt="Picture of the author"
              className=""
              width={25}
              height={20}
            />
          </div>

          <p className="font-medium text-[16px] leading-[19.36px] w-[216px] h-[19px] text-white ml-[10px] ">
            contact.forwork@gmail.com
          </p>
        </div>
        <div className="flex items-center justify-center mr-[23px]  text-white">
          <Link href="/" title="Home" className="mr-4">
            Terms and Condition
          </Link>
          <br />
          <Link href="/" title="Home" className="mr-4">
            Privacy polity
          </Link>
          <br />
          <Link href="/" title="Home" className="mr-4">
            All right reserved
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};
export default StepOne;
