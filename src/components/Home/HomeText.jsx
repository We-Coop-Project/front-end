// This file will be "Content.jsx". Content will be How to Use We-Coop text.
import Button from "../UI/Button";
import { useAuth } from "../../context/Auth-context";
import { Link } from "react-router-dom";

const HomeText = () => {
  const { currentUser } = useAuth();

  return (
    <div className="text-center px-8">
      <h1>We CO-OP</h1>
      <br />
      <div className="px-14">
        <p>
          This app manages the co-op's time calculation just by entering your
          school information. If you have a Google or Facebook account, it only
          takes 3 minutes to set up and it's easy to manage. Let's try!
        </p>
      </div>
      <br />
      {!currentUser ? (
        <Link to={"/signin"}>
          <Button className="p-0" id="signout" button="Sign In" />
        </Link>
      ) : null}
    </div>
  );
};

export default HomeText;
