import Image from 'next/image';
import Link from 'next/link';
import flagMexico from '../../../public/images/emojione-v1_flag-for-mexico.svg';
import iconEmail from '../../../public/images/iconEmail.svg';
import styles from '../../../styles.module.css';
const three = () => {
  return (
    <>
      <header className="w-full xs:h-12 xs:flex xs:justify-start xs:items-center xs:p-8 xs:gap-3 lg:p-5 bg-backgroud lg:py-8 lg:px-20">
        <div className="mx-auto w-full max-w-7xl">
          <Link href="/" className="flex gap-2 items-center w-min">
            <h1 className="font-bold text-2xl leading-5">resimex</h1>
            <Image src={flagMexico} alt="logo" width={30} />
          </Link>
        </div>
      </header>
      <div className="FIGURE w-full xs:h-8 lg:h-14 relative xs:mb-5 bottom-[1px] md:mb-10">
        <div className={styles.header__figure}></div>
      </div>
      <section className="min-h-screen max-w-7xl mx-auto">
        <Link href="/" className="xs:ml-5 underline text-blue">
          {`<Back to home`}
        </Link>
        <h1 className="text-DarkBlue font-Nunito font-bold text-3xl xs:mt-5 xs:text-center md:text-left sm:ml-[8%] sm:text-left lg:ml-[15%]">
          Check out
        </h1>
        <div className="md:flex md:justify-center">
          {/* <!-- component --> */}
          <div className="xs:my-7 xs:mx-3 flex items-center justify-center xs:p-9 shadow-md xs:border-2 xs:border-Lightgray rounded-md md:w-full lg:max-w-2xl">
            <form className="mx-auto w-full max-w-[550px] font-Mulish">
              <Link
                href="/aplication/steps/one"
                className="block text-right underline text-blue mb-10"
              >{`<Edit`}</Link>
              {/* 1 */}
              <div className="mb-5">
                <label
                  htmlFor="lName"
                  className="mb-3 block text-base font-medium text-DarkGrey"
                >
                  Legal Name
                </label>
                <input
                  type="text"
                  name="lName"
                  id="lName"
                  placeholder=""
                  className="w-full rounded-md border border-Ligthgray bg-Ligthgray py-3 px-6 text-base font-medium text-DarkGrey outline-none focus:border-blue focus:shadow-md"
                />
              </div>
              {/* 2 3*/}
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="lName"
                      className="mb-3 block text-base font-medium text-DarkGrey"
                    >
                      Your Nationality
                    </label>
                    <input
                      type="text"
                      name="lName"
                      id="lName"
                      placeholder=""
                      className="w-full rounded-md border border-Ligthgray bg-Ligthgray py-3 px-6 text-base font-medium text-DarkGrey outline-none focus:border-blue focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="lName"
                      className="mb-3 block text-base font-medium text-DarkGrey"
                    >
                      Your Residence
                    </label>
                    <input
                      type="text"
                      name="lName"
                      id="lName"
                      placeholder=""
                      className="w-full rounded-md border border-Ligthgray bg-Ligthgray py-3 px-6 text-base font-medium text-DarkGrey outline-none focus:border-blue focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              {/* 4..5 */}
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-2/3">
                  <div className="mb-5">
                    <label
                      htmlFor="lName"
                      className="mb-3 block text-base font-medium text-DarkGrey"
                    >
                      Residence address
                    </label>
                    <input
                      type="text"
                      name="lName"
                      id="lName"
                      placeholder=""
                      className="w-full rounded-md border border-Ligthgray bg-Ligthgray py-3 px-6 text-base font-medium text-DarkGrey outline-none focus:border-blue focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/3 ">
                  <div className="mb-5">
                    <label
                      htmlFor="lName"
                      className="mb-3 block text-base font-medium text-DarkGrey"
                    >
                      Post Code
                    </label>
                    <input
                      type="text"
                      name="lName"
                      id="lName"
                      placeholder=""
                      className="w-full rounded-md border border-Ligthgray bg-Ligthgray py-3 px-6 text-base font-medium text-DarkGrey outline-none focus:border-blue focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              {/* 678 */}
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/3">
                  <div className="mb-5">
                    <label
                      htmlFor="lName"
                      className="mb-3 block text-base font-medium text-DarkGrey"
                    >
                      Your Gender
                    </label>
                    <input
                      type="text"
                      name="lName"
                      id="lName"
                      placeholder=""
                      className="w-full rounded-md border border-Ligthgray bg-Ligthgray py-3 px-6 text-base font-medium text-DarkGrey outline-none focus:border-blue focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/3 ">
                  <div className="mb-5">
                    <label
                      htmlFor="lName"
                      className="mb-3 block text-base font-medium text-DarkGrey"
                    >
                      Date of birth
                    </label>
                    <input
                      type="text"
                      name="lName"
                      id="lName"
                      placeholder=""
                      className="w-full rounded-md border border-Ligthgray bg-Ligthgray py-3 px-6 text-base font-medium text-DarkGrey outline-none focus:border-blue focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/3 ">
                  <div className="mb-5">
                    <label
                      htmlFor="lName"
                      className="mb-3 block text-base font-medium text-DarkGrey"
                    >
                      Contact Phone
                    </label>
                    <input
                      type="text"
                      name="lName"
                      id="lName"
                      placeholder=""
                      className="w-full rounded-md border border-Ligthgray bg-Ligthgray py-3 px-6 text-base font-medium text-DarkGrey outline-none focus:border-blue focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              {/* 9 */}
              <div className="mb-5">
                <label
                  htmlFor="lName"
                  className="mb-3 block text-base font-medium text-DarkGrey"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="lName"
                  id="lName"
                  placeholder=""
                  className="w-full rounded-md border border-Ligthgray bg-Ligthgray py-3 px-6 text-base font-medium text-DarkGrey outline-none focus:border-blue focus:shadow-md"
                />
              </div>
              {/* 10 */}
              <div className="mb-12">
                <label
                  htmlFor="lName"
                  className="mb-3 block text-base font-medium text-DarkGrey"
                >
                  Your job
                </label>
                <input
                  type="text"
                  name="lName"
                  id="lName"
                  placeholder=""
                  className="w-full rounded-md border border-Ligthgray bg-Ligthgray py-3 px-6 text-base font-medium text-DarkGrey outline-none focus:border-blue focus:shadow-md"
                />
              </div>
              {/* 11 */}
              <div className="mb-5">
                <h1 className="mb-3 block text-base font-medium text-DarkGrey">
                  Upload front to your Passport
                </h1>
                <div className="w-[129px] h-[65px] bg-backgroud"></div>
              </div>
              {/* 12 */}
              <div className="mb-5">
                <h1 className="mb-3 block text-base font-medium text-DarkGrey">
                  Upload back to your Passport
                </h1>
                <div className="w-[129px] h-[65px] bg-backgroud"></div>
              </div>
              {/* submit */}
              <div className="mb-12">
                <button className="hover:shadow-form rounded-md bg-blue py-3 px-8 text-center text-base font-semibold text-white outline-none w-full md:hidden">
                  SAVE AND PAY
                </button>
              </div>
            </form>
          </div>
          <div className="SAVE-AND-PAY max-w-[350px] xs:hidden md:block md:mr-3 md:mt-10">
            <div className="bg-backgroud w-[285px] h-[343px] mb-7 p-6 rounded-xl">
              <h2 className=" font-Nunito font-bold text-xl text-DarkBlue">
                Next step
              </h2>
              <p className="font-Mulish font-light">
                We redirect you to a secure payment platform Stripe. Once the
                payment is made, you must return to this page to schedule a call
                with your advisor
              </p>
            </div>
            <div>
              <button className="hover:shadow-form rounded-md bg-blue py-3 px-8 text-center text-base font-semibold text-white outline-none w-full">
                SAVE AND PAY
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-DarkBlue">
        <div className="xs:py-6 xs:px-8 xs:flex xs:justify-between xs:items-center mx-auto w-full max-w-7xl">
          <div className=" md:flex md:items-center md:gap-2">
            <Image src={iconEmail} alt="iconEmail"></Image>
            <span className="xs:hidden md:inline text-White">
              contact.forwork@gmail.com
            </span>
          </div>
          <ul className="xs:text-right xs:flex xs:flex-col xs:gap-2 text-White underline sm:flex-row sm:gap-4">
            <li>Terms and Condition</li>
            <li>Privacy polity</li>
            <li>All right reserved</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default three;
