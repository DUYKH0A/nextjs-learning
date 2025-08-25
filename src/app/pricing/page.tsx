import Image from "next/image";

export default function PricingPage() {
  return (
    <main className="flex-1 w-full bg-white">
        {/* Pricing Header Section */}
      <section className="relative h-[472px] w-full">
        {/* Image background */}
        <div className="absolute inset-0">
          <Image
            src="/pricing/bg-pricing.jpg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
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
        <div className="flex items-center justify-between mb-16 ">
            <span className="text-[18px]">Monthly</span>
            <button></button>
            <span className="text-[18px] text-gray-400">Annual</span>
            <div className="">Save 20%</div>
        </div>
        {/* Service Plans */}
        <div></div>
      </section>
    </main>
  );
}
