// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import Herosection from "./Herosection";
import CategoryCarousel from "./CategoryCarousel";
import LatestJobs from "./LatestJobs";
import { Footer } from "./Footer";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role == "recruiter") {
      navigate("/admin/companies");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Navbar />
      <Herosection />
      <CategoryCarousel />
      <LatestJobs />
      <Footer />
    </div>
  );
};

export default Home;
