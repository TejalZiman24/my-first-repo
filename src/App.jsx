

import { useState } from 'react'
import styles from './App.module.css'

import BUttonsContainer from './Compoents/ButtonsContainer'
import Display from './Compoents/Display'

function App() {
  let [calVal, setCalValue] = useState("")
  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      setCalValue("");
    } else if (buttonText === '=') {
      const results =eval(calVal)
      setCalValue(results)
    } else {
      const newDisplayValue = calVal + buttonText
      setCalValue(newDisplayValue)
    }

  }

  return (
    <center>
      <div className={styles.calculator} >
        <Display calVal={calVal}></Display>
        <BUttonsContainer onButtonClick={onButtonClick}>
        </BUttonsContainer>

      </div>


    </center>
  )
}

export default App
