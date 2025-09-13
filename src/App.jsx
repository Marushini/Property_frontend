import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

/* top-level pages */
import Dashboard from "./pages/Dashboard";

/* role dashboards */
import BuyerDashboard from "./pages/Buyer/BuyerDashboard";
import SellerDashboard from "./pages/Seller/SellerDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";

/* auth pages */
import BuyerLogin from "./pages/Auth/BuyerLogin";
import SellerLogin from "./pages/Auth/SellerLogin";
import AdminLogin from "./pages/Auth/AdminLogin";

import BuyerRegister from "./pages/Auth/BuyerRegister";
import SellerRegister from "./pages/Auth/SellerRegister";
import AdminRegister from "./pages/Auth/AdminRegister";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="app-container">
        <Routes>
          {/* Public route */}
          <Route path="/" element={<Dashboard />} />

          {/* Auth routes */}
          <Route path="/auth/buyerlogin" element={<BuyerLogin />} />
          <Route path="/auth/sellerlogin" element={<SellerLogin />} />
          <Route path="/auth/adminlogin" element={<AdminLogin />} />

          <Route path="/auth/buyerregister" element={<BuyerRegister />} />
          <Route path="/auth/sellerregister" element={<SellerRegister />} />
          <Route path="/auth/adminregister" element={<AdminRegister />} />

          {/* Role dashboards */}
          <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
          <Route path="/seller/dashboard" element={<SellerDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
