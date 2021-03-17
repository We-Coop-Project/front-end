const NextArrow = (props) => {
  return (
    <span
      className="cursor-pointer absolute -bottom-10 right-10"
      onClick={props.onClick}
      type={props.type}
    >
      Next&rarr;
    </span>
  );
};

export default NextArrow;
