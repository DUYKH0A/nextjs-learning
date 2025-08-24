export default function Footer() {
  return (
    <footer className="bg-black px-5 lg:px-0 text-white font-sf-pro">
  <div className="lg:px-20 py-8 lg:mx-8 lg:py-16 flex flex-col items-center">
    <div className="w-full flex flex-col gap-10 lg:gap-[23.08px] lg:flex-row lg:justify-between border-b border-[#1F2937] pb-10">
      <div className="w-full px-[41px] lg:px-4 lg:w-1/4 flex flex-col items-center lg:items-start gap-[21.5px]">
        <a href="/home">
          <img
            src="https://frontend-rho-nine-42.vercel.app/logo-w.svg"
            alt="Logo"
            className="h-10"
          />
        </a>
        <p className="text-gray-400 text-base text-center lg:text-left tracking-wide pr-2">
          Transform your fashion ideas into reality with AI-powered design
          tools.
        </p>
      </div>
      <div className="w-full px-[41px] flex lg:flex-row gap-10 lg:w-1/2 justify-center lg:justify-start">
        <div className="w-1/2 flex flex-col items-center lg:items-start gap-4">
          <h4 className="text-white text-base font-semibold">Product</h4>
          <ul className="space-y-2 text-gray-400 text-base text-center lg:text-left">
            <li>
              <a href="/pricing/advanced-feature">Features</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/aaa">Security</a>
            </li>
          </ul>
        </div>
        <div className="w-1/2 flex flex-col items-center lg:items-start gap-4">
          <h4 className="text-white text-base font-semibold">Company</h4>
          <ul className="space-y-2 text-gray-400 text-base text-center lg:text-left">
            <li>
              <a href="/about_us">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/aaa">Careers</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden items-center lg:items-start gap-4 flex-1 w-full lg:max-w-[320px]">
        <h4 className="text-white text-base font-semibold text-center lg:text-left">
          Subscribe to our newsletter
        </h4>
        <div className="flex w-full max-w-[400px] sm:w-1/2 lg:w-full gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 min-w-0 h-10 px-4 bg-white text-black lg:bg-[#1F2937]/40 lg:text-white placeholder-gray-400 rounded-lg backdrop-blur-md outline-none"
            defaultValue=""
          />
          <button className="h-10 px-4 bg-gradient-to-r from-[#F3CC5C] cursor-pointer to-[#F5B100] text-black text-base font-normal rounded-lg whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </div>
    <div className="w-full max-w-[1280px] pt-6 flex flex-col items-center gap-6 lg:gap-0 lg:flex-row lg:justify-between">
      <p className="text-gray-400 text-sm text-center lg:text-left">
        © 2025 PATRONIK.
        {/* */}All rights reserved.
      </p>
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-6 text-gray-400 text-sm text-center">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="/pricing/faq">Legal Mentions &amp; FAQ</a>
        <a href="#">Help Center</a>
      </div>
      <div className="flex gap-6">
        <a href="#">
          <img
            src="https://frontend-rho-nine-42.vercel.app/icons/x.svg"
            className="w-4 h-4"
            alt="X"
          />
        </a>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-instagram w-4 h-4 text-gray-400"
            aria-hidden="true"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-linkedin w-4 h-4 text-gray-400"
            aria-hidden="true"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width={4} height={12} x={2} y={9} />
            <circle cx={4} cy={4} r={2} />
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>

  );
}
