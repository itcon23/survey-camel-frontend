import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import MainLayout from "./Layout/MainLayout";
import Rewards from "./Pages/Rewards/Rewards";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";
import ResetPassword from "./Pages/Auth/ResetPassword";
import AuthLayout from "./Layout/AuthLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="rewards" element={<Rewards />} />
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
