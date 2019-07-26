import React, { useState }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Button = (props) => {
 const { handleClick, text } = props

  return (
    <button onClick={props.handleClick}> {props.text} </button>
  )
}



const Display = (props) => {
  const {good, neutral, bad} = props
  return (
    <div>
     <p>Good {props.good}</p>
     <p>Neutral {props.neutral}</p>
     <p>Bad {props.bad}</p>
    </div>
  )
}

const App = () => {
   
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
  
    return (
      <div>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral +1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
        <Display good={good} neutral={neutral} bad={bad}/>
      </div>
    )
  }
  


ReactDOM.render(<App />, document.getElementById('root'));


