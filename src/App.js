import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Layout/Header/Header";
import Footer from "./component/Layout/Footer/Footer";
import ErrorHandler from "./component/ErrorHandler/ErrorHandler";
import TimerPage from "./component/TimerPage/TimerPage/TimerPage";

export default function Main() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<TimerPage />} />
          <Route path="*" element={<ErrorHandler />} />
        </Routes>
      </main>
      <Footer />
    </Suspense>
  );
}
