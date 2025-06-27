export default function Hero() {
  return (
    <section className="mb-20">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url('https://darwin-assets.dynata.com/OO-about-hero.jpg')`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xxl">
            <h1 className="mb-5 text-5xl font-bold">
              allow us to introduce ourself...
            </h1>
            <p className="mb-5">
              LEARN WHAT WE DO AND HOW WE DO IT (IT'S SIMPLE, WE PROMISE).
            </p>
            <button className="btn btn-primary">Get Started Free</button>
          </div>
        </div>
      </div>
    </section>
  );
}
