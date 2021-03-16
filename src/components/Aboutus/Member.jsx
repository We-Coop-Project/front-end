import React from "react";

const Member = (props) => {
  return (
    <div className="px-4">
      <img
        className="rounded-full border-4 border-blue-500"
        src={props.image}
        alt={props.name}
      />
      <h5>{props.name}</h5>
      <p>{props.url}</p>
    </div>
  );
};

export default Member;
