// MainCourseMenuRoute.tsx
"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { MainCourseMenu } from "./MainCourseMenu"; // adjust path if needed

export default function MainCourseMenuRoute() {
  const navigate = useNavigate();

  return (
    <MainCourseMenu
      onBackClick={() => navigate("/main-course")} // 👈 go back to main menu
      onCategoryClick={(category) => {
        // This is optional — for now we just log it
        console.log("Category clicked:", category);

        // In future you could go to another page like:
        // navigate(`/menu/main-course/${category.toLowerCase()}`);
      }}
    />
  );
}
