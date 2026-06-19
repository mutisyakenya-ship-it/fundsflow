import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

import Dashboard from "./pages/Dashboard";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
// import Submit from "./components/Registration";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import ProtectedRoute from "./components/ProtectedRoute";

//  ROLE REDIRECT
import RoleRedirect from "./components/RoleRedirect";

// 👤 INVESTOR IMPORTS
import InvestorDashboard from "./components/investor/InvestorDashboard";
import InvestorProfile from "./components/investor/InvestorProfile";
import BrowseProposals from "./components/investor/BrowseProposal";
import Investment from "./components/investor/Investment";
import InvestorWallet from "./components/investor/Wallet";
import InvestorAnalytics from "./components/investor/InvestorAnalytics";

//  ENTREPRENEUR IMPORTS
import EntrepreneurDashboard from "./components/entreprenuer/EntrepreneurDashboard";
import EntrepreneurProfile from "./components/entreprenuer/EntrepreneurProfile";
import MyProposals from "./components/entreprenuer/MyProposals";
import Submit from "./components/entreprenuer/Submit";
import EntrepreneurWallet from "./components/entreprenuer/EntrepreneurWallet";
import EntrepreneurAnalytics from "./components/entreprenuer/EntrepreneurAnalytics";


function AppContent() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated && <Navbar />}

      <Routes>

        {/* ================= LANDING ================= */}
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <Hero />
          }
        />

        {/* ================= AUTH ================= */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />

        {/* ================= ROLE REDIRECT ================= */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <RoleRedirect />
            </ProtectedRoute>
          }
        />

        {/* ================= GENERAL PAGES ================= */}
        <Route
          path="/submit"
          element={
            <ProtectedRoute>
              <Submit />
            </ProtectedRoute>
          }
        />

        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />

        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />

        {/* INVESTOR ROUTES */}
        <Route
          path="/investor/dashboard"
          element={
            <ProtectedRoute>
              <InvestorDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/investor/profile"
          element={
            <ProtectedRoute>
              <InvestorProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/investor/browse"
          element={
            <ProtectedRoute>
              <BrowseProposals />
            </ProtectedRoute>
          }
        />

        <Route
          path="/investor/investments"
          element={
            <ProtectedRoute>
              <Investment />
            </ProtectedRoute>
          }
        />

        <Route
          path="/investor/wallet"
          element={
            <ProtectedRoute>
              <InvestorWallet />
            </ProtectedRoute>
          }
        />

        <Route
          path="/investor/analytics"
          element={
            <ProtectedRoute>
              <InvestorAnalytics />
            </ProtectedRoute>
          }
        />

        {/* ================= ENTREPRENEUR ROUTES ================= */}
        <Route
          path="/entrepreneur/dashboard"
          element={
            <ProtectedRoute>
              <EntrepreneurDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/entrepreneur/profile"
          element={
            <ProtectedRoute>
              <EntrepreneurProfile />
            </ProtectedRoute>
          }

        />
        <Route
          path="/my-proposals"
          element={
            <ProtectedRoute>
              <MyProposals />
            </ProtectedRoute>
          }
        />
        <Route
          path="/submit-proposal"
          element={
            <ProtectedRoute>
              <Submit />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wallet"
          element={
            <ProtectedRoute>
              <EntrepreneurWallet />
            </ProtectedRoute>
          }
        />
        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <EntrepreneurAnalytics/>
            </ProtectedRoute>
          }
        />

        {/* ================= FALLBACK ================= */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
