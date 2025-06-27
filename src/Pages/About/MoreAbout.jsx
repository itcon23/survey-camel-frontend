import React from "react";

export default function MoreAbout() {
  return (
    <section className="mb-20">
      <div className="container">
        <div className="flex gap-6">
          {/* Item 1 */}
          <div className="rounded-md border border-gray-200 p-8 text-center">
            <img
              src="https://darwin-assets.dynata.com/OO-aboutpage-bucket-1.png"
              className="mx-auto"
              alt=""
            />
            <h4 className="text-xl font-bold mt-8 mb-3">TEST PRODUCTS</h4>
            <p>
              Try out prototypes and upcoming products - it's a great way to
              make your friends jealous.
            </p>
          </div>
          {/* Item 1 */}
          <div className="rounded-md border border-gray-200 p-8 text-center">
            <img
              src="https://darwin-assets.dynata.com/OO-aboutpage-bucket-2.png"
              className="mx-auto"
              alt=""
            />
            <h4 className="text-xl font-bold mt-8 mb-3">WATCH ADVERTS</h4>
            <p>Get rewarded for sitting back and watching the latest ads</p>
          </div>
          {/* Item 1 */}
          <div className="rounded-md border border-gray-200 p-8 text-center">
            <img
              src="https://darwin-assets.dynata.com/OO-aboutpage-bucket-3.png"
              className="mx-auto"
              alt=""
            />
            <h4 className="text-xl font-bold mt-8 mb-3">GO OUTSIDE</h4>
            <p>
              Take part in our real world missions and earn big in your
              neighbourhood.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
