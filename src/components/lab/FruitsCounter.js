const FruitsCounter = ({ fruits }) => {
  const uniqueFruits = new Set(fruits.map((fruit) => fruit.fruitName));
  return (
    <div>
      <h3>Total of fruits: {uniqueFruits.size}</h3>
    </div>
  );
};

export default FruitsCounter;
