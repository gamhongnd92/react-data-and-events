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
    </div>
  );
}

export default App;
