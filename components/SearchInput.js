const SearchInput = ({ handleChange, keyword }) => {
  return (
    <input
      name="keyword"
      onChange={handleChange}
      placeholder="Enter keyword here to search"
      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-4"
      value={keyword}
    />
  );
};

export default SearchInput;
