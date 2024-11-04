import React, { useState } from "react";
import { useReducer } from "react";
import "./App.css";
import InputComponent from "./components/InputComponent";
import RegisterForm from "./components/RegisterForm";
import Heading from "./components/Heading";
import Main from "./components/Main";
import MealsProvider from "./components/providers/MealsProvider";
import MealsList from "./components/providers/MealsList";
import Counter from "./components/providers/Counter";
import Fruits from "./components/lab/Fruits";
import FruitsCounter from "./components/lab/FruitsCounter";
import Count from "./components/statefull/Count";
import Greeting from "./components/stateless/Greeting";

const reducer = (state, action) => {
  if (action.type === "ride") return { money: state.money + 10 };
  if (action.type === "fuel") return { money: state.money - 50 };
  return new Error();
};

function App() {
  const [word, setWord] = useState("Eat");

  function handleClick() {
    setWord("Drink");
  }

  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const [fruits] = React.useState([
    { fruitName: "apple", id: 1 },
    { fruitName: "apple", id: 2 },
    { fruitName: "plum", id: 3 },
  ]);

  return (
    <div className="App">
      <InputComponent />
      <p>Register Form</p>
      <RegisterForm />
      <Heading message={word + " at Little Lemon"} />
      <button onClick={handleClick}>Click here</button>
      <Main msg="I passed through the Header and the Wrapper and I reached the Button component" />
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>

      {/* reducer */}
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({ type: "ride" })}>
          A new customer
        </button>
        <button onClick={() => dispatch({ type: "fuel" })}>
          Refill the tank!
        </button>
        <p></p>
      </div>

      {/* lab */}
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />

      {/* Statefull: Stateful components manage their own state, which can change over time (e.g., in response to user interactions). */}
      <Count />
      <p></p>

      {/* Stateless: Props from Parent: Stateless components (often functional components) receive data through props from their parent components. They do not manage any internal state and rely entirely on the props provided to them. */}
      <Greeting name="Gam" />
    </div>
  );
}

export default App;
