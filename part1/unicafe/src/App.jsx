import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const Display = ({ counter, text }) => {
  return (
    <div>
      <p><b>{text}</b> {counter}</p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [score, setScore] = useState(0);

  const handleGood = () => {
    setScore(score + 1);
    const updatedGood = good + 1;
    setGood(updatedGood);
    setTotal(updatedGood + neutral + bad);
  };

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(updatedNeutral + good + bad);
  };

  const handleBad = () => {
    setScore(score - 1);
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setTotal(updatedBad + neutral + good);
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGood} text="Good" />
      <Button onClick={handleNeutral} text="Neutral" />
      <Button onClick={handleBad} text="Bad" />

      <h1>Statistics</h1>
      <Display counter={good} text="Good: " />
      <Display counter={neutral} text="Neutral: " />
      <Display counter={bad} text="Bad: " />
      <Display counter={total} text="All: " />
      <Display counter={parseFloat(score / total)} text="Average: " />
      <Display counter={parseFloat(good / total)} text="Positive: " />

    </div>
  )
}

export default App;