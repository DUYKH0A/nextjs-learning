import Image from "next/image";

export default function PricingPage() {
  return (
    <main className="flex-1 w-full bg-white">
      {/* Pricing Header Section */}
      <section className="relative h-[690px] md:h-[472px] w-full">
        {/* Image background */}
        <div className="absolute inset-0">
          <Image
            src="/pricing/bg-pricing.jpg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-black/0" />
        {/* text */}
        <div className="relative flex items-center px-5 md:px-32 h-full">
          <div className="max-w-[955px]">
            <h1 className="text-3xl md:text-6xl font-medium font-['DM_Serif_Display'] mb-6">
              Choose the Perfect Plan for Your Fashion Journey
            </h1>
            <p className="text-[#4B5563] text-xl leading-normal font-extralight">
              Flexible pricing options designed to fit your creative needs, from
              casual exploration to professional fashion design.
            </p>
          </div>
        </div>
      </section>
      {/* Pricing Tiers */}
      <section className="md:pb-20 px-5 py-6 md:py-0 md:bg-[#FAFAFA]">
        {/* Menu Icon */}
        <div className="flex items-center justify-center gap-4 mb-16 md:mt-20">
          <span className="font-['SF_Pro_Display_Bold'] font-semibold text-[18px] text-black">
            Monthly
          </span>
          <button className="flex items-center h-6 w-11 rounded-full bg-gray-300">
            <span className="inline-block h-4 w-4 bg-white rounded-full transition-transform translate-x-1"></span>
          </button>
          <span className="font-['SF_Pro_Display_Bold'] font-semibold text-[18px] text-gray-400">
            Annual
          </span>
          <div className="flex items-center justify-center bg-black h-[28px] rounded-full px-2">
            <span className=" text-white font-['SF_Pro_Display'] text-sm font-normal whitespace-nowrap ">
              {" "}
              Save 20%
            </span>
          </div>
        </div>
        {/* Service Plans */}
        <div className="w-full max-w-7xl px-6 mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 px-4">
            {/* grid 1 */}
            <div className="relative w-[280px] h-[628px] rounded-[20px] shadow-sm p-[33px] mx-auto flex flex-col justify-between  bg-white border border-gray-50 backdrop-blur-[5px]">
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between pb-5">
                  <h3 className="font-['DM_Serif_Display'] text-2xl leading-[24px] text-gray-900">
                    Discovery
                  </h3>
                  <span className="bg-[#E4E4E4] text-sm text-black rounded-full px-3 py-1">
                    Free
                  </span>
                </div>
                <p className="text-4xl flex items-center pb-6 font-['DM_Serif_Display']">
                  $0
                  <span className="text-lg text-[#4B5563] font-['DM_Serif_Display']">
                    /month
                  </span>
                </p>
                <p className="font-['SF_Pro_Display'] text-[#4B5563] text-start pb-8 leading-relaxed">
                  Perfect for exploring AI fashion design with basic features.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 text-base text-black">
                    <Image
                      src="/pricing/icons/Icon-88.svg"
                      alt=""
                      height={16}
                      width={16}
                      className="h-4 w-4 mt-0.5"
                    />
                    <div className="text-start">
                      <span className="font-['SF_Pro_Display']">
                        3 design prompts per month
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-base text-black">
                    <Image
                      src="/pricing/icons/Icon-88.svg"
                      alt=""
                      height={16}
                      width={16}
                      className="h-4 w-4 mt-0.5"
                    />
                    <div className="text-start">
                      <span className="font-['SF_Pro_Display']">
                        Watermarked outputs
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-base text-black">
                    <Image
                      src="/pricing/icons/Icon-88.svg"
                      alt=""
                      height={16}
                      width={16}
                      className="h-4 w-4 mt-0.5"
                    />
                    <div className="text-start">
                      <span className="font-['SF_Pro_Display']">
                        Basic design templates
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-base text-black">
                    <Image
                      src="/pricing/icons/Icon-71.svg"
                      alt=""
                      height={16}
                      width={16}
                      className="h-4 w-4 mt-0.5 text-gray-300"
                    />
                    <div className="text-start">
                      <span className="font-['SF_Pro_Display'] text-[#9CA3AF]">
                        Download options
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <button className="w-full text-sm font-medium bg-white border border-[#E5E7EB] rounded-md px-4 py-2 transition-colors hover:cursor-pointer duration-200 hover:bg-gray-100">
                  Start Free
                </button>
              </div>
            </div>
            {/* grid 2 */}
            <div className="relative w-[280px] h-[628px] rounded-[20px] shadow-sm p-[33px] mx-auto flex flex-col justify-between  bg-white bg-gradient-to-b from-[#000000]/9 to-white">
              <div className="absolute left-1/2 -top-3 transform -translate-x-1/2">
                <span className="bg-gray-900 text-white text-xs font-medium whitespace-normal rounded-full px-6 py-[6px]">
                  Most Popular
                </span>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between pb-5">
                  <h3 className="font-['DM_Serif_Display'] text-2xl leading-[24px] text-gray-900">
                    Creator
                  </h3>
                  <span className="bg-white text-sm text-black rounded-full px-3 py-1">
                    Value
                  </span>
                </div>
                <p className="text-4xl flex items-center pb-6 font-['DM_Serif_Display']">
                  $12.90
                  <span className="text-lg text-[#4B5563] font-['DM_Serif_Display']">
                    /month
                  </span>
                </p>
                <p className="font-['SF_Pro_Display'] text-[#4B5563] text-start pb-8 leading-relaxed">
                  Ideal for fashion enthusiasts and emerging designers.{" "}
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 text-base text-black">
                    <Image
                      src="/pricing/icons/Icon-88.svg"
                      alt=""
                      height={16}
                      width={16}
                      className="h-4 w-4 mt-0.5"
                    />
                    <div className="text-start">
                      <span className="font-['SF_Pro_Display']">
                        10 design prompts per month{" "}
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-base text-black">
                    <Image
                      src="/pricing/icons/Icon-88.svg"
                      alt=""
                      height={16}
                      width={16}
                      className="h-4 w-4 mt-0.5"
                    />
                    <div className="text-start">
                      <span className="font-['SF_Pro_Display']">
                        HD visual quality
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-base text-black">
                    <Image
                      src="/pricing/icons/Icon-88.svg"
                      alt=""
                      height={16}
                      width={16}
                      className="h-4 w-4 mt-0.5"
                    />
                    <div className="text-start">
                      <span className="font-['SF_Pro_Display']">
                        PDF/SVG export options
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-base text-black">
                    <Image
                      src="/pricing/icons/Icon-88.svg"
                      alt=""
                      height={16}
                      width={16}
                      className="h-4 w-4 mt-0.5"
                    />
                    <div className="text-start">
                      <span className="font-['SF_Pro_Display']">
                        Basic design customization
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <button className="w-full text-sm font-medium bg-black text-white border border-[#E5E7EB] rounded-md px-4 py-2 transition-colors hover:cursor-pointer duration-200 hover:bg-gray-100">
                  Get Started
                </button>
              </div>
            </div>
            {/* grid 3 */}
            <div className="relative w-[280px] h-[628px] rounded-[20px] shadow-sm p-[33px] mx-auto flex flex-col justify-between  bg-white border border-gray-50 backdrop-blur-[5px]">
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between pb-5">
                  <h3 className="font-['DM_Serif_Display'] text-2xl leading-[24px] text-gray-900">
                    Professional
                  </h3>
                  <span className="bg-[#D3E6FF] text-sm text-[#2563EB] rounded-full px-1 py-1">
                    Advanced
                  </span>
                </div>
                <p className="text-4xl flex items-center pb-6 font-['DM_Serif_Display']">
                  $29.90
                  <span className="text-lg text-[#4B5563] font-['DM_Serif_Display']">
                    /month
                  </span>
                </p>
                <p className="font-['SF_Pro_Display'] text-[#4B5563] text-start pb-8 leading-relaxed">
                  For serious designers who need powerful tools and flexibility.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 text-base text-black">
                    <Image
                      src="/pricing/icons/Icon-88.svg"
                      alt=""
                      height={16}
                      width={16}
                      className="h-4 w-4 mt-0.5"
                    />
                    <div className="text-start">
                      <span className="font-['SF_Pro_Display']">
                        Unlimited design generations
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-base text-black">
                    <Image
                      src="/pricing/icons/Icon-88.svg"
                      alt=""
                      height={16}
                      width={16}
                      className="h-4 w-4 mt-0.5"
                    />
                    <div className="text-start">
                      <span className="font-['SF_Pro_Display']">
                        Cloud storage access
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-base text-black">
                    <Image
                      src="/pricing/icons/Icon-88.svg"
                      alt=""
                      height={16}
                      width={16}
                      className="h-4 w-4 mt-0.5"
                    />
                    <div className="text-start">
                      <span className="font-['SF_Pro_Display']">
                        Favorites system
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-base text-black">
                    <Image
                      src="/pricing/icons/Icon-88.svg"
                      alt=""
                      height={16}
                      width={16}
                      className="h-4 w-4 mt-0.5"
                    />
                    <div className="text-start">
                      <span className="font-['SF_Pro_Display']">
                        Advanced customization tools
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-base text-black">
                    <Image
                      src="/pricing/icons/Icon-88.svg"
                      alt=""
                      height={16}
                      width={16}
                      className="h-4 w-4 mt-0.5"
                    />
                    <div className="text-start">
                      <span className="font-['SF_Pro_Display']">
                        Future variations{" "}
                      </span>
                      <span className="bg-[#ECE9E6] rounded-lg inline-block text-sm leading-[16px] px-2 py-1 mt-1">
                        Coming soon
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <button className="w-full text-sm font-medium bg-white border border-[#E5E7EB] rounded-md px-4 py-2 transition-colors hover:cursor-pointer duration-200 hover:bg-gray-100">
                  Go Pro
                </button>
              </div>
            </div>
            {/* grid 4 */}
            <div className="relative w-[280px] h-[628px] rounded-[20px] shadow-sm p-[33px] mx-auto flex flex-col justify-between  bg-white border border-gray-50 backdrop-blur-[5px]">
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between pb-5">
                  <h3 className="font-['DM_Serif_Display'] text-2xl leading-[24px] text-gray-900">
                    Studio
                  </h3>
                  <span className="bg-[#F7E6CA] text-sm text-[#60502F] rounded-full px-3 py-1">
                    Enterprise
                  </span>
                </div>
                <p className="text-4xl flex items-center pb-6 font-['DM_Serif_Display']">
                  $59
                  <span className="text-lg text-[#4B5563] font-['DM_Serif_Display']">
                    /month
                  </span>
                </p>
                <p className="font-['SF_Pro_Display'] text-[#4B5563] text-start pb-8 leading-relaxed">
                  Comprehensive solution for fashion studios and businesses.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 text-base text-black">
                    <Image
                      src="/pricing/icons/Icon-88.svg"
                      alt=""
                      height={16}
                      width={16}
                      className="h-4 w-4 mt-0.5"
                    />
                    <div className="text-start">
                      <span className="font-['SF_Pro_Display']">
                        Everything in Professional
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-base text-black">
                    <Image
                      src="/pricing/icons/Icon-88.svg"
                      alt=""
                      height={16}
                      width={16}
                      className="h-4 w-4 mt-0.5"
                    />
                    <div className="text-start">
                      <span className="font-['SF_Pro_Display']">
                        3D capabilities
                      </span>
                      <span className="bg-[#ECE9E6] rounded-lg inline-block text-sm leading-[16px] px-2 py-1 mt-1">
                        Coming soon
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-base text-black">
                    <Image
                      src="/pricing/icons/Icon-88.svg"
                      alt=""
                      height={16}
                      width={16}
                      className="h-4 w-4 mt-0.5"
                    />
                    <div className="text-start">
                      <span className="font-['SF_Pro_Display']">
                        Multi-size outputs
                      </span>
                      <span className="bg-[#ECE9E6] rounded-lg inline-block text-sm leading-[16px] px-2 py-1 mt-1">
                        Coming soon
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-base text-black">
                    <Image
                      src="/pricing/icons/Icon-88.svg"
                      alt=""
                      height={16}
                      width={16}
                      className="h-4 w-4 mt-0.5"
                    />
                    <div className="text-start">
                      <span className="font-['SF_Pro_Display']">
                        Priority support
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-base text-black">
                    <Image
                      src="/pricing/icons/Icon-88.svg"
                      alt=""
                      height={16}
                      width={16}
                      className="h-4 w-4 mt-0.5"
                    />
                    <div className="text-start">
                      <span className="font-['SF_Pro_Display']">
                        Custom branding options
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <button
                  className="w-full text-sm text-gray-900 font-semibold rounded-md px-8 py-3 shadow-lg 
                bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 hover:from-yellow-400 hover:via-yellow-500 
                hover:to-yellow-700 hover:shadow-xl transition-all duration-300 transform"
                >
                  Contact Sale
                </button>
              </div>
            </div>
          </div>
          <div className="text-center md:pt-12">
            <p className="text-gray-600">
              Need a custom solution?
              <a
                href="/contact"
                className="text-gray-900 font-semibold hover:underline"
              >
                Get a custom quote
              </a>
            </p>
          </div>
        </div>
      </section>
      {/* Detailed Feature Comparison */}
      <section className="md:pt-20">
        {/* title */}
        <div className="bg-white px-4 pb-16 sm:block hidden">
          <div className="max-w-[1216px] mx-auto text-center">
            <h1 className="text-6xl md:text-5xl text-gray-900 font-['DM_Serif_Display'] mb-4">
              Detailed Feature Comparison
            </h1>
            <p className="text-xl text-gray-600 mx-auto font-['SF_Pro_Display']">
              Compare all features across our plans to find the perfect fit for
              your fashion design needs.
            </p>
          </div>
        </div>
        {/* plan card  */}
        <div className="px-4 pb-20 sm:block hidden">
          <div className="max-w-full overflow-x-auto">
            <div className="max-w-[1216px] mx-auto">
              {/* table */}
              <table className="w-full font-['SF_Pro_Display']">
                {/* thead */}
                <thead>
                  <tr>
                    <th className="px-6 py-4 w-[400px] h-[73px]"></th>
                    <th className="px-6 py-4 w-[204px] h-[73px]"></th>
                    <th className="px-6 py-4 w-[204px] h-[73px]"></th>
                    <th className="px-6 py-4 w-[204px] h-[73px]"></th>
                    <th className="px-6 py-4 w-[204px] h-[73px]"></th>
                  </tr>
                </thead>
                {/* tbody */}
                <tbody>
                  {/* row 1 */}
                  <tr className="border-t-[#F3F4F6] border-t-[1px] hover:bg-gray-50">
                    <td className="px-6 py-6 font-medium text-gray-900">
                      Design Prompts
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      3 per month
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      10 per month
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      Unlimited
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      Unlimited
                    </td>
                  </tr>
                  {/* row 2 */}
                  <tr className="border-t-[#F3F4F6] border-t-[1px] bg-[#F9FAFB4D] hover:bg-gray-50">
                    <td className="px-6 py-6 font-medium text-gray-900">
                      Output Quality
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      Standard
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">HD</td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      Ultra HD
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      Ultra HD
                    </td>
                  </tr>
                  {/* row 3 */}
                  <tr className="border-t-[#F3F4F6] border-t-[1px] hover:bg-gray-50">
                    <td className="px-6 py-6 font-medium text-gray-900">
                      Watermark
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">Yes</td>
                    <td className="px-6 py-4 text-center text-gray-600">No</td>
                    <td className="px-6 py-4 text-center text-gray-600">No</td>
                    <td className="px-6 py-4 text-center text-gray-600">No</td>
                  </tr>
                  {/* row 4 */}
                  <tr className="border-t-[#F3F4F6] border-t-[1px] bg-[#F9FAFB4D] hover:bg-gray-50">
                    <td className="px-6 py-6 font-medium text-gray-900">
                      Export Formats
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      None
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      PDF, SVG
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      PDF, SVG, PNG, JPG
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      All formats + DXF
                    </td>
                  </tr>
                  {/* row 5 */}
                  <tr className="border-t-[#F3F4F6] border-t-[1px] hover:bg-gray-50">
                    <td className="px-6 py-6 font-medium text-gray-900">
                      Cloud Storage
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      None
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">1GB</td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      10GB
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      50GB
                    </td>
                  </tr>
                  {/* row 6 */}
                  <tr className="border-t-[#F3F4F6] border-t-[1px] bg-[#F9FAFB4D] hover:bg-gray-50">
                    <td className="px-6 py-6 font-medium text-gray-900">
                      Design Templates
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      Basic
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      Standard
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      Premium
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      Premium + Custom
                    </td>
                  </tr>
                  {/* row 7 */}
                  <tr className="border-t-[#F3F4F6] border-t-[1px] hover:bg-gray-50">
                    <td className="px-6 py-6 font-medium text-gray-900">
                      Variations
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-x w-4 h-4 text-gray-400 mx-auto"
                        aria-hidden="true"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-x w-4 h-4 text-gray-400 mx-auto"
                        aria-hidden="true"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      <span className="text-gray-500">Coming Soon</span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      <span className="text-gray-500">Coming Soon</span>
                    </td>
                  </tr>
                  {/* row 8 */}
                  <tr className="border-t-[#F3F4F6] border-t-[1px] bg-[#F9FAFB4D] hover:bg-gray-50">
                    <td className="px-6 py-6 font-medium text-gray-900">
                      3D Visualization
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-x w-4 h-4 text-gray-400 mx-auto"
                        aria-hidden="true"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-x w-4 h-4 text-gray-400 mx-auto"
                        aria-hidden="true"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-x w-4 h-4 text-gray-400 mx-auto"
                        aria-hidden="true"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      <span className="text-gray-500">Coming Soon</span>
                    </td>
                  </tr>
                  {/* row 9 */}
                  <tr className="border-t-[#F3F4F6] border-t-[1px] hover:bg-gray-50">
                    <td className="px-6 py-6 font-medium text-gray-900">
                      Multi-size Patterns
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-x w-4 h-4 text-gray-400 mx-auto"
                        aria-hidden="true"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-x w-4 h-4 text-gray-400 mx-auto"
                        aria-hidden="true"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      Limited
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      Full Range
                    </td>
                  </tr>
                  {/* row 10 */}
                  <tr className="border-t-[#F3F4F6] border-t-[1px] bg-[#F9FAFB4D] hover:bg-gray-50">
                    <td className="px-6 py-6 font-medium text-gray-900">
                      Customer Support
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      Email
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      Email, Chat
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      Email, Chat, Phone
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      Priority Support
                    </td>
                  </tr>
                  {/* row 11 */}
                  <tr className="border-t-[#F3F4F6] border-t-[1px] hover:bg-gray-50">
                    <td className="px-6 py-6 font-medium text-gray-900">
                      Team Members
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">1</td>
                    <td className="px-6 py-4 text-center text-gray-600">1</td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      Up to 3
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      Up to 50
                    </td>
                  </tr>
                  {/* row 12 */}
                  <tr className="border-t-[#F3F4F6] border-t-[1px] bg-[#F9FAFB4D] hover:bg-gray-50">
                    <td className="px-6 py-6 font-medium text-gray-900">
                      API Access
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-x w-4 h-4 text-gray-400 mx-auto"
                        aria-hidden="true"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-x w-4 h-4 text-gray-400 mx-auto"
                        aria-hidden="true"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      Limited
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      Full Access
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {/* Coming Soon: Advanced Features */}
      <section className="hidden sm:block">
        <div className="py-[83px] bg-[#FAFAFA]">
          <div className="px-5 md:px-20">
            <div className="md:grid lg:grid-cols-2 md:gap-16 mx-2 sm:mx-0">
              <div>
                <h2 className="text-3xl md:text-4xl text-gray-900 mb-6 font-['DM_Serif_Display'] text-start">
                  Coming Soon: Advanced Features
                </h2>
                <p className="text-gray-600 mb-8 text-xl font-['SF_Pro_Display']">
                  We&apos;re constantly innovating to bring you the most
                  advanced AI fashion design tools. Here&apos;s what&apos;s
                  coming next:
                </p>
                {/* body */}
                <div className="space-y-6 tracking-wide">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 text-white bg-black rounded-[20px] font-bold text-sm">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke-width="2"
                        ></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-semibold font-['DM_Serif_Display']">
                        3D Visualization
                      </h3>
                      <p className="text-gray-600 font-['SF_Pro_Display'] pr-5">
                        See your designs come to life with realistic 3D models
                        that can be rotated and viewed from any angle.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 text-white bg-black rounded-[20px] font-bold text-sm">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.5135 5.00008L17.1201 2.39348C17.5106 2.00295 18.1438 2.00295 18.5343 2.39348L22.777 6.63612C23.1675 7.02664 23.1675 7.65981 22.777 8.05033L18.9988 11.8285V21.0001C18.9988 21.5524 18.5511 22.0001 17.9988 22.0001H5.9988C5.44652 22.0001 4.9988 21.5524 4.9988 21.0001V11.8285L1.22063 8.05033C0.830103 7.65981 0.830103 7.02664 1.22063 6.63612L5.46327 2.39348C5.85379 2.00295 6.48696 2.00295 6.87748 2.39348L9.48408 5.00008H14.5135ZM15.3419 7.00008H8.65566L6.17037 4.5148L3.34195 7.34323L6.9988 11.0001V20.0001H16.9988V11.0001L20.6557 7.34323L17.8272 4.5148L15.3419 7.00008Z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-semibold font-['DM_Serif_Display']">
                        Multi-size Patterns
                      </h3>
                      <p className="text-gray-600 font-['SF_Pro_Display'] pr-5">
                        Generate patterns in multiple sizes with a single click,
                        perfect for production-ready designs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 text-white bg-black rounded-[20px] font-bold text-sm">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2C17.5222 2 22 5.97778 22 10.8889C22 13.9556 19.5111 16.4444 16.4444 16.4444H14.4778C13.5556 16.4444 12.8111 17.1889 12.8111 18.1111C12.8111 18.5333 12.9778 18.9222 13.2333 19.2111C13.5 19.5111 13.6667 19.9 13.6667 20.3333C13.6667 21.2556 12.9 22 12 22C6.47778 22 2 17.5222 2 12C2 6.47778 6.47778 2 12 2ZM7.5 12C8.32843 12 9 11.3284 9 10.5C9 9.67157 8.32843 9 7.5 9C6.67157 9 6 9.67157 6 10.5C6 11.3284 6.67157 12 7.5 12ZM16.5 12C17.3284 12 18 11.3284 18 10.5C18 9.67157 17.3284 9 16.5 9C15.6716 9 15 9.67157 15 10.5C15 11.3284 15.6716 12 16.5 12ZM12 9C12.8284 9 13.5 8.32843 13.5 7.5C13.5 6.67157 12.8284 6 12 6C11.1716 6 10.5 6.67157 10.5 7.5C10.5 8.32843 11.1716 9 12 9Z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-semibold font-['DM_Serif_Display']">
                        Fabric Simulation
                      </h3>
                      <p className="text-gray-600 font-['SF_Pro_Display'] pr-5">
                        Preview how your designs will look with different
                        fabrics and textures applied.
                      </p>
                    </div>
                  </div>
                </div>
                {/* input mail */}
                <div className="flex items-center justify-between gap-4 mt-8">
                  <input
                    type="email"
                    className="border border-gray-200 px-4 py-3 w-full h-[50px] rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
                    placeholder="Enter your email"
                    autoComplete="email"
                    aria-invalid="false"
                    aria-describedby="email-error"
                  />
                  <button className="bg-black text-white px-6 py-3 font-['SF_Pro_Display'] rounded-lg whitespace-nowrap">
                    Notify Me
                  </button>
                </div>
              </div>
              <div className="hidden lg:block relative w-[576px] h-[700px]">
                <Image
                  src="/pricing/advanced-features.jpg"
                  alt="Advanced Features"
                  layout="fill"
                  objectFit="cover"
                  className="w-full rounded-[20px] border border-white/30 bg-white/70 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] backdrop-blur-[6px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Frequently Asked Questions */}
      <section className="px-5 md:px-20 py-6 sm:block  text-center hidden font-[SF_Pro_Display]">
        {/* title */}
        <h2 className="text-3xl px-5 mb-6 mt-[70px] font-['DM_Serif_Display']">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-gray-500 px-5 mb-6">
          Find answers to common questions about our pricing plans and billing
        </p>
        {/* grid */}
        <div className="grid md:grid-cols-2 gap-8 mx-0 lg:mx-8 px-0 lg:px-40">
          {/* grid 1 */}
          <div className="bg-white p-[33px] rounded-[20px] md:text-start tracking-wide border border-[#FFFFFF4D] shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
            <h3 className="text-gray-900 font-semibold text-xl px-5 md:px-0 pb-0 md:pb-4 font-[SF_Pro_Display_Bold]">
              How does billing work?
            </h3>
            <p className="text-gray-600 md:leading-relaxed tracking-wider pr-3">
              We offer both monthly and annual billing options. Annual plans
              come with a 20% discount. You can change your billing cycle at any
              time from your account settings.
            </p>
          </div>
          {/* grid 2 */}
          <div className="bg-white p-[33px] rounded-[20px] md:text-start tracking-wide border border-[#FFFFFF4D] shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
            <h3 className="text-gray-900 font-semibold text-xl px-5 md:px-0 pb-0 md:pb-4 font-[SF_Pro_Display_Bold]">
              Can I upgrade or downgrade my plan?
            </h3>
            <p className="text-gray-600 md:leading-relaxed tracking-wider pr-3">
              Yes, you can upgrade or downgrade your plan at any time. When
              upgrading, you&apos;ll be charged the prorated difference. When
              downgrading, the new rate will apply at the start of your next
              billing cycle.
            </p>
          </div>
          {/* grid 3 */}
          <div className="bg-white p-[33px] rounded-[20px] md:text-start tracking-wide border border-[#FFFFFF4D] shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
            <h3 className="text-gray-900 font-semibold text-xl px-5 md:px-0 pb-0 md:pb-4 font-[SF_Pro_Display_Bold]">
              Is there a free trial?
            </h3>
            <p className="text-gray-600 md:leading-relaxed tracking-wider pr-3">
              We offer a free Discovery plan with limited features that you can
              use indefinitely. For paid plans, we offer a 14-day money-back
              guarantee if you&apos;re not satisfied with our service.
            </p>
          </div>
          {/* grid 4 */}
          <div className="bg-white p-[33px] rounded-[20px] md:text-start tracking-wide border border-[#FFFFFF4D] shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
            <h3 className="text-gray-900 font-semibold text-xl px-5 md:px-0 pb-0 md:pb-4 font-[SF_Pro_Display_Bold]">
              What payment methods do you accept?
            </h3>
            <p className="text-gray-600 md:leading-relaxed tracking-wider pr-3">
              We accept all major credit cards (Visa, Mastercard, American
              Express), PayPal, and for annual plans, we also accept bank
              transfers and wire transfers.
            </p>
          </div>
          {/* grid 5 */}
          <div className="bg-white p-[33px] rounded-[20px] md:text-start tracking-wide border border-[#FFFFFF4D] shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
            <h3 className="text-gray-900 font-semibold text-xl px-5 md:px-0 pb-0 md:pb-4 font-[SF_Pro_Display_Bold]">
              Do you offer discounts for educational institutions?
            </h3>
            <p className="text-gray-600 md:leading-relaxed tracking-wider pr-3">
              Yes, we offer special pricing for educational institutions and
              students. Please contact our sales team with your academic
              credentials for more information.
            </p>
          </div>
          {/* grid 6 */}
          <div className="bg-white p-[33px] rounded-[20px] md:text-start tracking-wide border border-[#FFFFFF4D] shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
            <h3 className="text-gray-900 font-semibold text-xl px-5 md:px-0 pb-0 md:pb-4 font-[SF_Pro_Display_Bold]">
              What happens if I exceed my monthly design limit?
            </h3>
            <p className="text-gray-600 md:leading-relaxed tracking-wider pr-3">
              If you reach your monthly design limit on the Creator plan,
              you&apos;ll need to wait until your next billing cycle or upgrade
              to a higher plan. Professional and Studio plans offer unlimited
              designs.
            </p>
          </div>
        </div>
        {/* button */}
        <div className="mt-14">
          <p className="text-gray-600 mb-4 font-[SF_Pro_Display]">
            Still have questions?
          </p>
          <a href="/contact">
            <button className="bg-black text-white rounded-lg px-12 py-4 font-[SF_Pro_Display] hover:bg-gray-800 transition-colors duration-200 cursor-pointer">
              Contact Support
            </button>
          </a>
        </div>
      </section>
      {/* Ready to Transform Your Fashion Designs? */}
      <section className="bg-black text-white px-4 py-5 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-['DM_Serif_Display'] pb-6">
            Ready to Transform Your Fashion Designs?
          </h2>
          <p className="text-xl font-['SF_Pro_Display'] mb-8">
            Join thousands of designers already using PATRONIK to bring their
            fashion ideas to life{" "}
          </p>
        </div>
        {/* button  */}
        <div className="flex items-center justify-center gap-4 pb-12">
          <a
            className="flex items-center justify-center w-[256px] h-[58px] px-[32px] py-[16px] font-medium 
            bg-white text-black rounded-lg duration-300 hover:bg-gray-100 border border-gray-300"
            href=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-arrow-right w-4 h-4 mr-1"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
            Get Started Now
          </a>
          <a
            className="flex items-center justify-center w-[256px] h-[58px] px-[32px] py-[16px] bg-black text-white font-medium rounded-lg duration-300 hover:bg-gray-900 border border-gray-600"
            href=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-circle-play w-4 h-4 mr-1"
              aria-hidden="true"
            >
              <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
            <span>Watch Demo</span>
          </a>
        </div>
        {/* Benefits */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-center justify-center font-['SF_Pro_Display']">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-shield-check inline-block"
              aria-hidden="true"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            <span>14-day money-back guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/pricing/icons/Icon-649.svg"
              alt="Secure payment"
              width={16}
              height={16}
              className="inline-block"
            />
            <span>24/7 customer support</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/pricing/icons/Icon-656.svg"
              alt="Secure payment"
              width={16}
              height={16}
              className="inline-block"
            />
            <span>Secure payment</span>
          </div>
        </div>
      </section>
    </main>
  );
}
