import { FaBoxOpen } from "react-icons/fa6";
import { IoGiftSharp } from "react-icons/io5";
import { MdOutlineQueryStats } from "react-icons/md";

import Stats1 from "../../assets/img/home/stats-2.avif";
import Stats2 from "../../assets/img/home/stats-3.avif";
import Stats3 from "../../assets/img/home/stats-1.avif";

export default function Stats() {
  return (
    <section className="mb-20">
        <div className="bg-cyan-500 text-white py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-center items-end gap-5">
          {/* Card Item */}
          <div
            style={{
              background: `url(${Stats1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover", // ensures image scales well
              backgroundPosition: "center", // centers the image
            }}
            className="rounded-md max-w-sm w-full text-center"
          >
            <div className="h-20 w-20 flex justify-center items-center bg-success border-2 rounded-full m-12">
              <MdOutlineQueryStats className="text-4xl" />
            </div>

            <div className="py-12"></div>
            <div className="drop-shadow-4xl bg-black opacity-70 py-5 px-12 rounded-md h-40">
              <p className="text-3xl font-bold text-left">$652,679,110</p>
              <p className="text-xl font-medium whitespace-normal text-left">
                Paid to members around the globe
              </p>
            </div>
          </div>
          {/* Card Item */}
          <div
            style={{
              background: `url(${Stats2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover", // ensures image scales well
              backgroundPosition: "center", // centers the image
            }}
            className="rounded-md max-w-sm w-full text-center"
          >
            <div className="h-20 w-20 flex justify-center items-center bg-success border-2 rounded-full m-12">
              <FaBoxOpen className="text-4xl" />
            </div>

            <div className="py-12"></div>
            <div className="drop-shadow-4xl bg-black opacity-70 py-5 px-12 rounded-md h-40">
              <p className="text-3xl font-bold text-left">7,000+</p>
              <p className="text-xl font-medium whitespace-normal text-left">
                gift cards redeemed daily from popular merchants and restaurants
              </p>
            </div>
          </div>
          {/* Card Item */}
          <div
            style={{
              background: `url(${Stats3})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover", // ensures image scales well
              backgroundPosition: "center", // centers the image
            }}
            className="rounded-md max-w-sm w-full text-center"
          >
            <div className="h-20 w-20 flex justify-center items-center bg-success border-2 rounded-full m-12">
              <IoGiftSharp className="text-4xl" />
            </div>

            <div className="py-12"></div>
            <div className="drop-shadow-4xl bg-black opacity-70 py-5 px-12 rounded-md h-40">
              <p className="text-3xl font-bold text-left">1,500+</p>
              <p className="text-xl font-medium whitespace-normal text-left">
                of retailers to earn cash-back from
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
