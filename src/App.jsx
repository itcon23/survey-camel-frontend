import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import MainLayout from "./Layout/MainLayout";
import Rewards from "./Pages/Rewards/Rewards";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";
import ResetPassword from "./Pages/Auth/ResetPassword";
import AuthLayout from "./Layout/AuthLayout";
import TermsAndConditions from "./Pages/Others/TermsAndConditions";
import PrivacyPolicy from "./Pages/Others/PrivacyPolicy";
import Contact from "./Pages/Others/Contact";
import Jobs from "./Pages/Jobs/Jobs";
import JobDetails from "./Pages/JobDetails/JobDetails";
import { useEffect } from "react";

export default function App() {
   useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="rewards" element={<Rewards />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobs/:jobId" element={<JobDetails />} />
          <Route path="termsandconditions" element={<TermsAndConditions />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="auth" element={<AuthLayout />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="reset" element={<ResetPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
