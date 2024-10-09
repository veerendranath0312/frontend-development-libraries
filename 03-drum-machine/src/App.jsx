function App() {
  const handleClick = (e) => {
    e.target.children[0].play()
  }

  return (
    <div id="drum-machine">
      <div id="display">
        <div className="drum-pads">
          <div className="drum-pad" id="heater1">
            Q
            <audio
              src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
              className="clip"
              id="Q"
            ></audio>
          </div>
          <div className="drum-pad" id="heater2">
            W
            <audio
              src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
              className="clip"
              id="W"
            ></audio>
          </div>
          <div className="drum-pad" id="heater3">
            E
            <audio
              src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
              className="clip"
              id="E"
            ></audio>
          </div>
          <div className="drum-pad" id="heater4">
            A
            <audio
              src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
              className="clip"
              id="A"
            ></audio>
          </div>
          <div className="drum-pad" id="clap">
            S
            <audio
              src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
              className="clip"
              id="S"
            ></audio>
          </div>
          <div className="drum-pad" id="openhh">
            D
            <audio
              src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
              className="clip"
              id="D"
            ></audio>
          </div>
          <div className="drum-pad" id="kicknhat">
            Z
            <audio
              src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
              className="clip"
              id="Z"
            ></audio>
          </div>
          <div className="drum-pad" id="kick">
            X
            <audio
              src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
              className="clip"
              id="X"
            ></audio>
          </div>
          <div className="drum-pad" id="closedhh">
            C
            <audio
              src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
              className="clip"
              id="C"
            ></audio>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
