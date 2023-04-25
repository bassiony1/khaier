import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import {
  LoginPage,
  SignUpPage,
  PasswordResetPage,
  PasswordResetConfirmPage,
  OtpActivatePage,
  PasswordResetOtpPage,
  ProfileSignupPage,
} from "./pages/Auth";

import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SearchResultPage from "./pages/SearchResultPage";
import DonationPage from "./pages/DonationPage";
import CharitesListPage from "./pages/CharitesListPage";
import AboutUsPage from "./pages/AboutUsPage";
import OurServicePage from "./pages/OurServicePage";
import ContactUsPage from "./pages/ContactUsPage";
import ZakaPage from "./pages/ZakaPage";
import CategoryPage from "./pages/CategoryPage";
function App() {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signup/activate" element={<OtpActivatePage />} />
      <Route path="/signup/profile" element={<ProfileSignupPage />} />
      <Route path="/password-reset" element={<PasswordResetPage />} />
      <Route path="/password-reset/otp" element={<PasswordResetOtpPage />} />
      <Route
        path="/password-reset/confirm"
        element={<PasswordResetConfirmPage />}
      />

      <Route path="/search" element={<SearchResultPage />} />
      <Route path="/donations" element={<DonationPage />} />
      <Route path="/categories/:name" element={<CategoryPage />} />
      <Route path="/charites/" element={<CharitesListPage />} />
      <Route path="/" element={<HomePage />} />

      <Route path="/our-mission/" element={<LandingPage />} />
      <Route path="/not-found" element={<NotFoundPage />} />

      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/our-service/" element={<OurServicePage />} />
      <Route path="/contact-us/" element={<ContactUsPage />} />
      <Route path="/zaka/" element={<ZakaPage />} />
    </Routes>
  );
}

export default App;
