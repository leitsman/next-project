import Link from 'next/link';
import Image from 'next/image';
import flagMexico from '../../public/images/emojione-v1_flag-for-mexico.svg';


const recoverPassword = () => {
  return (
    <div className="  bg-white  relative w-full m-auto flex justify-center flex-wrap container h-[750px] ">
      <div className=" sm:w-1280 overflow-hidden">
      <div className="bg-white absolute m-auto ">
        <h1 className="text-3xl font-Nunito font-bold  absolute sm:top-[38px] top-[23px]">
          resimex
        </h1>
        <Image src={flagMexico} alt="logo"  className='bg-white  z-10 ml-[124px] sm:mt-[40px] xs:mt-[25px]' />
      </div>
      <div className="sm-w-1280 flex justify-center flex-wrap">
      <div className="mt-[132px] sm:top-[132px] w-[502px] h-[351px] sm:border sm:border-blue rounded flex flex-wrap justify-center">
          <h2 className="font-Nunito text-[22px] font-bold w-full text-center sm:h-[30px] sm:mt-[51px] top-[187px] sm:static xs:absolute">Reset Password</h2>
        <p className=" absolute top-[222px] font-Mulish text-center text-Grey text-[16px] w-[255px] h-[40px]">We send a link to reset you password to your email</p>
      <h4 className="absolute text-[12px] font-Mulish xs:left-[32px] sm:ml-[-280px] mt-[166px] sm:w-[65px]">Your email*</h4>
        <div>
          <input type='text' placeholder=" Enter you email" className=" w-[350px] xs:absolute xs:top-[322px] xs:left-[15px] sm:static rounded-md border-0 py-1.5 text-gray-900 shadow-sm  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-Ligthgray"/>
        </div>
      <button className="absolute sm:top-[391px] top-[395px] bg-blue/40 text-white w-[350px] h-[36px]">SEND EMAIL</button>
      </div>
      <h3 className="absolute top-[504px] text-Grey font-[12px] text-center left-[600px] xs:hidden  sm:block">Or Don t have an account? </h3>
      <Link href="/auth/sing-up" className="absolute left-[790px] font-[12px] top-[504px] font-Mulish  text-blue decoration-blue xs:hidden sm:block">
          {`Sign Up!`}
     </Link>
    </div>
      </div>
      <div className="w-full xs:h-[5rem] sm:h-[111px] xs:absolute xs:-bottom-0 bootom-3 xs:skew-y-1 bg-backgroud "></div>
      <div className='absolute bottom-0 bg-backgroud w-full sm:h-20'></div>
     
    </div>
  );
};

export default recoverPassword;
