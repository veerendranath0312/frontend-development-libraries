export default function QuoteButtons(props) {
  const styles = {
    backgroundColor: props.randomColor,
  }

  return (
    <div className="quote-btns">
      <a
        style={styles}
        className="button"
        href="https://twitter.com/intent/tweet"
        id="tweet-quote"
        target="_blank"
      >
        <i className="fa fa-twitter"></i>
      </a>
      <a
        style={styles}
        className="button"
        href="https://www.tumblr.com/widgets/share/tool"
        id="tumblr-quote"
        target="_blank"
      >
        <i className="fa fa-tumblr"></i>
      </a>
      <button
        style={styles}
        className="button"
        id="new-quote"
        onClick={props.getQuote}
      >
        New quote
      </button>
    </div>
  )
}
