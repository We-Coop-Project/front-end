// This file will be "Content.jsx". Content will be How to Use We-Coop text.
import { Link } from 'react-router-dom';
import Button from '../UI/Button'

const HomeText = () => {
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
      <Link to={'/signin'}>
        <Button className="p-0" id="signIn" button="Sign In"/>
      </Link>

    </div>
  );
};

export default HomeText;
