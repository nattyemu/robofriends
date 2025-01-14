import Card from "./Card";
import React from "react";

const CardList = ({ robots }) => {
  // if (true) {
  //   throw new Error("NOOOOOOOO!");
  // }
  const cardComponent = robots.map((user, i) => {
    return (
      <div key={robots[i].username}>
        <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />
      </div>
    );
  });
  return <div>{cardComponent}</div>;
};

export default CardList;
