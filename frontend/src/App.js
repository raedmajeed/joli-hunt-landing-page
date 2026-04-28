import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";

// Lazy load pages for better performance
const LandingPage = lazy(() => import("./pages/LandingPage"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8]">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-[#D4A017] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-[#6B6B6B] font-semibold">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Suspense>
        <Toaster position="top-right" />
      </BrowserRouter>
    </div>
  );
}

export default App;

