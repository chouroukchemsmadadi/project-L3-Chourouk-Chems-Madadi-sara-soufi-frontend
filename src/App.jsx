import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import BookingForm from "./components/BookingForm.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import H from "./components/H1.jsx";
import Events from "./components/Events.jsx";
import Footer from "./components/Footer.jsx";
import HotelSection from "./components/HotelSection.jsx";
import Enjoy from "./components/enjoy.jsx";
import Auth from "./components/Login.jsx";
import Rooms from "./components/Rooms.jsx";
import Photogallery from "./components/Photogallery.jsx"; // Add the import for Photogallery
import Blog from "./components/blog.jsx"; // تأكد من استيراد ملف Blog
import ProfilePage from "./components/account.jsx"; // تأكد من استيراد ملف Blog
import Restaurant from "./components/restaurant.jsx"; // تأكد من استيراد ملف Blog

import Suites from "./components/suites.jsx"; // تأكد من استيراد ملف Blog
import Familly from "./components/Familly.jsx";
import Single from "./components/Single.jsx";

const Home = () => (
  <>
    <Header />
    <HeroSection />
    <BookingForm />
    <Enjoy />
    <HotelSection />
    <WhyChooseUs />
    <Events />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/about" element={<H />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/account" element={<ProfilePage />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/suites" element={<Suites />} />
        <Route path="/familly" element={<Familly />} />
        <Route path="/single" element={<Single />} />

       <Route path="/photogallery" element={<Photogallery />} /> {/* Add the new route for Photogallery */}
       <Route path="/blog" element={<Blog />} /> {/* إضافة مسار صفحة Blog */}
      </Routes>

    </Router>
  );
};

export default App;
