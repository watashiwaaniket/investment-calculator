import UserInput from "./components/UserInput";
import Header from "./components/Header";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 100000,
    annualInvestment: 12000,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration >= 1;


  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
        return{
            ...prevUserInput,
            [inputIdentifier]: +newValue
        };
    });
  }


  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChangeInput={handleChange} />
    {!inputIsValid && <p className="center">Please enter a duration greater than zero</p>}
    {inputIsValid && <Results input={userInput}  />}
    </>
  )
}

export default App
