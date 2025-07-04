export default function Hero() {
  return (
    <section className="">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://darwin-assets.dynata.com/OO/oo-rewards-banner.jpg")`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xxl">
            <h1 className="mb-5 text-5xl font-bold">get rewarded your way</h1>
            <p className="mb-5">WE HAVE REWARDS TO SUIT EVERY TASTE</p>
            <button className="btn btn-primary">Get Started Free</button>
          </div>
        </div>
      </div>
    </section>
  );
}
