import { useEffect } from "react";
import axios from "axios";
// import { COMPANY_API_END_POINT } from "@/utils/constant";
import { useDispatch } from "react-redux";
import { setCompanies } from "@/redux/companySlice";

const useGetAllCompanies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(`https://dream-job-deploy-1.onrender.com/get`, {
          withCredentials: true,
        });
        // console.log("called");
        if (res.data.success) {
          dispatch(setCompanies(res.data.companies));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCompanies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useGetAllCompanies;
