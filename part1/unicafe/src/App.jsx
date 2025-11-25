import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const StatisticLine = ({ value, text }) => {
  return (
    <div>
      <p><b>{text}</b> {value}</p>
    </div>
  );
};

const Statistics = (props) => {
  if (!props.stats.total) {
    return <p>No feedback given</p>
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <StatisticLine value={props.stats.good} text="Good: " />
        <StatisticLine value={props.stats.neutral} text="Neutral: " />
        <StatisticLine value={props.stats.bad} text="Bad: " />
        <StatisticLine value={props.stats.total} text="All: " />
        <StatisticLine value={parseFloat(props.stats.score / props.stats.total)} text="Average: " />
        <StatisticLine value={parseFloat(props.stats.good / props.stats.total)} text="Positive: " />
      </div>
  );
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const score = good - bad; 
    //Neutral score is 0, good is +1, bad is -1

  const stats = {good: good, neutral: neutral, bad: bad, total: total, score: score};

  const handleGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
  };

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
  };

  const handleBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGood} text="Good" />
      <Button onClick={handleNeutral} text="Neutral" />
      <Button onClick={handleBad} text="Bad" />

      <Statistics stats={stats} />
    </div>
  )
}

export default App;