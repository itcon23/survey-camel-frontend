import HeroImg from "../../assets/hero.jpg";

export default function Hero() {
  return (
   <section className="mb-20">
     <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${HeroImg})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-xxl">
          <h1 className="mb-5 text-5xl font-bold">
            get paid for your opinions
          </h1>
          <p className="mb-5">
            EARN ROCKING REWARDS BY TAKING SURVEYS IN YOUR SPARE TIME
          </p>
          <button className="btn btn-primary">Get Started Free</button>
        </div>
      </div>
    </div>
   </section>
  )
}
