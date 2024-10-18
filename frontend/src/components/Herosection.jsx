// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../redux/variants";

const Herosection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="text-center"
    >
      <div className="flex flex-col gap-5 my-10">
        <span className=" mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#f83002] font-medium">
          FIND THE JOB THAT FITS YOUR LIFE
        </span>
        <h1 className="text-5xl font-bold">
          Seacrch Apply & <br /> Get Your{" "}
          <span className="text-[#6A38C2]">Dream Jobs</span>
        </h1>
        <p className="text-medium">
          A job portal is a website where people who need jobs can find jobs and
          companies <br></br>looking for job seekers can find the perfect
          employees.
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-5 mx-auto">
          <input
            type="text"
            placeholder="Find Your Dream Jobs"
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full"
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-r-full bg-[#6A38C2]"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Herosection;
