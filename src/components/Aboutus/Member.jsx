import React from "react";

const Member = (props) => {
  return (
    <div className="w-4/5 sm:w-5/6">
      <img className="MemberImg" src={props.image} alt={props.name} />
      <h6>{props.name}</h6>
      <small>
        <a href={props.url} target="_blank" className="hover:opacity-70">
          Link
        </a>
      </small>
    </div>
  );
};

export default Member;
