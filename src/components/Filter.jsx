import { Input } from "@material-tailwind/react";


export default function Filter({ filter, setFilter, search, setSearch })
{
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <Input
        type="text"
        label="Search retreat"
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border border-gray-300 rounded-md"
      />
      <select
        value={filter.type}
        onChange={(e) => setFilter({ ...filter, type: e.target.value })}
        className="p-2 border border-gray-300 rounded-md"
      >
        <option value="">All Types</option>
        <option value="Yoga">Yoga</option>
        <option value="Meditation">Meditation</option>
        <option value="Detox">Detox</option>
      </select>
      <input
        type="date"
        value={filter.date}
        onChange={(e) => setFilter({ ...filter, date: e.target.value })}
        className="p-2 border border-gray-300 rounded-md"
      />
    </div>
  );
}