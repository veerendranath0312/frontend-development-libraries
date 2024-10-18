function Slider({ volume, handleVolumeChange, handleMouseUp, isActive }) {
  return (
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
        // Disabling the range slider when the power is OFF
        disabled={!isActive}
      />
    </div>
  )
}

export default Slider
