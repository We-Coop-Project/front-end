import React from "react";
import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <Loader
      type="Rings"
      color="#3B82F6"
      height={300}
      width={300}
      timeout={3000}
    />
  );
};

export default Loading;
