// eslint-disable-next-line no-unused-vars
import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { fadeIn } from "../redux/variants";

// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];
const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);

  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="max-w-7xl mx-auto my-20"
    >
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Latest & Top </span>
        Job Openings
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {allJobs.length <= 0 ? (
          <span>No Job Available</span>
        ) : (
          allJobs
            ?.slice(0, 6)
            .map((job) => <LatestJobCards key={job._id} job={job} />)
        )}
      </div>
    </motion.div>
  );
};

export default LatestJobs;
