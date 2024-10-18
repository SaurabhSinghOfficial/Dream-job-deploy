// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Loccation",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack developer"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "41k-1Lakh", "1 - 5Lakh"],
  },
];
const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();
  const changeHandler = (value) => {
    setSelectedValue(value);
  };
  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue]);
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h2 className="font-bold text-lg">Filter Jobs</h2>
      <hr className="mt-3" />
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {filterData.map((data, index) => (
          // eslint-disable-next-line react/jsx-key
          <div>
            <h2 className="font-bold text-lg">{data.filterType}</h2>

            {data.array.map((item, idx) => {
              const itemId = `${index}-${idx}`;
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={item} id={itemId} />
                  <Label htmlFor={itemId}>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
