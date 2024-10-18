function DrumPad({ drum, handleClick, isPowerActive, isBankActive }) {
  return (
    <div
      className="drum-pad"
      id={isBankActive ? drum.bankId : drum.normalId}
      name={drum.key}
      onClick={handleClick}
    >
      {drum.key}
      <audio
        src={
          isPowerActive
            ? isBankActive
              ? drum.bankSound
              : drum.normalSound
            : '#'
        }
        className="clip"
        id={drum.key}
      ></audio>
    </div>
  )
}

export default DrumPad
