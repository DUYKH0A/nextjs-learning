import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="flex-1 min-h-screen w-full">
      {/* contact PATRONIK Header Section */}
      <section className="relative h-[690px] md:h-[600px] w-full hidden md:block">
        {/* image */}
        <div className="absolute inset-0">
          <Image
            src="/contact/bg-contact.jpg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-black/0" />
        <div className="relative ml-[80px] py-[173px] md:px-6 lg:px-8">
          <div className="hidden md:grid md:grid-cols-2 ">
            <div className="flex items-end justify-start h-full">
              <div className="text-left max-w-[690px]">
                <h1
                  className="text-6xl font-medium font-['DM_Serif_Display'] mb-6"
                  style={{ lineHeight: "normal" }}
                >
                  Contact Us
                </h1>
                <p className="text-[#4B5563] text-[20px] leading-[150%] sm:text-base md:text-lg lg:text-xl font-extralight text-center md:text-left lg:text-left align-middle">
                  We&apos;d love to hear from you. Get in touch with our team to
                  learn more about PATRONIK or get support for your fashion
                  design journey.
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
      {/* contact PATRONIK Header Section mobile */}
      <section className="md:hidden px-4 pt-24 pb-[54px]">
        <div className="text-center">
          <h1 className="text-3xl font-['DM_Serif_Display'] mb-4 leading-[100%]">
            Contact Us
          </h1>
          <p className="text-xl text-[#4B5563] font-['SF_Pro_Display'] leading-[150%]">
            We&apos;d love to hear from you. Get in touch with our team to learn
            more about PATRONIK or get support for your fashion design journey.
          </p>
        </div>
      </section>
      {/* Send us a Message */}
      <section className="sm:py-20 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* flex 1 */}
            <div className="flex-1 rounded-[24px] p-6 sm:p-8 shadow-[0_0_20px_rgba(17,24,39,0.08),0_16px_40px_rgba(17,24,39,0.12)]">
              <h2 className="text-[24px] sm:text-3xl lg:text-4xl mb-6 text-[#1A1A1A] font-['DM_Serif_Display']">
                Send us a Message
              </h2>
              {/* form */}
              <form action="" className="space-y-6">
                {/* full name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-['SF_Pro_Display_Bold'] mb-2 text-[#1A1A1A] font-semibold"
                  >
                    Full Name
                  </label>
                  <input
                    name=""
                    id="fullName"
                    className="w-full rounded-lg px-4 py-3 placeholder:font-['SF_Pro_Display'] border border-gray-300"
                    placeholder="Enter your full name"
                  />
                </div>
                {/* Email Address */}
                <div>
                  <label
                    htmlFor="emailAddress"
                    className="block text-sm font-['SF_Pro_Display_Bold'] mb-2 text-[#1A1A1A] font-semibold"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="emailAddress"
                    id="fullName"
                    className="w-full rounded-lg px-4 py-3 placeholder:font-['SF_Pro_Display'] border border-gray-300"
                    placeholder="Enter your email address"
                  />
                </div>
                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-['SF_Pro_Display_Bold'] mb-2 text-[#1A1A1A] font-semibold"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="fullName"
                    className="w-full rounded-lg px-4 py-3 placeholder:font-['SF_Pro_Display'] border border-gray-300"
                    placeholder="Select a subject"
                  />
                </div>
                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-['SF_Pro_Display_Bold'] mb-2 text-[#1A1A1A] font-semibold"
                  >
                    Message
                  </label>
                  <textarea
                    name=""
                    id="message"
                    rows={5}
                    className="w-full rounded-lg px-4 py-3 placeholder:font-['SF_Pro_Display'] border border-gray-300"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <button className="flex items-center justify-center rounded-lg bg-black text-white w-full py-3">
                  <Image
                    src="/contact/icons/Group.svg"
                    alt=""
                    className="mr-2"
                    width={16}
                    height={16}
                  />
                  <span className="font-['SF_Pro_Display']">Send</span>
                </button>
              </form>
            </div>
            {/* flex 2 */}
            <div className="flex-1 flex-col space-y-6">
              {/* col 1 */}
              <div className="flex-1 rounded-[24px] p-6 sm:p-8 shadow-[0_0_20px_rgba(17,24,39,0.08),0_16px_40px_rgba(17,24,39,0.12)]">
                <h2 className="mb-6 font-['DM_Serif_Display'] text-2xl lg:text-4xl">
                  Get in Touch
                </h2>
                <div className="space-y-6 mb-8">
                  <a href="" className="flex gap-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src="https://frontend-rho-nine-42.vercel.app/icons/Contact/Phone.svg"
                        alt="email"
                        objectFit="cover"
                        layout="fill"
                      />
                    </div>
                    <div>
                      <p className="text-[#1A1A1A] text-base font-['SF_Pro_Display_Bold'] font-semibold align-middle mb-1">
                        Phone
                      </p>
                      <p className="text-[#4B5563] text-base font-medium">
                        +1 (555) 123-4567
                      </p>
                      <p className="text-[#6B7280] text-sm">
                        Mon-Fri 9AM-6PM EST
                      </p>
                    </div>
                  </a>
                  <a href="" className="flex gap-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src="https://frontend-rho-nine-42.vercel.app/icons/Contact/Email.svg"
                        alt="email"
                        objectFit="cover"
                        layout="fill"
                      />
                    </div>
                    <div>
                      <p className="text-[#1A1A1A] text-base font-['SF_Pro_Display_Bold'] font-semibold align-middle mb-1">
                        Email
                      </p>
                      <p className="text-[#4B5563] text-base font-medium">
                        hello@patronik.com
                      </p>
                      <p className="text-[#6B7280] text-sm">
                        We&apos;ll respond within 24 hours
                      </p>
                    </div>
                  </a>
                  <a href="" className="flex gap-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src="https://frontend-rho-nine-42.vercel.app/icons/Contact/Address.svg"
                        alt="email"
                        objectFit="cover"
                        layout="fill"
                      />
                    </div>
                    <div>
                      <p className="text-[#1A1A1A] text-base font-['SF_Pro_Display_Bold'] font-semibold align-middle mb-1">
                        Address
                      </p>
                      <p className="text-[#4B5563] text-base font-medium">
                        123 Fashion District
                      </p>
                      <p className="text-[#6B7280] text-sm">
                        New York, NY 10001
                      </p>
                      <p className="text-[#6B7280] text-sm">United States</p>
                    </div>
                  </a>
                </div>
              </div>
              {/* col 2 */}
              <div className="flex-1 rounded-[24px] p-6 sm:p-8 shadow-[0_0_20px_rgba(17,24,39,0.08),0_16px_40px_rgba(17,24,39,0.12)]">
                <h2 className="text-2xl sm:text-3xl mb-6 text-[#1A1A1A] font-['DM_Serif_Display']">
                  Office Hours
                </h2>
                {/* Date */}
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-base text-[#4B5563] font-['SF_Pro_Display']">
                      Monday - Friday
                    </span>
                    <span className="text-base text-[#1A1A1A] font-semibold font-['SF_Pro_Display_Bold']">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-base text-[#4B5563] font-['SF_Pro_Display']">
                      Saturday
                    </span>
                    <span className="text-base text-[#1A1A1A] font-semibold font-['SF_Pro_Display_Bold']">
                      10:00 AM - 4:00 PM
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-base text-[#4B5563] font-['SF_Pro_Display']">
                      Sunday
                    </span>
                    <span className="text-base text-[#1A1A1A] font-semibold font-['SF_Pro_Display_Bold']">
                      Closed
                    </span>
                  </div>
                </div>
                {/* Emergency Support */}
                <div className="text-sm text-[#4B5563] mt-4 pt-4 border-t border-[#E5E7EB]">
                  <span className="font-['SF_Pro_Display_Bold'] font-semibold">
                    Emergency Support:
                  </span>
                  <span className="font-['SF_Pro_Display']">
                    {" "}
                    Available 24/7 for critical issues{" "}
                  </span>
                </div>
              </div>
              {/* col 3 */}
              <div className="flex-1 rounded-[24px] p-6 sm:p-8 shadow-[0_0_20px_rgba(17,24,39,0.08),0_16px_40px_rgba(17,24,39,0.12)]">
                <h2 className="text-[36px] sm:text-3xl  mb-6 text-[#1A1A1A] font-['DM_Serif_Display']">
                  Follow Us
                </h2>
                <div className="flex gap-4">
                  <Link href="">
                    <Image
                      src="/contact/icons/ig.svg"
                      width={48}
                      height={48}
                      alt=""
                      className=""
                    />
                  </Link>
                  <Link href="">
                    <Image
                      src="/contact/icons/x.svg"
                      width={48}
                      height={48}
                      alt=""
                      className=""
                    />
                  </Link>
                  <Link href="">
                    <Image
                      src="/contact/icons/in.svg"
                      width={48}
                      height={48}
                      alt=""
                      className=""
                    />
                  </Link>
                  <Link href="">
                    <Image
                      src="/contact/icons/fb.svg"
                      width={48}
                      height={48}
                      alt=""
                      className=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Find Our Office */}
      <section className="sm:py-20 md:py-24 lg:py-32 bg-[#FAF9F6] hidden lg:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="sm:text-4xl lg:text-5xl font-['DM_Serif_Display'] mb-4">
              Find Our Office
            </h2>
            <p className="text-xl text-[#4B5563] leading-[32.5px] font-['Roboto'] tracking-[-0.16px]">
              Visit us at our headquarters in the heart of New York&apos;s
              Fashion District
            </p>
          </div>
          <div className="rounded-lg shadow-lg max-w-[1214px] h-[384px]">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.038440147357!2d-73.99733272449045!3d40.7171702713928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a27ffdf2905%3A0xde05c3cbe8aae7a1!2sCoco%20Fashion!5e0!3m2!1svi!2s!4v1754552914065!5m2!1svi!2s"
              className="w-full h-full"
              loading="lazy"
            ></iframe> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57321.765201067465!2d108.29182706364108!3d16.1189027424897!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219af35a4961d%3A0x1e787acda053d158!2zQ2jDuWEgTGluaCDhu6huZw!5e0!3m2!1svi!2s!4v1756203869279!5m2!1svi!2s"
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
      {/* Frequently Asked Questions */}
      <section className="sm:py-20 md:py-24 lg:py-32 bg-white hidden lg:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 ">
            <h2 className="sm:text-4xl lg:text-5xl text-black font-['DM_Serif_Display'] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#4B5563] text-xl font-['Roboto'] leading-[32.5px] tracking-[-0.16px]">
              Quick answers to common questions about contacting us
            </p>
          </div>
          {/* body */}
          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            {/* col 1 */}
            <div className="p-[33px] rounded-lg hover:shadow-lg transition-shadow duration-300 shadow-[0_0_20px_rgba(17,24,39,0.08),0_16px_40px_rgba(17,24,39,0.12)]">
              <h3 className="text-xl font-['DM_Serif_Display'] mb-4 leading-[100%]">
                How quickly will you respond to my inquiry?
              </h3>
              <p className="text-base text-[#4B5563] font-['SF_Pro_Display'] leading-relaxed">
                We typically respond to all inquiries within 24 hours during
                business days. For urgent technical support issues, we aim to
                respond within 4 hours.
              </p>
            </div>
            {/* col 2 */}
            <div className="p-[33px] rounded-lg hover:shadow-lg transition-shadow duration-300 shadow-[0_0_20px_rgba(17,24,39,0.08),0_16px_40px_rgba(17,24,39,0.12)]">
              <h3 className="text-xl font-['DM_Serif_Display'] mb-4 leading-[100%]">
                How quickly will you respond to my inquiry?
              </h3>
              <p className="text-base text-[#4B5563] font-['SF_Pro_Display'] leading-relaxed">
                We typically respond to all inquiries within 24 hours during
                business days. For urgent technical support issues, we aim to
                respond within 4 hours.
              </p>
            </div>
            {/* col 3 */}
            <div className="p-[33px] rounded-lg hover:shadow-lg transition-shadow duration-300 shadow-[0_0_20px_rgba(17,24,39,0.08),0_16px_40px_rgba(17,24,39,0.12)]">
              <h3 className="text-xl font-['DM_Serif_Display'] mb-4 leading-[100%]">
                How quickly will you respond to my inquiry?
              </h3>
              <p className="text-base text-[#4B5563] font-['SF_Pro_Display'] leading-relaxed">
                We typically respond to all inquiries within 24 hours during
                business days. For urgent technical support issues, we aim to
                respond within 4 hours.
              </p>
            </div>
            {/* col 4 */}
            <div className="p-[33px] rounded-lg hover:shadow-lg transition-shadow duration-300 shadow-[0_0_20px_rgba(17,24,39,0.08),0_16px_40px_rgba(17,24,39,0.12)]">
              <h3 className="text-xl font-['DM_Serif_Display'] mb-4 leading-[100%]">
                How quickly will you respond to my inquiry?
              </h3>
              <p className="text-base text-[#4B5563] font-['SF_Pro_Display'] leading-relaxed">
                We typically respond to all inquiries within 24 hours during
                business days. For urgent technical support issues, we aim to
                respond within 4 hours.
              </p>
            </div>
            {/* col 5 */}
            <div className="p-[33px] rounded-lg hover:shadow-lg transition-shadow duration-300 shadow-[0_0_20px_rgba(17,24,39,0.08),0_16px_40px_rgba(17,24,39,0.12)]">
              <h3 className="text-xl font-['DM_Serif_Display'] mb-4 leading-[100%]">
                How quickly will you respond to my inquiry?
              </h3>
              <p className="text-base text-[#4B5563] font-['SF_Pro_Display'] leading-relaxed">
                We typically respond to all inquiries within 24 hours during
                business days. For urgent technical support issues, we aim to
                respond within 4 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
