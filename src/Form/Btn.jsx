import React from "react";

const Btn = ({ name, color }) => {
  return (
    <button
      type="submit"
      className={`${color} ${color} font-semibold w-full rounded-md py-2 text-sm`}
    >
      {name}
    </button>
  );
};

export default Btn;
