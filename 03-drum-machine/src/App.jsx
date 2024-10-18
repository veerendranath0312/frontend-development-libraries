import { useState } from 'react'
import DrumPads from './components/DrumPads'
import Controls from './components/Controls'
import ToggleSwitch from './components/ToggleSwitch'
import DisplayLabel from './components/DisplayLabel'
import Slider from './components/Slider'

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
    // Making sure that the user can modify the bank state only when the power is ON
    if (power) {
      const newBank = !bank
      setBank(newBank)
      newBank ? setDisplayText('Smooth Piano Kit') : setDisplayText('')
    }
  }

  const handleVolumeChange = (e) => {
    setVolume(Number(e.target.value))
    setDisplayText(`Volume: ${Math.round(Number(e.target.value) * 100)}`)
  }

  const handleMouseUp = () => {
    setTimeout(() => setDisplayText(''), 1500)
  }

  return (
    <>
      <div id="drum-machine">
        <DrumPads
          setDisplayText={setDisplayText}
          power={power}
          bank={bank}
          volume={volume}
        />

        {/* <Controls
        togglePower={togglePower}
        toggleBank={toggleBank}
        displayText={displayText}
        volume={volume}
        handleVolumeChange={handleVolumeChange}
        handleMouseUp={handleMouseUp}
        bank={bank}
        power={power}
      /> */}

        {/* As I observed prop drilling and passing more number of props
          I used the component composition to write more clean code
      */}

        <Controls>
          <ToggleSwitch isActive={power} onToggle={togglePower}>
            Power
          </ToggleSwitch>
          <DisplayLabel displayText={displayText} />
          <Slider
            volume={volume}
            handleVolumeChange={handleVolumeChange}
            handleMouseUp={handleMouseUp}
            isActive={power}
          />
          <ToggleSwitch isActive={bank} onToggle={toggleBank}>
            Bank
          </ToggleSwitch>
        </Controls>
      </div>
      <footer>
        <p>Made with 🖤 by Veerendranath | freeCodeCamp</p>
      </footer>
    </>
  )
}

export default App
