import { useState, useRef, useEffect } from "react";

export const Hint = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  return (
    <div className="hintContainer">
      <div className="hintInner" onClick={() => setShowPopup(true)}>
        ?
      </div>
      {showPopup && (
        <div
          className="popupContainer"
          ref={ref}
          onBlur={() => setShowPopup(false)}
          tabIndex={0}
        >
          {props.hint}
        </div>
      )}
    </div>
  );
};
