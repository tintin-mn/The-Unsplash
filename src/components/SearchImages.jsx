import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchImages = ({ onSubmit }) => {

  const [term, setTerm] = useState();

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-y-2 justify-center">
      <label htmlFor="search" className="ml-3 text-xl font-semibold tracking-tight text-white">Find Whatever You
        Want</label>
      <div
        className="bg-white flex justify-center border-2 focus-within:border-violet-500 rounded-full overflow-hidden max-w-80 md:min-w-96 ">
        <input
          onChange={handleChange}
          type="text"
          autoComplete={"off"}
          id="search"
          placeholder="search ..."
          className="focus-within:outline-none w-full px-6 py-3" />
        <button className="bg-gray-500 p-3 rounded-full bg-gradient-to-r from-violet-500 to-violet-900">
          <CiSearch fill="white" size={"24px"} />
        </button>
      </div>
    </form>);
};

export default SearchImages;