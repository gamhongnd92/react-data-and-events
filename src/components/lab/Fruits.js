import React from "react";

function Fruits({ fruits }) {
  return (
    <div>
      {fruits.map((fruit) => (
        <p key={fruit.id}>{fruit.fruitName}</p>
      ))}
    </div>
  );
}
export default Fruits;
