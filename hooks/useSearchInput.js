import React from "react";

const useSearchInput = () => {
  const [keyword, setKeyword] = React.useState("");

  const handleChange = (e) => setKeyword(e.target.value);

  return { handleChange, keyword };
};

export default useSearchInput;
