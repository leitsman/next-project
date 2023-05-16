import Image from 'next/image';
import Link from 'next/link';
import iconSend from '../public/images/carbon_send-alt-filled.png';
import flagMexico from '../public/images/emojione-v1_flag-for-mexico.svg';
import iconEmail from '../public/images/iconEmail.svg';
import styles from '../styles.module.css';

const homefix = () => {
  return (
    <>
      <header className="w-full xs:flex xs:justify-start xs:items-center xs:px-8 xs:py-3 xs:gap-3 lg:p-5 bg-backgroud lg:py-8 lg:px-20">
        <div className="mx-auto w-full max-w-7xl flex xs:justify-start sm:justify-around">
          <Link href="/" className="flex gap-2 items-center">
            <h1 className="font-bold text-2xl leading-5 pb-1">resimex</h1>
            <Image src={flagMexico} alt="logo" width={30} />
          </Link>
          <ul className="xs:hidden sm:flex font-Nunito font-medium gap-4 items-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Testimonies</Link>
            </li>
            <li>
              <Link href="/">Contacts</Link>
            </li>
          </ul>
          <button className="bg-blue text-White py-2 px-4 rounded-lg xs:hidden sm:block">
            Get started
          </button>
        </div>
      </header>
      <main className="bg-Ligthgray pb-20">
        <section className="bg-backgroud pb-10">
          <div className="max-w-7xl mx-auto">
            <h1 className="pb-8 pt-12 text-center">
              <span className="md:hidden inline-block font-Nunito font-semibold text-4xl px-2 rotate-[24.93deg]">{`Let's`}</span>
              <span className="md:hidden inline-block font-Nunito font-semibold text-4xl px-2 rotate-[-14.8deg]">
                do it
              </span>
              <span className="md:hidden inline-block font-Nunito font-semibold text-4xl px-2 rotate-[19.23deg]">
                together
              </span>
              <span className="xs:hidden md:inline-block font-Nunito font-semibold text-4xl px-4 rotate-[24.93deg]">
                We
              </span>
              <span className="xs:hidden md:inline-block font-Nunito font-semibold text-4xl px-4 rotate-[-14.8deg]">
                love to
              </span>
              <span className="xs:hidden md:inline-block font-Nunito font-semibold text-4xl px-4 rotate-[19.23deg]">
                help you!
              </span>
            </h1>
            <div className="relative h-10 mb-8">
              <Image
                src="/images/Group 2.png"
                alt="our Team"
                width={60}
                height={60}
                className="absolute left-[30%]"
              />
              <Image
                src="/images/Group 3.png"
                alt="You"
                width={40}
                height={40}
                className=" absolute right-[30%]"
              />
            </div>
          </div>
          <div className="relative overflow-hidden max-w-7xl mx-auto">
            <Image
              className="relative right-[33.5%] -z-0 sm:right-[15%] md:right-0"
              src="/images/homeMexicoMap.svg"
              alt="homeMexicoMap"
              width={496}
              height={341}
            />
            <Image
              className=" absolute -left-[5%] top-0 sm:left-[10%] md:left-[20%]"
              src="/images/Group 12.png"
              alt="sayHola"
              width={170}
              height={170}
            />
            <div className="font-Nunito absolute top-2 right-1 w-[58%] p-3 max-w-[430px] sm:right-[10%]">
              <p>
                <strong className="font-bold">
                  Global citizenship and residency at your fingertips
                </strong>{' '}
                Everyone has the opportunity to thrive, no matter where home is
              </p>
              <Image
                className="mr-auto mt-5 xs:hidden md:block"
                src="/images/Group 25.png"
                alt="people"
                width={370}
                height={71}
              ></Image>
            </div>
            <Image
              className="mx-auto md:hidden"
              src="/images/Group 25.png"
              alt="people"
              width={370}
              height={71}
            ></Image>
          </div>
        </section>
        <section>
          <div className="w-full h-10 sm:h-20 relative bg-backgroud">
            <div className={styles.home__triangle}></div>
            <div className={styles.home__poligon_top}></div>
          </div>
          <div className="bg-White">
            <div className="max-w-7xl mx-auto flex justify-center items-center xs:flex-col pt-20 sm:pb-20 sm:flex-row sm:flex-wrap md:gap-7">
              <Image
                src="/images/photo.png"
                alt="logo"
                width={323}
                height={203}
              />
              <div className="p-6 xs:mb-10 sm:max-w-[400px] md:max-w-[500px] sm:mb-0">
                <h2 className=" font-Nunito font-bold text-3xl text-DarkBlue">
                  The most valuable investment you may ever make
                </h2>
                <span className="inline-block h-2 w-7 bg-blue"></span>
                <p className="pb-5">
                  Resimex is a multidisciplinary firm offering bespoke residence
                  and citizenship solutions in Mexico.
                </p>
                <p>
                  Whether it’s matching you to your ideal investment, Golden
                  Visa program or tax benefit, we help investors successfully
                  uproot their lives and lifestyles.
                </p>
              </div>
            </div>
          </div>
          <div className="FIGURE w-full xs:h-8 lg:h-14 relative xs:mb-5 bottom-[1px] md:mb-10">
            <div className={styles.header__poligon_bottom}></div>
          </div>
        </section>
        <section>
          <div className="flex xs:flex-col sm:flex-row sm:flex-wrap sm:justify-center">
            <div className="p-6 mb-10 sm:max-w-[400px]">
              <h2 className=" font-Nunito font-bold text-3xl text-DarkBlue">
                Seamless service targeting your unique needs
              </h2>
              <span className="inline-block h-2 w-7 bg-blue"></span>
              <p>
                Lifestyle choices vary, which is why we take the time to learn
                about your individual situation and requirements.
              </p>
              <p>
                We’ll assist you from start to finish, ensuring you have the
                insight and knowledge needed to succeed.
              </p>
            </div>
            <div className="text-center p-6 bg-White rounded-xl xs:mx-3 mb-20 sm:max-w-[400px]">
              <div className="w-[70px] h-[70px] bg-slate-500 rounded-[50%] mx-auto"></div>
              <h3 className=" font-Nunito font-bold text-xl text-DarkBlue">
                Residency Programs
              </h3>
              <span className="inline-block h-2 w-7 bg-blue"></span>
              <p>
                Mexican residency safeguards against future instability and
                opens up a world of opportunities for investors and their
                families. A Golden Visa permit provides visa-free access to many
                countries across the globe. Evaluate which European residency
                program is right for you and your family.
              </p>
              <button className="bg-blue p-2 rounded-xl mt-7 text-White">
                <span className="xs:inline md:hidden">Send Message</span>
                <span className="xs:hidden md:inline">Get started</span>
              </button>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center mb-12">
            <h2 className="font-Nunito font-bold text-3xl text-DarkBlue">
              Why Choose Us
            </h2>
            <span className="inline-block h-2 w-7 bg-blue"></span>
          </div>
          <div className="flex xs:flex-col xs:items-center sm:flex-row sm:flex-wrap sm:justify-center gap-y-8">
            <div className="text-center xs:p-7 sm:p-5 bg-White rounded-xl xs:mx-6 xs:mb-3 sm:mb-0 xs:max-w-[300px] sm:max-w-[250px]">
              <h3 className=" font-Nunito font-bold text-xl text-DarkBlue mb-3">
                Secure and Safe
              </h3>
              <p>
                World-class data centers and state-of-the-art security. Your
                credit card information will never be exposed to any government
                websites!
              </p>
            </div>
            <div className="text-center xs:p-7 sm:p-5 bg-White rounded-xl xs:mx-6 xs:mb-3 sm:mb-0 xs:max-w-[300px] sm:max-w-[250px] h-[224px]">
              <h3 className=" font-Nunito font-bold text-xl text-DarkBlue mb-3">
                Speed and Simplicity
              </h3>
              <p>
                Easy, traveler-friendly application process. Simple and much
                less complicated than dealing with foreign governments.
              </p>
            </div>
            <div className="text-center xs:p-7 sm:p-5 bg-White rounded-xl xs:mx-6 xs:mb-3 sm:mb-0 xs:max-w-[300px] sm:max-w-[250px] h-[224px]">
              <h3 className=" font-Nunito font-bold text-xl text-DarkBlue mb-3">
                Awesome support
              </h3>
              <p>
                Our customer support is ready to help 24/7. We want you to enjoy
                your travels and avoid the stress of getting a residence!
              </p>
            </div>
          </div>
        </section>
      </main>
      <aside className="bg-Ligthgray h-[615px] bg-[url('/images/Rectangle9.png')] bg-no-repeat bg-cover bg-center flex items-center justify-center">
        <div className="xs:my-7 xs:mx-3 items-center justify-center xs:p-9 shadow-md xs:border-2 xs:border-Lightgray rounded-md lg:max-w-2xl bg-White">
          <form className="mx-auto w-full xs:max-w-[550px] md:w-[600px] font-Mulish">
            {/* 1 */}
            <div className="mb-5 flex">
              <label
                htmlFor="Name"
                className="text-base font-medium text-DarkGrey"
              >
                Your name
              </label>
              <input
                type="text"
                name="Name"
                id="Name"
                placeholder=""
                className="w-full border-Ligthgray bg-White border-2 py-3 px-6 text-base font-medium text-DarkGrey outline-none focus:border-blue focus:shadow-md"
              />
            </div>
            <div className="mb-5 flex">
              <label
                htmlFor="email"
                className="text-base font-medium text-DarkGrey"
              >
                Your Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder=""
                className="w-full border-Ligthgray bg-White border-2 py-3 px-6 text-base font-medium text-DarkGrey outline-none focus:border-blue focus:shadow-md"
              />
            </div>
            <div className="mb-10 flex">
              <label
                htmlFor="message"
                className="text-base font-medium text-DarkGrey"
              >
                Your message
              </label>
              <input
                type="text"
                name="message"
                id="message"
                placeholder=""
                className="w-full border-Ligthgray bg-White border-2 py-3 px-6 text-base font-medium text-DarkGrey outline-none focus:border-blue focus:shadow-md"
              />
            </div>
            {/* submit */}
            <div className="mb-5 xs:mx-6 sm:mr-12 sm:ml-0 sm:max-w-[230px]">
              <button className="hover:shadow-form rounded-xl bg-blue py-3 px-8 text-center text-base font-semibold text-white outline-none w-full flex items-center justify-center">
                <Image src={iconSend} alt="logo" width={30} />
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </aside>
      <footer className="bg-DarkBlue">
        <div className="xs:py-6 xs:px-8 xs:flex xs:justify-between xs:items-center mx-auto w-full max-w-7xl md:justify-start relative">
          <div className=" md:flex md:items-center md:gap-2">
            <Image src={iconEmail} alt="iconEmail"></Image>
            <span className="xs:hidden md:inline text-White">
              contact.forwork@gmail.com
            </span>
          </div>
          <ul className="xs:text-right xs:flex xs:flex-col xs:gap-2 text-White underline sm:flex-row sm:gap-4 md:hidden">
            <li>Terms and Condition</li>
            <li>Privacy polity</li>
            <li>All right reserved</li>
          </ul>
          <Image
            className="xs:hidden md:block absolute md:-top-[100%] md:right-[10%]"
            src="/images/sayHolaFooter.png"
            alt="sayHola"
            width={170}
            height={170}
          />
        </div>
      </footer>
    </>
  );
};

export default homefix;
