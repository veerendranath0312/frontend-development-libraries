function App() {
  return (
    <>
      <div className="calc-container">
        <div className="result" id="display">
          <p className="input">308 x 42</p>
          <h1 className="output">12,936</h1>
        </div>
        <div className="keypad-grid">
          <button className="btn btn-clear" id="clear">
            AC
          </button>
          <button className="btn btn-operator" id="modulo">
            %
          </button>
          <button className="btn btn-operator" id="divide">
            /
          </button>
          <button className="btn btn-number" id="seven">
            7
          </button>
          <button className="btn btn-number" id="eight">
            8
          </button>
          <button className="btn btn-number" id="nine">
            9
          </button>
          <button className="btn btn-operator" id="multiply">
            x
          </button>
          <button className="btn btn-number" id="four">
            4
          </button>
          <button className="btn btn-number" id="five">
            5
          </button>
          <button className="btn btn-number" id="six">
            6
          </button>
          <button className="btn btn-operator" id="subtract">
            -
          </button>
          <button className="btn btn-number" id="one">
            1
          </button>
          <button className="btn btn-number" id="two">
            2
          </button>
          <button className="btn btn-number" id="three">
            3
          </button>
          <button className="btn btn-operator" id="add">
            +
          </button>
          <button className="btn btn-number" id="zero">
            0
          </button>
          <button className="btn btn-number" id="decimal">
            .
          </button>
          <button className="btn btn-operator" id="equals">
            =
          </button>
        </div>
      </div>
    </>
  )
}

export default App
