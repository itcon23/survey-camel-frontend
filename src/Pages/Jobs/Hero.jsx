export default function Hero() {
  return (
   <section className="mb-20">
     <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url('https://shreethemes.net/jobstock-2.4/img/banner.jpg')`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-xxl">
          <h1 className="mb-5 text-5xl font-bold">
            Find the great jobs offer for you
          </h1>
          <p className="mb-5">
             Check what new jobs we have in store for you on Survey Camel.
          </p>
          <button className="btn btn-primary">Apply Now</button>
        </div>
      </div>
    </div>
   </section>
  )
}
