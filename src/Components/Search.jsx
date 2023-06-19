import { BiSearch, BiCaretDown, BiCheck } from "react-icons/bi";
import { useReducer } from "react";
import React from "react";

const DropDown = ({ sortBy, orderBy, onSortByChange, onOrderByChange }) => {
  return (
    <div
      className="origin-top-right absolute right-0 mt-2 w-56
      rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
    >
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
        onClick={(ev) => {
          let value = ev.target.dataset.value;
          let order = ev.target.dataset.ord;
          if (value) {
            onSortByChange(value);
          } else {
            onOrderByChange(order);
          }
        }}
      >
        <div
          data-value="petName"
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
        >
          Pet Name {sortBy === "petName" && <BiCheck />}
        </div>

        <div
          data-value="ownerName"
          onClick={() => onSortByChange("ownerName")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
        >
          Owner Name {sortBy === "ownerName" && <BiCheck />}
        </div>

        <div
          data-value="aptDate"
          onClick={() => onSortByChange("Date")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
        >
          Date {sortBy === "aptDate" && <BiCheck />}
        </div>
        <div
          data-ord="asc"
          onClick={() => onOrderByChange("asc")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2"
          role="menuitem"
        >
          Asc {orderBy === "asc" && <BiCheck />}
        </div>
        <div
          data-ord="desc"
          onClick={() => onOrderByChange("desc")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
        >
          Desc {orderBy === "desc" && <BiCheck />}
        </div>
      </div>
    </div>
  );
};

const Search = ({
  data,
  query,
  onQueryChange,
  sortBy,
  onSortByChange,
  orderBy,
  onOrderByChange,
}) => {
  const [toggleSort, setToggleSort] = useReducer((a) => !a, false);
  return (
    <div className="py-5">
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BiSearch />
          <label htmlFor="query" className="sr-only" />
        </div>
        <input
          // list="query"
          value={query}
          type="text"
          className="pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 py-3"
          placeholder="Search"
          onChange={(event) => onQueryChange(event.target.value)}
        />

        {/* <datalist id="query">
          {data.map((val) => (
            <>
              <option key={val.id} value={val.ownerName} />
            </>
          ))}
        </datalist> */}

        <div className="absolute inset-y-0 right-0 flex items-center">
          <div>
            <button
              type="button"
              onClick={setToggleSort}
              className="justify-center px-4 py-2 bg-blue-400 border-2 border-blue-400 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Sort By <BiCaretDown className="ml-2" />
            </button>

            {toggleSort && (
              <DropDown
                sortBy={sortBy}
                onSortByChange={(mySort) => onSortByChange(mySort)}
                orderBy={orderBy}
                onOrderByChange={(myOrder) => onOrderByChange(myOrder)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
