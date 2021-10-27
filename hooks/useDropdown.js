import React from "react";

const useDropdown = () => {
  const [selected, setSelected] = React.useState("");

  const handleSelectChange = (e) => {
    setSelected(e.target.value);
  };

  return { selected, handleSelectChange };
};

export default useDropdown;
