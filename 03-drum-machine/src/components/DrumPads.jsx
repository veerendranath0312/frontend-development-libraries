import { useEffect, useRef } from 'react'
import drumData from '../drumData'
import DrumPad from './DrumPad'

function DrumPads() {
  const drumPadsRef = useRef(null)

  useEffect(() => {
    const handleKeyStroke = (e) => {
      const keys = drumData.map((drum) => drum.key)
      console.log(drumPadsRef.current)
      if (keys.includes(e.key.toUpperCase())) {
        // The namedItem() method of the HTMLCollection interface returns the
        // first Element in the collection whose id or name attribute match
        // the specified name, or null if no element matches.

        // 'drumPadsRef.current.children' returns a HTML Collection
        const drumPadEl = drumPadsRef.current.children.namedItem(
          e.key.toUpperCase()
        )

        const audioEl = drumPadEl.children[0]
        audioEl.currentTime = 0
        audioEl.play()
      }
    }

    window.addEventListener('keydown', handleKeyStroke)

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
    <div className="drum-pads" ref={drumPadsRef}>
      {drumData.map((drum) => (
        <DrumPad key={drum.key} drum={drum} handleClick={handleClick} />
      ))}
    </div>
  )
}

export default DrumPads
