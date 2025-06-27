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
    <section className="mb-20">
      <div className="container">
        <div className="my-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            Choose from 239+ rewards
          </h2>
          <p className="text-xl text-gray-600 text-center mb-10">
            Withdraw cash via PayPal or choose from hundreds of different Gift Cards
          </p>
          <div className="flex flex-wrap gap-5 justify-center">
            {cards.map((card, index) => (
              <div
                key={index}
                className="rounded-md p-5 border-2 border-gray-200 pb-6 hover:shadow-2xl w-60 text-center"
              >
                <div className="h-60 flex items-center justify-center">
                  <img src={card.link} alt={card.name} className="max-h-full" />
                </div>
                <hr className="bg-gray-300 my-4" />
                <h2 className="text-lg font-bold">{card.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
