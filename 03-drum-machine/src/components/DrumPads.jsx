import { useEffect } from 'react'
import drumData from '../drumData'
import DrumPad from './DrumPad'

function DrumPads() {
  const handleKeyStroke = (e) => {
    const keys = drumData.map((drum) => drum.key)
    if (keys.includes(e.key.toUpperCase())) {
      console.log('Pressed Key: ', e.key)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyStroke)
    document.querySelector()

    return () => {
      window.addEventListener('keydown', handleKeyStroke)
    }
  }, [])

  const handleClick = (e) => {
    const audio = e.target.children[0]
    audio.currentTime = 0
    audio.play()
  }

  return (
    <div className="drum-pads">
      {drumData.map((drum) => (
        <DrumPad key={drum.key} drum={drum} handleClick={handleClick} />
      ))}
    </div>
  )
}

export default DrumPads
