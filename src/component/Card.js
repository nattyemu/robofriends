import React from "react";
//or
//but use name instaid of props.name and soon
//const Card =({name, id, email}) =>{
const Card = (props) => {
  return (
    <div className="tc bg-light-green dib ma3 pa3 br3 grow bw2 shadow-5">
      <img src={`https://robohash.org/${props.id}?200x200`} alt="robot" />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
