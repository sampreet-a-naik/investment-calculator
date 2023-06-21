import Header from "./component/Header/Header";
import UserInput from "./component/UserInput/UserInput";
import ResultTable from "./component/ResultsTable/ResultsTable";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header></Header>
      <UserInput onCalculate={calculateHandler}></UserInput>
      {!userInput && <div style={{textAlign:'center'}}> No investment calculated records found</div>}
      {userInput && <ResultTable data={yearlyData} initialInvestment={userInput['current-savings']}/>}
      
    </div>
  );
}

export default App;
