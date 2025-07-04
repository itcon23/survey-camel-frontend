import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";



export default function Header() {

  
  const location = useLocation();
  const [bgDark, setBgDark] = useState(false);
  useEffect(() => {
    let pathName = location.pathname.split("/")[1];

    if (pathName !== "" && pathName !== "about" && pathName !== "rewards" && pathName !== "jobs") {
      setBgDark(true);
    } else {
      setBgDark(false);
    }
  }, [location.pathname]);

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
  className={`
    fixed top-0 left-0 w-full py-6 drop-shadow-2xl z-50 
    transition-all duration-300
    ${
      bgDark || scrolled 
        ? "bg-white text-blue-950"  // Applied if either bgDark or scrolled is true
        : "text-white"             // Default state (transparent bg, white text)
    }
  `}
>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold hidden md:block"><Link to="/">Camel Survey</Link></h2>

          <div className="flex gap-20 items-center">
            <ul className="flex gap-5 font-medium">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/rewards">Rewards</Link>
              </li>
            </ul>

            <div className="flex gap-5">
              <button className="btn btn-accent">
                <Link to="/auth/signin">Sign In</Link>
              </button>
              <button className="hidden md:block btn btn-outline btn-accent">
                <Link to="/auth/signup">Join</Link>
              </button>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}
