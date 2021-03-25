// This file will be "Content.jsx". Content will be How to Use We-Coop text.
import Button from "../UI/Button";
import { useAuth } from "../../context/Auth-context";
import { Link } from "react-router-dom";

const FontCheck = () => {
  const { currentUser } = useAuth();

  return (
    <div className="text-center  px-8">
      <h1>What is We CO-OP</h1>
      <br />
      <p>
        This app manages the co-op's time calculation just by entering your
        school information.
      </p>
      <br />
      <p>
        This app manages the co-op's time calculation just by entering your
        school information.
      </p>
      <br />
      {!currentUser ? (
        <Link to={"/signin"}>
          <Button className="p-0" id="signout" button="Sign In" />
        </Link>
      ) : null}
    </div>
  );
};

export default FontCheck;
