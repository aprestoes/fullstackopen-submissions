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

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={() => {setGood(good + 1)}} text="Good" />
      <Button onClick={() => {setNeutral(neutral + 1)}} text="Neutral" />
      <Button onClick={() => {setBad(bad + 1)}} text="Bad" />

      <h1>Statistics</h1>
      <Display counter={good} text="Good: " />
      <Display counter={neutral} text="Neutral: " />
      <Display counter={bad} text="Bad: " />

    </div>
  )
}

export default App;