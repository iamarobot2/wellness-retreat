import { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "@material-tailwind/react";
import Header from "./../components/Header";
import Retreat from "./../components/Retreat";
import Pagination from "./../components/Pagination";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const [loading, setloading] = useState(true);
  const [retreats, setRetreats] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const limit = 6;
  useEffect(() => {
    const fetchRetreats = async () => {
      try {
        const { data } = await axios.get(
          `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${page}&limit=${limit}`
        );
        setRetreats(data);
        setloading(false);
        setError(false);
      } catch (error) {
        setError(true);
        toast.error("Error fetching retreat data");
        toast("Please Refresh the page.")
      }
    };
    const debounceFetch = setTimeout(fetchRetreats, 300);
    return () => clearTimeout(debounceFetch);
  }, [page]);
  return (
    <>
      <Header />
      <div className="lg:px-16 px-8 py-2.5 flex flex-col items-center">
        {loading ? (
          <div className="fixed inset-0 flex items-center justify-center">
            <Spinner className="h-8 w-8" />
          </div>
        ) : (
          <>
            <Pagination setPage={setPage} error={error} />
            <Retreat retreats={retreats} />
          </>
        )}
      </div>
      <Toaster position="top-right" />
    </>
  );
}
