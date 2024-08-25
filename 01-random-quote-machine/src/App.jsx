import React from 'react'
import QuoteContents from './components/QuoteContents'
import QuoteButtons from './components/QuoteButtons'

function App() {
  const [quote, setQuote] = React.useState({
    author: 'Marcus Aurelius',
    content:
      'Very little is needed to make a happy life; it is all within yourself, in your way of thinking.',
  })

  const [randomColor, setRandomColor] = React.useState(generateRandomColor())

  React.useEffect(() => {
    document.body.style.backgroundColor = randomColor
  }, [randomColor])

  function generateRandomColor() {
    return `rgb(
      ${Math.floor(Math.random() * 255)}, 
      ${Math.floor(Math.random() * 255)}, 
      ${Math.floor(Math.random() * 255)})
    `
  }

  const getQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => setQuote({ author: data.author, content: data.content }))

    setRandomColor(generateRandomColor())
  }

  return (
    <div className="container">
      <div id="quote-box">
        <QuoteContents
          content={quote.content}
          author={quote.author}
          randomColor={randomColor}
        />
        <QuoteButtons getQuote={getQuote} randomColor={randomColor} />
      </div>
      <footer>
        made with <span className="emoji">❤️</span> by <i>veerendranath</i>
      </footer>
    </div>
  )
}

export default App
