import { useEffect, useRef } from 'react'
import drumData from '../drumData'
import DrumPad from './DrumPad'

function DrumPads({ setDisplayText, power, bank, volume }) {
  const drumPadsRef = useRef(null)

  useEffect(() => {
    const handleKeyStroke = (e) => {
      // Mapping all the keys: [Q, W, E, A, S, D, Z, X, C]
      const keys = drumData.map((drum) => drum.key)

      if (keys.includes(e.key.toUpperCase())) {
        // The namedItem() method of the HTMLCollection interface returns the
        // first Element in the collection whose id or name attribute match
        // the specified name, or null if no element matches.

        // 'drumPadsRef.current.children' returns a HTML Collection
        const drumPadEl = drumPadsRef.current.children.namedItem(
          e.key.toUpperCase()
        )

        const audioEl = drumPadEl.children[0]

        if (power) {
          audioEl.currentTime = 0
          audioEl.volume = volume
          audioEl.play()
          // Updating the displayText state only when the power is on
          setDisplayText(drumPadEl.id)
        }
      }
    }

    window.addEventListener('keydown', handleKeyStroke)

    // Correctly remove the event listener in the cleanup function
    return () => {
      window.removeEventListener('keydown', handleKeyStroke)
    }
  }, [volume, power, setDisplayText])

  const handleClick = (e) => {
    const audio = e.target.children[0]

    if (power) {
      audio.currentTime = 0
      audio.volume = volume
      audio.play()
      // Updating the displayText state only when the power is on
      setDisplayText(e.target.id)
    }
  }

  return (
    <div className="drum-pads" ref={drumPadsRef}>
      {drumData.map((drum) => (
        <DrumPad
          key={drum.key}
          drum={drum}
          handleClick={handleClick}
          isBankActive={bank}
          isPowerActive={power}
        />
      ))}
    </div>
  )
}

export default DrumPads
