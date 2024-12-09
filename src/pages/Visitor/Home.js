import React from "react";
import Hero from "../../components/Visitor/Home/Hero";
import PopularCourses from "../../components/Visitor/Home/PopularCourses";
import Testimonials from "../../components/Visitor/Home/Testimonials";
import QuiSommeNous from "../../components/Visitor/Home/QuiSommeNous";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <QuiSommeNous />
      <PopularCourses />
      <Testimonials />
    </div>
  );
}

export default Home;
