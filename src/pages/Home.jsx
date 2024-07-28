import { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "@material-tailwind/react";
import Header from "./../components/Header";
import Retreat from "./../components/Retreat";
import Filter from "./../components/Filter";

export default function Home() {
  const [loading, setloading] = useState(true);
  const [retreats, setRetreats] = useState([]);
  const [filter, setFilter] = useState({ type: "", date: "" });
  const [filteredRetreats, setFilteredRetreats] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchRetreats = async () => {
      const { data } = await axios.get(
        "https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats",
        {
          params: {
            search,
            filter: filter.type,
            date: filter.date,
          },
        }
      );
      setRetreats(data);
      setloading(false);
    };
    fetchRetreats();
  }, []);
  useEffect(() => {
    const applyFilters = () => {
      let filtered = retreats;

      if (filter.type) {
        filtered = filtered.filter((retreat) =>
          retreat.type.includes(filter.type)
        );
      }

      if (filter.date) {
        filtered = filtered.filter((retreat) => {
          const retreatDate = new Date(retreat.date * 1000).toISOString();
          return retreatDate.includes(filter.date);
        });
      }

      if (search) {
        filtered = filtered.filter((retreat) =>
          retreat.title.toLowerCase().includes(search.toLowerCase())
        );
      }

      setFilteredRetreats(filtered);
    };

    applyFilters();
  }, [filter, search, retreats]);
  return (
    <>
      <div className=" lg:px-16 px-8 py-2.5 flex flex-col justify-center items-center min-h-screen">
        <Header />
        {loading ? (
          <Spinner className="h-8 w-8" />
        ) : (
          <div>
            <Filter
              filter={filter}
              setFilter={setFilter}
              search={search}
              setSearch={setSearch}
            />
            <Retreat retreats={filteredRetreats} />
          </div>
        )}
      </div>
    </>
  );
}
