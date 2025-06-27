import React from "react";

export default function AvgEarning() {
  return (
    <section className="mb-20">
      <div className="container">
        <div className="my-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            how much can I earn?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-10">
            When we say your opinions are valuable, we mean it.
            <br />
            Every time you complete one of our surveys, you'll earn Opinion
            Points.
            <br />
            An average survey pays out around 10 points but can be worth as much
            as 250 points.
            <br />
          </p>
        </div>

        <div className="max-w-[900px] mx-auto">
            <div className="hero">
          <div className="hero-content flex-col md:flex-row items-start gap-20">

            <div>
              <p className="py-6">So, how much could you earn?</p>
              <h1 className="text-5xl font-bold mb-20">Just ask Alex</h1>
              <p>
                Alex joined us and after just 2 weeks, he'd completed 10 surveys
                and earned him 100 points. Alex then redeemed for an Amazon Gift
                Card worth $10.*
              </p>
            </div>
                        <img
              src="https://darwin-assets.dynata.com/OO/alex@2x.png"
              className="max-w-sm rounded-lg"
            />
          </div>
        </div>
        <div className="bg-blue-950 -mt-4 p-4 rounded-md">
<p className="text-white text-sm">Understandably, Alex is delighted. Just one of the thousands of happy members getting rewarded with Opinion Outpost.

</p>
        </div>
        </div>
      </div>
    </section>
  );
}
