const SelectFilter = ({ handleSelectChange, categories }) => {
  return (
    <select onChange={handleSelectChange}>
      <option value="">All</option>
      {categories.map((category) => (
        <option value={category.categoryId} key={category.categoryId}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default SelectFilter;
