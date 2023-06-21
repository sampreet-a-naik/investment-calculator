import classes from './ResultsTable.module.css';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
 

const ResultTable = (props) => {
  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((perYearData) => (
          <tr key={perYearData.year}>
            <td>{perYearData.year}</td>
            <td>{formatter.format(perYearData.savingsEndOfYear)}</td>
            <td>{formatter.format(perYearData.yearlyInterest)}</td>
            <td>{formatter.format(perYearData.savingsEndOfYear - props.initialInvestment - perYearData.yearlyContribution * perYearData.year)}</td>
            <td>{formatter.format(props.initialInvestment + perYearData.yearlyContribution * perYearData.year)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ResultTable;
