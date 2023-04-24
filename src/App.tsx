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
function App() {
  return (
    <Routes>
      <Route path="/our-mission" element={<LandingPage />} />
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
    </Routes>
  );
}

export default App;
