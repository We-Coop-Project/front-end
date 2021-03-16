import React from "react";
import Member from "./Member";
import MemberData from "./MemberData";

const Aboutus = () => {
  for (let index = 0; index < 4; index++) {
    const image = require(`../../assets/img/members/${index + 1}.png`).default;
    MemberData[index].image = image;
  }

  return (
    <div className="w-5/6 lg:w-2/3 text-center border-4">
      <h1>About Us</h1>
      <p className="my-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex eius vel
        voluptates repellat doloremque eveniet non labore ipsam quidem magnam,
        odio omnis sint, dolores accusantium voluptatum doloribus fuga
        distinctio temporibus quas architecto quo, autem officia aut. Magnam
        velit harum sapiente quia ipsa quidem molestiae laborum molestias?
      </p>

      <div className="w-full flex border-4">
        {MemberData.map((member, index) => (
          <div className="w-1/2 lg:w-1/4 border" key={index}>
            <Member image={member.image} name={member.name} url={member.url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aboutus;
