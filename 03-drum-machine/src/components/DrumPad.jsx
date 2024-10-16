function DrumPad({ drum, handleClick, bank }) {
  return (
    <div
      className="drum-pad"
      id={bank ? drum.bankId : drum.normalId}
      name={drum.key}
      onClick={handleClick}
    >
      {drum.key}
      <audio
        src={bank ? drum.bankSound : drum.normalSound}
        className="clip"
        id={drum.key}
      ></audio>
    </div>
  )
}

export default DrumPad
