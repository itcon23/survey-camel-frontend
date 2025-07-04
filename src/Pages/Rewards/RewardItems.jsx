import React from "react";

export default function RewardItems() {
  const cards = [
    {
      link: "https://api.tremendous.com/product_images/LNHNSG7UM7W8/card",
      name: "Cracker Barrel",
    },
    {
      link: "https://api.tremendous.com/product_images/DPIPLH0SRBO6/card",
      name: "Walmart",
    },
    {
      link: "https://api.tremendous.com/product_images/7YKR1UWE9SGL/card",
      name: "Darden Restaurants",
    },
    {
      link: "https://api.tremendous.com/product_images/US2OE0BB1VNY/card",
      name: "Spa & Wellness by Spa Week",
    },
    {
      link: "https://api.tremendous.com/product_images/QJ4T6Y5ORZFM/card",
      name: "Dave & Buster's",
    },
    {
      link: "https://api.tremendous.com/product_images/DC82VBYLI4CC/card",
      name: "Apple",
    },
    {
      link: "https://api.tremendous.com/product_images/PPLIQ80WQX7R/card",
      name: "Lego",
    },
    {
      link: "https://api.tremendous.com/product_images/H3NT6D9F1F2X/card",
      name: "Texas Roadhouse",
    },
    {
      link: "https://api.tremendous.com/product_images/L35H1ZBSUOKN/card",
      name: "Outback Steakhouse",
    },
    {
      link: "https://api.tremendous.com/product_images/DHZH2PC1DSC7/card",
      name: "Morton's The Steakhouse",
    },
    {
      link: "https://api.tremendous.com/product_images/CDMMRJLWKW94/card",
      name: "Spotify US",
    },
    {
      link: "https://api.tremendous.com/product_images/XRRU0EWKQI0F/card",
      name: "Crate & Barrel",
    },
    {
      link: "https://api.tremendous.com/product_images/GYRR4ES7O0IL/card",
      name: "Chewy®",
    },
    {
      link: "https://api.tremendous.com/product_images/HSV9D075LFPH/card",
      name: "West Elm",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Choose from 239+ Rewards
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Withdraw cash via PayPal or select from hundreds of gift cards.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-w-4 aspect-h-3 bg-gray-100">
                <img
                  src={card.link}
                  alt={card.name}
                  className="object-contain p-4 w-full h-full"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-base font-semibold text-gray-800">
                  {card.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
