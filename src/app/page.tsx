"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Home() {
  const tHero = useTranslations("home.hero");
  const tHowItWorks = useTranslations("home.howItWorks");
  const tPlans = useTranslations("home.plans");
  const tTrusted = useTranslations("home.trusted");

  const tPlansCreatorFeatures = tPlans.raw("creator.features") as string[];
  const tPlansProFeatures = tPlans.raw("pro.features") as string[];
  const tPlansStudioFeatures = tPlans.raw("studio.features") as string[];

  const tTrustedBrands = tTrusted.raw("brands") as string[];


  return (
    <main className="flex-1 w-full bg-white">
      {/* Transform Your Fashion */}
      <section className="relative w-full h-[800px]">
        <div className="absolute inset-0">
          <img
            src="https://frontend-rho-nine-42.vercel.app/background-home.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-black/0" />
        </div>
        <div className="flex flex-col relative py-[226px] px-[26px] lg:px-20">
          <div className="flex flex-col max-w-[1216px] px-[32px]">
            <div className="flex flex-col max-w-[672px]">
              <h1 className="flex mb-[24px] text-3xl lg:text-6xl leading-[150%] font-['DM_Serif_Display']">
                {tHero("title")}
              </h1>
              <p className="flex text-xl mb-8 tracking-wide font-['SF_Pro_Display']">
                {tHero("subtitle")}
              </p>
              <div className="flex flex-col lg:flex-row gap-4">
                <button className="cursor-pointer flex items-center justify-center w-[256px] h-14 px-[32px] py-[16px] gap-2 bg-black text-white font-['SF_Pro_Display'] duration-300 hover:scale-110 rounded-lg">
                  <Image
                    src="https://frontend-rho-nine-42.vercel.app/icons/Icon-16.svg"
                    alt=""
                    className="w-4 h-4"
                    width={16}
                    height={16}
                  />
                  <span>{tHero("cta.start")}</span>
                </button>
                <a
                  className="flex items-center justify-center w-[256px] h-14 px-[32px] py-[16px] gap-2 bg-white text-black font-['SF_Pro_Display'] rounded-lg duration-300 hover:scale-110 border border-gray-300"
                  href=""
                >
                  <Image
                    src="https://frontend-rho-nine-42.vercel.app/icons/Icon-22.svg"
                    alt=""
                    className="w-4 h-4"
                    width={16}
                    height={16}
                  />
                  <span>{tHero("cta.watchDemo")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works */}
      <section className="py-16 lg:py-32 px-6 lg:px-20">
        <h2 className="text-center mb-6 font-['DM_Serif_Display'] text-3xl lg:text-6xl">
          {tHowItWorks("title")}
        </h2>
        <p className="text-center mb-24 font-['SF_Pro_Display'] text-xl text-[#4b5563]">
          {tHowItWorks("subtitle")}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-8 gap-12">
          <div className="w-full flex flex-col items-center lg:items-start p-[49px] bg-white shadow-[0px_8px_32px_0px_rgba(31,38,135,0.07)] backdrop-blur-[5px] rounded-[20px] border border-gray-200">
            <div className="flex items-center justify-center bg-white/50 backdrop-blur-[2px] mb-6 w-12 h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M3.38254 11.8164L11.7734 3.36641L10.5983 2.18307L2.20749 10.6497V11.8164H3.38254ZM4.06109 13.4831H0.55249V9.94974L10.0191 0.416407C10.1736 0.260851 10.3666 0.183073 10.5983 0.183073C10.83 0.183073 11.0231 0.260851 11.1776 0.416407L13.5277 2.78307C13.6932 2.93863 13.7759 3.13307 13.7759 3.36641C13.7759 3.59974 13.6932 3.79974 13.5277 3.96641L4.06109 13.4831ZM0.55249 15.1497H15.4475V16.8164H0.55249V15.1497Z"
                  fill="black"
                />
              </svg>
            </div>
            <h3 className="mb-4 font-['DM_Serif_Display'] text-xl">
              {tHowItWorks("steps.step1.title")}{" "}
            </h3>
            <p className="text-base text-center lg:text-left font-['SF_Pro_Display'] text-gray-600">
              {tHowItWorks("steps.step1.description")}
            </p>
          </div>
          <div className="w-full flex flex-col items-center lg:items-start p-[49px] bg-white shadow-[0px_8px_32px_0px_rgba(31,38,135,0.07)] backdrop-blur-[5px] rounded-[20px] border border-gray-200">
            <div className="flex items-center justify-center mb-6 w-12 h-12">
              <Image
                src="https://frontend-rho-nine-42.vercel.app/icons/img.svg"
                alt=""
                width={20}
                height={20}
              />
            </div>
            <h3 className="mb-4 font-['DM_Serif_Display'] text-xl">
              {tHowItWorks("steps.step2.title")}
            </h3>
            <p className="text-base text-center lg:text-left font-['SF_Pro_Display'] text-gray-600">
              {tHowItWorks("steps.step2.description")}
            </p>
          </div>
          <div className="w-full flex flex-col items-center lg:items-start p-[49px] bg-white shadow-[0px_8px_32px_0px_rgba(31,38,135,0.07)] backdrop-blur-[5px] rounded-[20px] border border-gray-200">
            <div className="flex items-center justify-center mb-6 w-12 h-12">
              <Image
                src="https://frontend-rho-nine-42.vercel.app/icons/parrent.svg"
                alt=""
                width={20}
                height={20}
              />
            </div>
            <h3 className="mb-4 font-['DM_Serif_Display'] text-xl">
              {tHowItWorks("steps.step3.title")}{" "}
            </h3>
            <p className="text-base text-center lg:text-left font-['SF_Pro_Display'] text-gray-600">
              {tHowItWorks("steps.step3.description")}
            </p>
          </div>
        </div>
      </section>
      {/* Pricing Plans */}
      <section className="py-16 lg:py-32 px-6 lg:px-20">
        <h2 className="flex items-center justify-center mb-4 font-['DM_Serif_Display'] text-6xl">
          {tPlans("title")}
        </h2>
        <p className="flex items-center justify-center pb-24 mb-6 font-['SF_Pro_Display'] text-gray-600 text-xl">
          {tPlans("subtitle")}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-12 lg:px-8 gap-12">
          <div className="group w-full p-[49px] bg-white shadow-xl backdrop-blur-[5px] rounded-2xl border border-gray-200 hover:shadow-[0_0_15px_rgba(107,114,128,0.3)] hover:bg-[#F6F6F6] hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-['DM_Serif_Display']">
              {tPlans("creator.name")}
            </h3>
            <p className="text-4xl flex items-center mb-6 font-['DM_Serif_Display']">
              {tPlans("creator.price")}
              <span className="text-lg text-gray-500 ml-1 font-['DM_Serif_Display']">
                {tPlans("creator.unit")}
              </span>
            </p>
            <ul className="space-y-2 mb-6">
              {tPlansCreatorFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-base text-black"
                >
                  <img src="/home/icons/Icon-88.svg" alt="" />
                  {feature}
                </li>
              ))}
            </ul>
            <a href="">
              <button className="w-full py-3 rounded-[8px] border border-gray-200 bg-white group-hover:bg-black group-hover:text-white group-hover:shadow-[0_0_12px_rgba(0,0,0,0.2)] transition-all duration-300">
                {tPlans("creator.cta")}
              </button>
            </a>
          </div>
          <div className="group w-full p-[49px] bg-white shadow-xl backdrop-blur-[5px] rounded-2xl border border-gray-200 hover:shadow-[0_0_15px_rgba(107,114,128,0.3)] hover:bg-[#F6F6F6] hover:scale-105 transition-all duration-300">
            <div className="absolute -top-[11px] left-1/2 -translate-x-1/2 bg-black text-white text-sm px-4 py-1 rounded-full">
              {tPlans("pro.label")}
            </div>
            <h3 className="text-xl font-['DM_Serif_Display']">
              {tPlans("pro.name")}
            </h3>
            <p className="text-4xl flex items-center mb-6 font-['DM_Serif_Display']">
              {tPlans("pro.price")}
              <span className="text-lg text-gray-500 ml-1 font-['DM_Serif_Display']">
                {tPlans("pro.unit")}
              </span>
            </p>
            <ul className="space-y-2 mb-6">
              {tPlansProFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-base text-black"
                >
                  <img src="/home/icons/Icon-88.svg" alt="" />
                  {feature}
                </li>
              ))}
            </ul>
            <a href="">
              <button className="w-full py-3 rounded-[8px] border border-gray-200 bg-white group-hover:bg-black group-hover:text-white group-hover:shadow-[0_0_12px_rgba(0,0,0,0.2)] transition-all duration-300">
                {tPlans("pro.cta")}
              </button>
            </a>
          </div>
          <div className="group w-full p-[49px] bg-white shadow-xl backdrop-blur-[5px] rounded-2xl border border-gray-200 hover:shadow-[0_0_15px_rgba(107,114,128,0.3)] hover:bg-[#F6F6F6] hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-['DM_Serif_Display']">
              {tPlans("studio.name")}
            </h3>
            <p className="text-4xl flex items-center mb-6 font-['DM_Serif_Display']">
              {tPlans("studio.price")}
              <span className="text-lg text-gray-500 ml-1 font-['DM_Serif_Display']">
                {tPlans("studio.unit")}
              </span>
            </p>
            <ul className="space-y-2 mb-6">
              {tPlansStudioFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-base text-black"
                >
                  <img src="/home/icons/Icon-88.svg" alt="" />
                  {feature}
                </li>
              ))}
            </ul>
            <a href="">
              <button className="w-full py-3 rounded-[8px] border border-gray-200 bg-white group-hover:bg-black group-hover:text-white group-hover:shadow-[0_0_12px_rgba(0,0,0,0.2)] transition-all duration-300">
                {tPlans("studio.cta")}
              </button>
            </a>
          </div>
        </div>
      </section>
      {/* Trusted by Fashion Professionals */}
      <section className="py-[25px] lg:py-32 px-6 lg:px-20 bg-[#FAFAFA] text-center">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-6">
          <h2 className="text-3xl lg:text-6xl font-['DM_Serif_Display'] text-black">
            {tTrusted("title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-[700px] font-['SF_Pro_Display']">
            {tTrusted("subtitle")}{" "}
          </p>
          <div className="flex flex-wrap px-8 justify-center items-center gap-6 lg:gap-12 mt-6">
            {tTrustedBrands.map((brand, index) => (
              <div
                key={index}
                className="flex justify-center items-center px-[6.5px] py-[3px] lg:px-[115.33px] lg:py-1.5"
              >
                <img
                  src={`https://frontend-rho-nine-42.vercel.app/logos/${brand}.svg`}
                  alt="google"
                  className="w-6 h-6 object-contain"
                />
              </div>
            ))}
            {/* <div className="flex justify-center items-center px-[6.5px] py-[3px] lg:px-[115.33px] lg:py-1.5">
              <img
                src="https://frontend-rho-nine-42.vercel.app/logos/google.svg"
                alt="google"
                className="w-6 h-6 object-contain"
              />
            </div>
            <div className="flex justify-center items-center px-[6.5px] py-[3px] lg:px-[115.33px] lg:py-1.5">
              <img
                src="https://frontend-rho-nine-42.vercel.app/logos/apple.svg"
                alt="apple"
                className="w-6 h-6 object-contain"
              />
            </div>
            <div className="flex justify-center items-center px-[6.5px] py-[3px] lg:px-[115.33px] lg:py-1.5">
              <img
                src="https://frontend-rho-nine-42.vercel.app/logos/amazon.svg"
                alt="amazon"
                className="w-6 h-6 object-contain"
              />
            </div>
            <div className="flex justify-center items-center px-[6.5px] py-[3px] lg:px-[115.33px] lg:py-1.5">
              <img
                src="https://frontend-rho-nine-42.vercel.app/logos/windows.svg"
                alt="windows"
                className="w-6 h-6 object-contain"
              />
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}
