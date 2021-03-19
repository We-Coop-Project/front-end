const BackArrow = (props) => {
  return (
    <span
      className="cursor-pointer absolute -bottom-10 left-10"
      onClick={props.onClick}
      type={props.type}
    >
      &larr;Back
    </span>
  );
};

export default BackArrow;
