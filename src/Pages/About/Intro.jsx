import React from "react";

export default function Intro() {
  return (
    <section className="mb-20">
      <div className="container">
        {/* Item One */}
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse justify-between gap-5">
            <img
              src="https://webassets.ssisurveys.com/opinionoutpost/banner3/images/img_10.png"
              className="md:w-6/12"
            />
            <div className="md:w-6/12">
              <h1 className="text-2xl font-bold leading-14">
                what is opinion outpost?
              </h1>
              <p className="py-2">Tell us what you think - get paid. Simple.</p>
              <p className="py-2">
                Think of us like a swap-shop. You share your opinions and show
                us how you see the world - we give you rewards and cash.
              </p>
              <p className="py-2">
                Why do we do this? Well, a lot of people want to know how you
                think.
              </p>
              <p className="py-2">
                So, we gather up your thoughts and feedback, wrap them in a neat
                little bow and send over to companies eager to hear them. It's
                your voice in the ear of those that shape the future.
              </p>
            </div>
          </div>
        </div>
        {/* Item Two */}
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse justify-between gap-5">
            <div className="md:w-6/12">
              <h1 className="text-2xl font-bold leading-14">
                what is opinion outpost?
              </h1>
              <p className="py-2">Tell us what you think - get paid. Simple.</p>
              <p className="py-2">
                Think of us like a swap-shop. You share your opinions and show
                us how you see the world - we give you rewards and cash.
              </p>
              <p className="py-2">
                Why do we do this? Well, a lot of people want to know how you
                think.
              </p>
              <p className="py-2">
                So, we gather up your thoughts and feedback, wrap them in a neat
                little bow and send over to companies eager to hear them. It's
                your voice in the ear of those that shape the future.
              </p>
            </div>
            <img
              src="https://webassets.ssisurveys.com/opinionoutpost/banners4/images/img_0.png"
              className="md:w-6/12"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
