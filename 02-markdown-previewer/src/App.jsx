import { useState } from 'react'

import Editor from './Editor'
import Previewer from './Previewer'
import defaultMD from './default-md'

function App() {
  const [text, setText] = useState(defaultMD)

  return (
    <>
      <Editor text={text} onTextInput={(e) => setText(e.target.value)} />
      <Previewer text={text} />
    </>
  )
}

export default App
