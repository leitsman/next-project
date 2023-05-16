import Image from 'next/image';
import Link from 'next/link';
import flagMexico from '../public/images/emojione-v1_flag-for-mexico.svg';

const NavBar = () => {
  return (
    <header className="w-full xs:h-12 xs:flex xs:justify-start xs:items-center xs:p-8 xs:gap-3 lg:p-5 bg-red-300 lg:py-8 lg:px-20">
      <div className="mx-auto w-full max-w-7xl">
        <Link href="/" className="flex gap-2 items-center w-min">
          <h1 className="font-bold text-2xl leading-5">resimex</h1>
          <Image src={flagMexico} alt="logo" width={30} />
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
