import Image1 from "../../assets/img/home/home-1.avif";
import Image2 from "../../assets/img/home/home-2.avif";
import Image3 from "../../assets/img/home/home-3.avif";
export default function HowItWorks() {
  return (
    <section className="mb-20">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 opacity-90">How It Works</h2>
          <p className="opacity-70">
            After signing up, tell us about yourself to get personalized offers.
            Redeem gift cards to your favorite retailers like Amazon and Walmart
            or get cash back from PayPal.
          </p>
        </div>

        {/* Image One  */}
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={Image1} className="" />
            <div>
              <h1 className="text-5xl font-bold leading-14">
                Get paid to answer surveys. Anytime. Anywhere.
              </h1>
              <p className="py-6">
                Share your opinions by completing online surveys to earn extra
                cash. From single question polls to 30 minute market research
                questionnaires, there's always time to earn Swagbucks.
              </p>
              <button className="btn btn-primary">Sign Up Now</button>
            </div>
          </div>
        </div>
        {/* Image Two  */}
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div>
              <h1 className="text-5xl font-bold leading-14">
                Cash back shopping online & instore
              </h1>
              <p className="py-6">
                Swagbucks is one of the most extensive shopping rewards programs
                on the internet. Find coupons, promo codes, deals, and cash back
                offers to your favorite stores. Combine with your preferred
                credit card to earn additional cash back.
              </p>
              <button className="btn btn-primary">Sign Up Now</button>
            </div>
            <img src={Image2} className="" />
          </div>
        </div>
        {/* Image Thre  */}
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={Image3} className="" />
            <div>
              <h1 className="text-5xl font-bold leading-14">
                Entertainment that pays
              </h1>
              <p className="py-6">
                From web browser games to our popular Swagbucks Daily Trivia
                app, you can get paid to play games. Create or discover the
                latest short videos on Swagit.
              </p>
              <button className="btn btn-primary">Sign Up Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
