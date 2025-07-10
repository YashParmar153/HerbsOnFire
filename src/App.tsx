import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Teppanyaki from "./components/Teppanyaki";
import AboutPage from "./components/about_Page/AboutPage"
import MenuCard from "./components/Teppanyaki_Menucard/MenuCard";
import Reservation from "./Reservation";
import MainCourseMenu from "./components/Menu_hof/MainCourseMenu";
import MainCourseMenuRoute from "./components/Menu_hof/MainCourseMenuRoute";
import Mocktail_menu from "./components/Menu_mocktails/MainCourseMenu";
import ContactUs from "./components/contact_page/ContactUs"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/teppenyaki" element={<Teppanyaki />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/teppenyaki_menu" element={<MenuCard />}/>
        <Route path="/menu/main-course" element={<MainCourseMenu />} />
        <Route path="/main-course" element={<MainCourseMenuRoute />} />
        <Route path="/mocktails" element={<Mocktail_menu />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
