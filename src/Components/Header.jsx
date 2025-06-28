import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Change 50 to however far down you want it to trigger
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full py-6 drop-shadow-2xl z-50 transition-all duration-300 ${
        scrolled ? "bg-white text-blue-950" : "text-white"
      }`}
    >
      <div className="container">
        <div className="flex justify-center md:justify-between items-center">
          <h2 className="text-xl font-bold hidden md:block">Camel Survey</h2>

          <div className="flex gap-20 items-center">
            <ul className="flex gap-5 font-medium">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/rewards">Rewards</Link></li>
          </ul>

          <div className="flex gap-5">
            <button className="btn btn-accent"><Link to="/auth/signin">Sign In</Link></button>
            <button className="btn btn-outline btn-accent"><Link to="/auth/signup">Join</Link></button>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
}
