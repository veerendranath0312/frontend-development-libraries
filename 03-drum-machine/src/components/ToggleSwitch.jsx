function ToggleSwitch({ isActive, onToggle, children }) {
  return (
    <div className="control power-control">
      <p>{children}</p>
      <div className="toggle-btn" onClick={onToggle}>
        <div className={`inner ${isActive && 'toggle-active'}`}></div>
      </div>
    </div>
  )
}

export default ToggleSwitch
