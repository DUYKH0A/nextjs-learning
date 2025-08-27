import Image from "next/image";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <main className="flex-1 w-full bg-white">
      {/* About PATRONIK Header Section */}
      <section className="relative w-full px-5 md:px-20 h-[690px] md:h-[600px] flex items-center ">
        <div className="absolute inset-0">
          <Image
            src="/about-us/bg-about-us.jpg"
            alt="About Us"
            className="object-cover"
            layout="fill"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-black/0" />
        <div className="relative container mx-auto pb-8 md:px-6 lg:px-8">
          <div className="hidden md:grid md:grid-cols-2 ">
            <div className="flex items-end justify-start h-full">
              <div className="text-left max-w-[690px]">
                <h1 className="text-6xl font-medium font-['DM_Serif_Display']" style={{ lineHeight: "normal" }}>
                  About PATRONIK
                </h1>
                <p className="text-[#4B5563] text-[20px] leading-[150%] sm:text-base md:text-lg lg:text-xl font-extralight text-center md:text-left lg:text-left align-middle" >
                  We&apos;re revolutionizing fashion design with AI-powered
                  technology,
                  <br />
                  empowering creators to transform their vision into reality
                  with
                  <br />
                  unprecedented ease and precision.
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
      {/* Our Mission */}
      <section className="py-6 md:px-20 lg:py-32 bg-[#FAF9F6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['DM_Serif_Display'] leading-tight sm:text-center lg:text-left">
                Our Mission
              </h2>
              <div className="space-y-4 sm:space-y-6 text-center">
                <p className="px-3 lg:px-0 text-sm sm:text-base md:text-lg mb-6 text-center lg:text-left lg:text-xl text-[#4B5563] lg:line-clamp-3 leading-none font-['SF_Pro_Display']">
                  At PATRONIK, we believe that every creative mind deserves
                  access to professional-grade design tools. Our mission is to
                  democratize fashion design by making it accessible, intuitive,
                  and powerful for everyone.
                </p>
                <p className="px-4 lg:px-0 text-sm sm:text-base md:text-lg mb-6 text-center lg:text-left lg:text-xl text-[#4B5563] lg:line-clamp-3 leading-none font-['SF_Pro_Display']">
                  We combine cutting-edge artificial intelligence with deep
                  fashion industry expertise to create tools that understand
                  your creative vision and help bring it to life with
                  unprecedented precision and speed.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1A] mb-1 sm:mb-2 font-normal leading-tight font-['DM_Serif_Display']">
                    50K+
                  </div>
                  <div className="text-[#4B5563] font-normal text-xs sm:text-sm md:text-base leading-tight tracking-normal">
                    Designs Created
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1A] mb-1 sm:mb-2 font-normal leading-tight font-['DM_Serif_Display']">
                    15K+
                  </div>
                  <div className="text-[#4B5563] font-normal text-xs sm:text-sm md:text-base leading-tight tracking-normal">
                    Active Users
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1A] mb-1 sm:mb-2 font-normal leading-tight font-['DM_Serif_Display']">
                    98%
                  </div>
                  <div className="text-[#4B5563] font-normal text-xs sm:text-sm md:text-base leading-tight tracking-normal">
                    Satisfaction Rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1A] mb-1 sm:mb-2 font-normal leading-tight font-['DM_Serif_Display']">
                    24/7
                  </div>
                  <div className="text-[#4B5563] font-normal text-xs sm:text-sm md:text-base leading-tight tracking-normal">
                    Support Available
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-full sm:p-6 md:p-8 lg:p-[33px] rounded-lg sm:rounded-xl lg:rounded-[20px] shadow-lg bg-white">
                <div className="flex justify-center lg:justify-end w-full max-w-[576px]">
                  <div className="relative w-full h-full rounded-lg sm:rounded-xl lg:rounded-2xl">
                    <Image
                      src="/about-us/our-mission.jpg"
                      alt="Our mission"
                      width={576}
                      height={400}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Story */}
      <section className="py-5 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-0 sm:px-6 lg:px-8">
          <div className="text-center mb-4 lg:mb-16 md:mb-20">
            <h2 className="text-[#1A1A1A] text-4xl md:text-5xl lg:text-6xl text-center font-['DM_Serif_Display'] font-normal leading-tight md:leading-[60px]">
              Our Story
            </h2>
            <p className="text-xl text-[#4B5563] font-['SF_Pro_Display'] font-normal leading-relaxed text-center mt-4 max-w-3xl mx-auto align-middle">
              From a simple idea to revolutionizing fashion design
            </p>
          </div>
          <div></div>

          <div className="relative space-y-6">
            <div className="flex items-center justify-center">
              <div className="flex flex-row items-start lg:gap-12 pl-5 lg:pl-0 lg:ml-16 lg:max-w-[896px">
                <div className="absolute lg:-left-0 xl:left-44 hidden lg:block">
                  <div
                    data-svg-wrapper="true"
                    data-layer="::before-89"
                    className="Before89 xl:left-0.5 top-0 absolute"
                  >
                    <svg
                      width="2"
                      height="258"
                      viewBox="0 0 2 258"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="2"
                        height="258"
                        fill="url(#paint0_linear_271_11399)"
                      ></rect>
                      <defs>
                        <linearGradient
                          id="paint0_linear_271_11399"
                          x1="1"
                          y1="258"
                          x2="1"
                          y2="0"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E5DFD3"></stop>
                          <stop offset="1" stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="w-4 h-4 -left-[5px] top-6 absolute bg-zinc-900 rounded-[50px]"></div>
                </div>
                <div className="lg:w-[392px] pr-5 tracking-wide">
                  <p className="text-sm text-[#6B7280] mb-2 font-['SF_Pro_Display']">2019</p>
                  <h3 className="text-2xl lg:text-3xl text-[#1A1A1A] font-bold mb-3 font-['DM_Serif_Display']">
                    The Beginning
                  </h3>
                  <p className="text-base text-[#4B5563] leading-relaxed font-['SF_Pro_Display']">
                    Founded by a team of fashion designers and AI researchers
                    who saw the potential to bridge the gap between creative
                    vision and technical execution in fashion design.
                  </p>
                </div>
                <div className="flex-shrink-0 hidden lg:block ">
                  <div className="relative w-full lg:w-[392px] h-[258px]">
                    <Image
                      src="/about-us/the-beginning.jpg"
                      alt="Story Image 1"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-[20px] shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex flex-row items-start lg:gap-12 pl-5 lg:pl-0 lg:ml-16 lg:max-w-[896px">
                <div className="absolute lg:-left-0 xl:left-44 hidden lg:block">
                  <div
                    data-svg-wrapper="true"
                    data-layer="::before-89"
                    className="Before89 xl:left-0.5 top-0 absolute"
                  >
                    <svg
                      width="2"
                      height="258"
                      viewBox="0 0 2 258"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="2"
                        height="258"
                        fill="url(#paint0_linear_271_11399)"
                      ></rect>
                      <defs>
                        <linearGradient
                          id="paint0_linear_271_11399"
                          x1="1"
                          y1="258"
                          x2="1"
                          y2="0"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E5DFD3"></stop>
                          <stop offset="1" stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="w-4 h-4 -left-[5px] top-6 absolute bg-zinc-900 rounded-[50px]"></div>
                </div>
                <div className="lg:w-[392px] pr-5 tracking-wide order-2">
                  <p className="text-sm text-[#6B7280] mb-2 font-['SF_Pro_Display']">2021</p>
                  <h3 className="text-2xl lg:text-3xl text-[#1A1A1A] font-bold mb-3 font-['DM_Serif_Display']"> 
                    First Prototype
                  </h3>
                  <p className="text-base text-[#4B5563] leading-relaxed font-['SF_Pro_Display']">
                    Launched our first AI-powered design tool, enabling users to
                    create basic garment patterns from text descriptions. The
                    response from the fashion community was overwhelmingly
                    positive.
                  </p>
                </div>
                <div className="flex-shrink-0 hidden lg:block order-1">
                  <div className="relative w-full lg:w-[392px] h-[258px]">
                    <Image
                      src="/about-us/first-prototype.jpg"
                      alt="Story Image 1"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-[20px] shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex flex-row items-start lg:gap-12 pl-5 lg:pl-0 lg:ml-16 lg:max-w-[896px">
                <div className="absolute lg:-left-0 xl:left-44 hidden lg:block">
                  <div
                    data-svg-wrapper="true"
                    data-layer="::before-89"
                    className="Before89 xl:left-0.5 top-0 absolute"
                  >
                    <svg
                      width="2"
                      height="258"
                      viewBox="0 0 2 258"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="2"
                        height="258"
                        fill="url(#paint0_linear_271_11399)"
                      ></rect>
                      <defs>
                        <linearGradient
                          id="paint0_linear_271_11399"
                          x1="1"
                          y1="258"
                          x2="1"
                          y2="0"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E5DFD3"></stop>
                          <stop offset="1" stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="w-4 h-4 -left-[5px] top-6 absolute bg-zinc-900 rounded-[50px]"></div>
                </div>
                <div className="lg:w-[392px] pr-5 tracking-wide">
                  <p className="text-sm text-[#6B7280] mb-2 font-['SF_Pro_Display']">2023</p>
                  <h3 className="text-2xl lg:text-3xl text-[#1A1A1A] font-bold mb-3 font-['DM_Serif_Display']">
                    Platform Launch
                  </h3>
                  <p className="text-base text-[#4B5563] leading-relaxed font-['SF_Pro_Display']">
                    Officially launched PATRONIK as a comprehensive fashion
                    design platform, introducing advanced features like
                    realistic rendering, pattern generation, and collaborative
                    tools.
                  </p>
                </div>
                <div className="flex-shrink-0 hidden lg:block ">
                  <div className="relative w-full lg:w-[392px] h-[258px]">
                    <Image
                      src="/about-us/platform-launch.jpg"
                      alt="Story Image 1"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-[20px] shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex flex-row items-start lg:gap-12 pl-5 lg:pl-0 lg:ml-16 lg:max-w-[896px">
                <div className="absolute lg:-left-0 xl:left-44 hidden lg:block">
                  <div
                    data-svg-wrapper="true"
                    data-layer="::before-89"
                    className="Before89 xl:left-0.5 top-0 absolute"
                  >
                    <svg
                      width="2"
                      height="258"
                      viewBox="0 0 2 258"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="2"
                        height="258"
                        fill="url(#paint0_linear_271_11399)"
                      ></rect>
                      <defs>
                        <linearGradient
                          id="paint0_linear_271_11399"
                          x1="1"
                          y1="258"
                          x2="1"
                          y2="0"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E5DFD3"></stop>
                          <stop offset="1" stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="w-4 h-4 -left-[5px] top-6 absolute bg-zinc-900 rounded-[50px]"></div>
                </div>
                <div className="lg:w-[392px] pr-5 tracking-wide order-2">
                  <p className="text-sm text-[#6B7280] mb-2 font-['SF_Pro_Display']">2025</p>
                  <h3 className="text-2xl lg:text-3xl text-[#1A1A1A] font-bold mb-3 font-['DM_Serif_Display']">
                    Global Expansion
                  </h3>
                  <p className="text-base text-[#4B5563] leading-relaxed font-['SF_Pro_Display']">
                    Today, PATRONIK serves thousands of designers worldwide,
                    from independent creators to major fashion houses, helping
                    them bring their creative visions to life faster than ever
                    before.
                  </p>
                </div>
                <div className="flex-shrink-0 hidden lg:block order-1">
                  <div className="relative w-full lg:w-[392px] h-[258px]">
                    <Image
                      src="/about-us/global-expansion.jpg"
                      alt="Story Image 1"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-[20px] shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Meet Our Team */}
      <section className="py-5 md:px-20 lg:py-[111px] bg-[#FAF9F6] ">
        <div className="container mx-auto px-0 lg:px-8">
          {/* Section Title */}
          <div className="mb-24 text-center">
            <div className="text-[#1A1A1A] text-3xl lg:text-6xl mb-[7px] leading-normal font-['DM_Serif_Display']">
              Meet Our Team
            </div>
            <p className="text-[#4B5563] text-lg font-light">
              The passionate individuals behind PATRONIK&apos;s innovation
            </p>
          </div>
          {/* grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* grid 1 */}
            <div className="flex flex-col h-[433px] p-[33px] bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-[6px]">
              {/* image */}
              <div className="flex justify-center mb-6">
                <div className="relative w-[96px] h-[96px]">
                  <Image
                    src="/about-us/sarah-chen.jpg"
                    alt="Sarah Chen"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              </div>
              {/* body */}
              <h3 className="text-xl text-zinc-900 font-[520] text-center mb-2 font-['SF_Pro_Display_Bold']">
                Sarah Chen
              </h3>
              <p className="text-[#4B5563] text-base text-center mb-4 font-['SF_Pro_Display']">
                CEO & Co-Founder
              </p>
              <p className="text-[#4B5563] text-sm text-center leading-relaxed h-[115px] mb-4 font-['SF_Pro_Display']">
                Former fashion designer at Chanel with 15 years of industry
                experience. Sarah leads our vision to democratize fashion design
                through technology.
              </p>
              {/* contact */}
              <div className="flex items-center justify-center gap-4">
                <Link href="">
                  <Image
                    src="/about-us/icons/linked.svg"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                    className="w-8 h-8 p-2"
                  />
                </Link>
                <Link href="">
                  <Image
                    src="/about-us/icons/x.svg"
                    alt="X"
                    width={32}
                    height={32}
                    className="w-8 h-8 p-2"
                  />
                </Link>
              </div>
            </div>
            {/* grid 2 */}
            <div className="flex flex-col h-[433px] p-[33px] bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-[6px]">
              {/* image */}
              <div className="flex justify-center mb-6">
                <div className="relative w-[96px] h-[96px]">
                  <Image
                    src="/about-us/marcus-rodriguez.png"
                    alt="Marcus Rodriguez"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              </div>
              {/* body */}
              <h3 className="text-xl text-zinc-900 font-[520] text-center mb-2 font-['SF_Pro_Display_Bold']">
                Marcus Rodriguez
              </h3>
              <p className="text-[#4B5563] text-base text-center mb-4 font-['SF_Pro_Display']">
                CTO & Co-Founder
              </p>
              <p className="text-[#4B5563] text-sm text-center leading-relaxed h-[115px] mb-4 font-['SF_Pro_Display']">
                AI researcher with PhD from MIT. Marcus oversees our machine
                learning algorithms and ensures our technology stays at the
                cutting edge.
              </p>
              {/* contact */}
              <div className="flex items-center justify-center gap-4">
                <Link href="">
                  <Image
                    src="/about-us/icons/linked.svg"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                    className="w-8 h-8 p-2"
                  />
                </Link>
                <Link href="">
                  <Image
                    src="/about-us/icons/x.svg"
                    alt="X"
                    width={32}
                    height={32}
                    className="w-8 h-8 p-2"
                  />
                </Link>
              </div>
            </div>
            {/* grid 3 */}
            <div className="flex flex-col h-[433px] p-[33px] bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-[6px]">
              {/* image */}
              <div className="flex justify-center mb-6">
                <div className="relative w-[96px] h-[96px]">
                  <Image
                    src="/about-us/lisa-wang.png"
                    alt="Lisa Wang"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              </div>
              {/* body */}
              <h3 className="text-xl text-zinc-900 font-[520] text-center mb-2 font-['SF_Pro_Display_Bold']">
                Lisa Wang
              </h3>
              <p className="text-[#4B5563] text-base text-center mb-4 font-['SF_Pro_Display']">
                Head of Marketing
              </p>
              <p className="text-[#4B5563] text-sm text-center leading-relaxed h-[115px] mb-4 font-['SF_Pro_Display']">
                Marketing strategist with deep fashion industry connections.
                Lisa helps us reach and serve the global fashion design
                community effectively.
              </p>
              {/* contact */}
              <div className="flex items-center justify-center gap-4">
                <Link href="">
                  <Image
                    src="/about-us/icons/linked.svg"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                    className="w-8 h-8 p-2"
                  />
                </Link>
                <Link href="">
                  <Image
                    src="/about-us/icons/x.svg"
                    alt="X"
                    width={32}
                    height={32}
                    className="w-8 h-8 p-2"
                  />
                </Link>
              </div>
            </div>
            {/* grid 4 */}
            <div className="flex flex-col h-[433px] p-[33px] bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-[6px]">
              {/* image */}
              <div className="flex justify-center mb-6">
                <div className="relative w-[96px] h-[96px]">
                  <Image
                    src="/about-us/david-kim.png"
                    alt="David Kim"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              </div>
              {/* body */}
              <h3 className="text-xl text-zinc-900 font-[520] text-center mb-2 font-['SF_Pro_Display_Bold']">
                David Kim
              </h3>
              <p className="text-[#4B5563] text-base text-center mb-4 font-['SF_Pro_Display']">
                Head of Engineering
              </p>
              <p className="text-[#4B5563] text-sm text-center leading-relaxed h-[115px] mb-4 font-['SF_Pro_Display']">
                Full-stack engineer with expertise in scalable systems. David
                ensures our platform can handle millions of designs while
                maintaining peak performance.
              </p>
              {/* contact */}
              <div className="flex items-center justify-center gap-4">
                <Link href="">
                  <Image
                    src="/about-us/icons/linked.svg"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                    className="w-8 h-8 p-2"
                  />
                </Link>
                <Link href="">
                  <Image
                    src="/about-us/icons/x.svg"
                    alt="X"
                    width={32}
                    height={32}
                    className="w-8 h-8 p-2"
                  />
                </Link>
              </div>
            </div>
            {/* grid 5 */}
            <div className="flex flex-col h-[433px] p-[33px] bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-[6px]">
              {/* image */}
              <div className="flex justify-center mb-6">
                <div className="relative w-[96px] h-[96px]">
                  <Image
                    src="/about-us/emma-thompson.png"
                    alt="Emma Thompson"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              </div>
              {/* body */}
              <h3 className="text-xl text-zinc-900 font-[520] text-center mb-2 font-['SF_Pro_Display_Bold']">
                Emma Thompson
              </h3>
              <p className="text-[#4B5563] text-base text-center mb-4 font-['SF_Pro_Display']">
                Head of Design
              </p>
              <p className="text-[#4B5563] text-sm text-center leading-relaxed h-[115px] mb-4 font-['SF_Pro_Display']">
                Award-winning UX designer who ensures our platform is intuitive
                and delightful to use. Emma bridges the gap between technology
                and user experience.
              </p>
              {/* contact */}
              <div className="flex items-center justify-center gap-4">
                <Link href="">
                  <Image
                    src="/about-us/icons/linked.svg"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                    className="w-8 h-8 p-2"
                  />
                </Link>
                <Link href="">
                  <Image
                    src="/about-us/icons/x.svg"
                    alt="X"
                    width={32}
                    height={32}
                    className="w-8 h-8 p-2"
                  />
                </Link>
              </div>
            </div>
            {/* grid 6 */}
            <div className="flex flex-col h-[433px] p-[33px] bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-[6px]">
              {/* image */}
              <div className="flex justify-center mb-6">
                <div className="relative w-[96px] h-[96px]">
                  <Image
                    src="/about-us/james-miller.png"
                    alt="James Miller"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              </div>
              {/* body */}
              <h3 className="text-xl text-zinc-900 font-[520] text-center mb-2 font-['SF_Pro_Display_Bold']">
                James Miller
              </h3>
              <p className="text-[#4B5563] text-base text-center mb-4 font-['SF_Pro_Display']">
                Head of Customer Success
              </p>
              <p className="text-[#4B5563] text-sm text-center leading-relaxed h-[115px] mb-4 font-['SF_Pro_Display']">
                Customer success expert who ensures every user gets the most out
                of PATRONIK. James leads our support and education initiatives.
              </p>
              {/* contact */}
              <div className="flex items-center justify-center gap-4">
                <Link href="">
                  <Image
                    src="/about-us/icons/linked.svg"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                    className="w-8 h-8 p-2"
                  />
                </Link>
                <Link href="">
                  <Image
                    src="/about-us/icons/x.svg"
                    alt="X"
                    width={32}
                    height={32}
                    className="w-8 h-8 p-2"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Values */}
      <section className="py-[35.5px] md:px-20 lg:py-32  bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Title */}
          <div className="flex flex-col items-center justify-center pb-9 lg:pb-16">
            <h2 className="text-[#1A1A1A] text-3xl lg:text-6xl leading-none font-['DM_Serif_Display'] mb-4">
              Our Values
            </h2>
            <p className="text-[#4B5563] text-xl leading-none h-[24px]">
              The principles that guide everything we do
            </p>
          </div>
          {/* body */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* grid 1 */}
            <div className="flex flex-col p-8 rounded-[24px] shadow-[0_8px_32px_0_rgba(31,38,135,0.07),0_8px_32px_0_rgba(31,38,135,0.07)] backdrop-blur-[5px]">
              <div className="relative w-16 h-16 mb-6">
                <Image
                  src="https://frontend-rho-nine-42.vercel.app/icons/About-Us/Innovation.svg"
                  alt="Innovation"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <h3 className="text-[#1A1A1A] text-3xl font-['DM_Serif_Display'] mb-4">
                Innovation
              </h3>
              <p className="text-[#4B5563] lg:text-left text-xl leading-relaxed font-light font-['SF_Pro_Display'] lg:line-clamp-2">
                We constantly push the boundaries of what&apos;s possible in fashion
                design technology, always seeking new ways to empower
                creativity.
              </p>
            </div>
            {/* grid 2 */}
            <div className="flex flex-col p-8 rounded-[24px] shadow-[0_8px_32px_0_rgba(31,38,135,0.07),0_8px_32px_0_rgba(31,38,135,0.07)] backdrop-blur-[5px]">
              <div className="relative w-16 h-16 mb-6">
                <Image
                  src="https://frontend-rho-nine-42.vercel.app/icons/About-Us/Accessibility.svg"
                  alt="Accessibility"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <h3 className="text-[#1A1A1A] text-3xl font-['DM_Serif_Display'] mb-4">
                Accessibility
              </h3>
              <p className="text-[#4B5563] lg:text-left text-xl leading-relaxed font-light font-['SF_Pro_Display'] lg:line-clamp-2">
                We believe great design tools should be accessible to everyone,
                regardless of their technical background or experience level.
              </p>
            </div>
            {/* grid 3 */}
            <div className="flex flex-col p-8 rounded-[24px] shadow-[0_8px_32px_0_rgba(31,38,135,0.07),0_8px_32px_0_rgba(31,38,135,0.07)] backdrop-blur-[5px]">
              <div className="relative w-16 h-16 mb-6">
                <Image
                  src="https://frontend-rho-nine-42.vercel.app/icons/About-Us/Community.svg"
                  alt="Community"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <h3 className="text-[#1A1A1A] text-3xl font-['DM_Serif_Display'] mb-4">
                Community
              </h3>
              <p className="text-[#4B5563] lg:text-left text-xl leading-relaxed font-light font-['SF_Pro_Display'] lg:line-clamp-2">
                We foster a supportive community where designers can learn,
                share, and grow together in their creative journey.
              </p>
            </div>
            {/* grid 4 */}
            <div className="flex flex-col p-8 rounded-[24px] shadow-[0_8px_32px_0_rgba(31,38,135,0.07),0_8px_32px_0_rgba(31,38,135,0.07)] backdrop-blur-[5px]">
              <div className="relative w-16 h-16 mb-6">
                <Image
                  src="https://frontend-rho-nine-42.vercel.app/icons/About-Us/Excellence.svg"
                  alt="Excellence"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <h3 className="text-[#1A1A1A] text-3xl font-['DM_Serif_Display'] mb-4">
                Excellence
              </h3>
              <p className="text-[#4B5563] lg:text-left text-xl leading-relaxed font-light font-['SF_Pro_Display'] lg:line-clamp-2">
                We strive for excellence in every aspect of our platform, from
                the quality of our AI to the user experience we provide.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Get in Touch */}
      <section className="hidden md:block px-20 py-32 bg-[#FAF9F6]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center gap-16">
            <div className="flex flex-col h-full">
              <h2 className="mb-4 font-['DM_Serif_Display'] text-5xl">
                Get in Touch
              </h2>
              <p className="mb-8 text-[#4B5563] text-lg font-['SF_Pro_Display'] h-[59.5px] leading-relaxed">
                Have questions about PATRONIK or want to learn more about our
                mission? We&apos;d love to hear from you.
              </p>
              <div className="space-y-6 mb-8">
                <a href="" className="flex gap-4">
                  <div className="relative w-12 h-12">
                    <Image
                      src="https://frontend-rho-nine-42.vercel.app/icons/About-Us/Email.svg"
                      alt="email"
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                  <div>
                    <p className="text-[#1A1A1A] text-base font-medium leading-none align-middle mb-[2.5px]">Email</p>
                    <p className="text-[#4B5563] text-base">
                      hello@patronik.com
                    </p>
                  </div>
                </a>
                <a href="" className="flex gap-4">
                  <div className="relative w-12 h-12">
                    <Image
                      src="https://frontend-rho-nine-42.vercel.app/icons/About-Us/Phone.svg"
                      alt="phone"
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                  <div>
                    <p className="text-[#1A1A1A] text-base font-medium leading-none align-middle mb-[2.5px]">Phone</p>
                    <p className="text-[#4B5563] text-base">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </a>
                <a href="" className="flex gap-4">
                  <div className="relative w-12 h-12">
                    <Image
                      src="https://frontend-rho-nine-42.vercel.app/icons/About-Us/Address.svg"
                      alt="address"
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                  <div>
                    <p className="text-[#1A1A1A] text-base font-medium leading-none align-middle mb-[2.5px]">Address</p>
                    <p className="text-[#4B5563] text-base whitespace-pre-line">
                      123 Fashion District{"\n"}New York, NY 10001
                    </p>
                  </div>
                </a>
              </div>
              <a href="/contact">
                <button className="bg-black rounded-lg text-white px-[32px] py-[12.5px] cursor-pointer font-medium hover:bg-gray-800 transition-colors duration-200">
                  Write Us
                </button>
              </a>
            </div>
            <div className="hidden lg:block relative w-[574px] h-[574px]">
              <Image
                src="/about-us/get-in-touch.jpg"
                alt="Contact Us"
                layout="fill"
                objectFit="cover"
                className="w-full rounded-[20px] border border-white/30 bg-white/70 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] backdrop-blur-[6px]"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
