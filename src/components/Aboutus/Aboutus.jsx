import React from "react";

import Title from "../UI/Title";
import Member from "./Member";
import MemberData from "./MemberData";

const Aboutus = () => {
  // for loop of image path
  for (let index = 0; index < 4; index++) {
    const image = require(`../../assets/img/members/${index + 1}.png`).default;
    MemberData[index].image = image;
  }

  return (
    <div className="Aboutus">
      <div className="w-full text-center">
        <Title title="About Us" />
        <p className="mb-2 sm:mb-4">
          We want to do something useful for students who go to school like us.
          This app was created in that process, and we hope it will be useful to
          everyone.
        </p>
        {/* Members */}
        <div className="w-full flex flex-wrap lg:flex-no-wrap">
          {MemberData.map((member, index) => (
            <div className="w-1/2 sm:w-1/4 flex justify-center" key={index}>
              <Member
                image={member.image}
                name={member.name}
                url={member.url}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
