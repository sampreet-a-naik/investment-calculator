import { useState } from "react";
import classes from './UserInput.module.css'
const initialUserInput = {
  "current-savings": 15000,
  "yearly-contribution": 820,
  "expected-return": 7,
  duration: 12,
}
const UserInput = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);
  const submitForm = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };
  const resetForm = () => {
    setUserInput(initialUserInput)
  };
  const inputHandler = (input, value) => {
    setUserInput ((prevInput) => {
      return {
            ...prevInput,
            [input]: +value,
          };
    })
  };

  return (
    <form onSubmit={submitForm} className={classes.form} >
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(event) =>
              inputHandler("current-savings", event.target.value)
            }
            value={userInput['current-savings']}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(event) =>
              inputHandler('"yearly-contribution', event.target.value)
            }
            value={userInput['yearly-contribution']}
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(event) =>
              inputHandler("expected-return", event.target.value)
            }
            value={userInput['expected-return']}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(event) => inputHandler("duration", event.target.value)}
            value={userInput['duration']}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button onClick={resetForm} type="reset" className={classes.buttonAlt} >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
