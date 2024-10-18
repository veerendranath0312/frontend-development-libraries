import { useState } from 'react'
import DrumPads from './components/DrumPads'

function App() {
  const [power, setPower] = useState(true)
  const [bank, setBank] = useState(false)
  const [displayText, setDisplayText] = useState('')
  const [volume, setVolume] = useState(0.3)

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

  const handleVolumeChange = (e) => {
    setVolume(Number(e.target.value))
    setDisplayText(`Volume: ${Math.round(Number(e.target.value) * 100)}`)
  }

  const handleMouseUp = () => {
    setTimeout(() => setDisplayText(''), 1500)
  }

  return (
    <div id="drum-machine">
      <DrumPads setDisplayText={setDisplayText} bank={bank} volume={volume} />

      <div className="controls">
        <div className="control power-control">
          <p>Power</p>
          <div className="toggle-btn" onClick={togglePower}>
            <div className="inner"></div>
          </div>
        </div>
        <div className="display-text">
          <p id="display">{displayText ? displayText : <>&nbsp;</>}</p>
        </div>
        <div className="volume-slider">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            onMouseUp={handleMouseUp}
            onTouchEnd={handleMouseUp}
          />
        </div>
        <div className="control bank-control">
          <p>Bank</p>
          <div className="toggle-btn" onClick={toggleBank}>
            <div className="inner"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
