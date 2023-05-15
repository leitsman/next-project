import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import carouselInfo from '../../carouselInfo.json';
import Alert from '../../components/sweetAlert/Alert';
import flagMexico from '../../public/images/emojione-v1_flag-for-mexico.svg';

const login = () => {
  return (
    <>
      <div className="lg:flex">
        <div className=" lg:w-full">
          <header className=" min-w-full mx-auto xs:h-24 xs:flex xs:justify-start xs:items-center xs:p-8 xs:gap-3 lg:p-4 lg:h-min">
            <h1 className="font-bold text-2xl">resimex</h1>
            <Image src={flagMexico} alt="logo" width={30} />
          </header>
          <main className="max-w-screen-xl mx-auto">
            <section className="xs:p-8 sm:max-w-[600px] mx-auto xs:mb-5 lg:mb-0">
              <h2 className="font-semibold text-2xl text-DarkBlue">
                Welcome to you Resimex
              </h2>
              <span>Log in to your account.</span>
              <form className="w-full mx-auto rounded-md pt-9 mb-5">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Your username{''}
                    <span className="text-color text-red-600">*</span>
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue bg-Ligthgray"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your username"
                  ></input>
                </div>
                <div className="mb-2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password{''}
                    <span className="text-color text-red-600">*</span>
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue bg-Ligthgray"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                  ></input>
                </div>
                <Link href="/" className="underline block mb-4">
                  Forgot you password?
                  <span className="text-blue"> login</span>
                </Link>
                <button
                  className="w-full bg-blue opacity-50 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-blue hover:opacity-100 transition duration-300"
                  type="submit"
                >
                  SIGN UP
                </button>
              </form>
              <Link href="/" className="block text-center">
                Or Don’t have an account?
                <span className="text-blue underline"> login</span>
              </Link>
            </section>
          </main>
          <div className="xs:hidden lg:block lg:overflow-hidden lg:min-w-full lg:h-24 self-end lg:relative">
            <div className="xs:skew-y-3 bg-backgroud w-full h-56 absolute lg:-bottom-40"></div>
          </div>
        </div>
        <aside className="xs:w-full xs:h-[24.125rem] sm:h-[25rem] md:h-[19rem] xs:relative xs:overflow-hidden xs:-z-10 lg:shrink-[1] lg:overflow-visible lg:w-[550px] lg:h-screen">
          <div className="xs:w-full xs:h-[26.1875rem] sm:h-[22rem] md:h-[16rem] xs:absolute xs:-bottom-12 xs:skew-y-3 bg-backgroud lg:hidden"></div>
          <Swiper
            modules={[Navigation, Pagination, EffectFade, Autoplay]}
            effect="slide"
            centeredSlides
            pagination={{ clickable: true }}
            direction="horizontal"
            simulateTouch
            rewind
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            className="xs:relative z-10 xs:top-[5%] sm:top-[14%] md:-top-[5%] lg:block lg:static lg:p-0 lg:h-full"
          >
            {carouselInfo.map((e) => (
              <SwiperSlide key={e.quote}>
                <div className="xs:flex xs:flex-row gap-8 xs:p-6 lg:p-0 justify-evenly  lg:h-full lg:block">
                  <Image
                    src={e.img}
                    alt={e.name}
                    className="inline-block min-w-[10.1875rem] min-h-[16.1875rem] lg:h-full lg:w-auto"
                    width={160}
                    height={200}
                  ></Image>
                  <blockquote className="flex flex-col justify-center gap-4 sm:max-w-[250px] lg:absolute lg:bottom-14 text-White lg:ml-5 lg:gap-1">
                    <p>{e.quote}</p>
                    <footer>{e.name}</footer>
                    <span>{e.country}</span>
                  </blockquote>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </aside>
      </div>
      <Alert></Alert>
    </>
  );
};

export default login;
