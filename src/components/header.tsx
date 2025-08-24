import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed max-h-[55px] lg:max-h-24 top-0 left-0 right-0 z-[9999] bg-white/20 backdrop-blur-[2px] shadow-sm">
      <div className="flex max-h-[55px] gap-6 lg:max-h-24 px-4 lg:px-10 xl:px-20 h-16 lg:h-24 items-center justify-between bg-white/20">
        {/* Logo */}
        <Link href="#">
          <Image
            src="https://frontend-rho-nine-42.vercel.app/logo.svg"
            alt="Logo"
            className="w-[118px] lg:w-[147px]"
            width={118}
            height={24}
          />
        </Link>
        {/* Navbar */}
        <nav className="hidden lg:flex items-center lg:gap-6 xl:gap-10">
          <Link
            className="text-[24px] border-b-4 border-black font-['DM_Serif_Display']"
            href="/"
          >
            Home
          </Link>
          <Link className="text-[20px]" href="about_us">
            About Us
          </Link>
          <Link className="text-[20px]" href="pricing">
            Pricing
          </Link>
          <Link className="text-[20px]" href="contact">
            Contact
          </Link>
        </nav>
        {/* Desktop Menu Button */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="relative group">
            <button className="flex items-center place-content-center h-11 w-[95px] bg-white rounded-lg px-4 py-2 gap-1 text-[16px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-globe"
                aria-hidden="true"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              EN
              <svg className="w-3 h-3 ml-1" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="black" strokeWidth="1.5" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-1 hidden group-hover:flex flex-col bg-white shadow-md rounded-xl w-[120px]">
              <button className="flex w-full px-4 py-2 text-[14px] hover:bg-gray-100 rounded-t-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 36 36"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--twemoji size-5 mr-2"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    fill="#00247D"
                    d="M0 9.059V13h5.628zM4.664 31H13v-5.837zM23 25.164V31h8.335zM0 23v3.941L5.63 23zM31.337 5H23v5.837zM36 26.942V23h-5.631zM36 13V9.059L30.371 13zM13 5H4.664L13 10.837z"
                  />
                  <path
                    fill="#CF1B2B"
                    d="M25.14 23l9.712 6.801a3.977 3.977 0 0 0 .99-1.749L28.627 23H25.14zM13 23h-2.141l-9.711 6.8c.521.53 1.189.909 1.938 1.085L13 23.943V23zm10-10h2.141l9.711-6.8a3.988 3.988 0 0 0-1.937-1.085L23 12.057V13zm-12.141 0L1.148 6.2a3.994 3.994 0 0 0-.991 1.749L7.372 13h3.487z"
                  />
                  <path
                    fill="#EEE"
                    d="M36 21H21v10h2v-5.836L31.335 31H32a3.99 3.99 0 0 0 2.852-1.199L25.14 23h3.487l7.215 5.052c.093-.337.158-.686.158-1.052v-.058L30.369 23H36v-2zM0 21v2h5.63L0 26.941V27c0 1.091.439 2.078 1.148 2.8l9.711-6.8H13v.943l-9.914 6.941c.294.07.598.116.914.116h.664L13 25.163V31h2V21H0zM36 9a3.983 3.983 0 0 0-1.148-2.8L25.141 13H23v-.943l9.915-6.942A4.001 4.001 0 0 0 32 5h-.663L23 10.837V5h-2v10h15v-2h-5.629L36 9.059V9zM13 5v5.837L4.664 5H4a3.985 3.985 0 0 0-2.852 1.2l9.711 6.8H7.372L.157 7.949A3.968 3.968 0 0 0 0 9v.059L5.628 13H0v2h15V5h-2z"
                  />
                  <path
                    fill="#CF1B2B"
                    d="M21 15V5h-6v10H0v6h15v10h6V21h15v-6z"
                  />
                </svg>
                English
              </button>
              <button className="flex w-full px-4 py-2 text-[14px] hover:bg-gray-100 rounded-b-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 36 36"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--twemoji size-5 mr-2"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    fill="#ED2939"
                    d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4v18z"
                  />
                  <path
                    fill="#002495"
                    d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z"
                  />
                  <path fill="#EEE" d="M12 5h12v26H12z" />
                </svg>
                Français
              </button>
            </div>
          </div>
          <a
            className="flex items-center justify-center gap-1 text-[16px] w-[122px] h-11 bg-white text-black rounded-lg px-4 py-2"
            href=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={14}
              height={14}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user"
              aria-hidden="true"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx={12} cy={7} r={4} />
            </svg>
            Sign In
          </a>
          <a
            className="flex items-center justify-center gap-1 text-[16px] w-[151px] h-11 bg-black text-white rounded-lg px-4 py-2"
            href=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={14}
              height={14}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
            Get Started
          </a>
        </div>
        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <a className="text-sm" href="">
            Sign In
          </a>
          <a
            className="bg-black text-white rounded-lg px-4 py-2 text-sm max-h-[35px]"
            href=""
          >
            Get Started
          </a>
        </div>
        {/* Hamburger Menu Icon */}
        <button className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
