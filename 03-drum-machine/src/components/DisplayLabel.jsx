function DisplayLabel({ displayText }) {
  return (
    <div className="display-text">
      <p id="display">{displayText ? displayText : <>&nbsp;</>}</p>
    </div>
  )
}

export default DisplayLabel
