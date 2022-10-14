import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/debounce";
import {
  useSearchUsersQuery,
  useLazyGetUserReposQuery,
} from "../store/github/github.api";

export const Home = () => {
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(search);
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true, //auto refresh / request
  });

  const [fetchRepos, { isLoading: areReposLoading, data: repos }] =
    useLazyGetUserReposQuery();

  useEffect(() => {
    setDropdown(debounced.length > 3 && data?.length! > 0);
  }, [debounced, data]);

  const clickHandler = (username: string) => {
    fetchRepos(username);
  };

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
        {dropdown && (
          <ul className="absolute list-none top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white">
            {isLoading && <p className="text-center">Loading...</p>}
            {data?.map((user) => (
              <li
                key={user.id}
                onClick={() => clickHandler(user.login)}
                className="py-2 px-4 hover:bg-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                {" "}
                {user.login}
              </li>
            ))}
            <div className="container">
              {areReposLoading && (
                <p className="text-center">Repos are loading...</p>
              )}
            </div>
          </ul>
        )}
      </div>
    </div>
  );
};
