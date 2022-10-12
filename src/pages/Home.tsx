import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/debounce";
import { useSearchUsersQuery } from "../store/github/github.api";

export const Home = () => {
  const [search, setSearch] = useState("");
  const debounced = useDebounce(search)
  const { isLoading, isError, data } = useSearchUsersQuery("elis-1");

  useEffect(() => {
    console.log(debounced);
  }, [debounced]);

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && (
        <p className="text-center text-red-600">Something went wrong!</p>
      )}

      <div className="relative w-[560px]">
        <input
          autoFocus 
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder="Search for github username..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis?
        </div>
      </div>
    </div>
  );
};
