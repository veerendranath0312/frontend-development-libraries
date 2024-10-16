import { useState } from 'react'
import DrumPads from './components/DrumPads'

function App() {
  const [power, setPower] = useState(true)
  const [bank, setBank] = useState(false)
  const [displayText, setDisplayText] = useState('')

  const togglePower = () => {
    const newPower = !power
    setPower(newPower)
    newPower || setDisplayText('')
  }

  const toggleBank = () => {
    const newBank = !bank
    setBank(newBank)
    newBank ? setDisplayText('Smooth Piano Kit') : setDisplayText('')
  }

  return (
    <div id="drum-machine">
      <DrumPads setDisplayText={setDisplayText} bank={bank} />

      <div className="controls">
        <div className="control power-control">
          <p>Power</p>
          <div className="toggle-btn" onClick={togglePower}></div>
        </div>
        <div className="display-text">
          <p id="display">{displayText ? displayText : <>&nbsp;</>}</p>
        </div>
        <div className="volume-slider">
          <input type="range" min="0" max="100" />
        </div>
        <div className="control bank-control">
          <p>Bank</p>
          <div className="toggle-btn" onClick={toggleBank}></div>
        </div>
      </div>
    </div>
  )
}

export default App
