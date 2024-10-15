function DrumPad({ drum, handleClick }) {
  return (
    <div
      className="drum-pad"
      id={drum.normalId}
      name={drum.key}
      onClick={handleClick}
    >
      {drum.key}
      <audio src={drum.normalSound} className="clip" id={drum.key}></audio>
    </div>
  )
}

export default DrumPad
