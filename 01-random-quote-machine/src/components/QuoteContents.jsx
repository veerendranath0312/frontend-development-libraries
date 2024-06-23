export default function QuoteContents(props) {
  const styles = {
    color: props.randomColor,
  }

  return (
    <div style={styles} className="quote-content">
      <p id="text">
        <i className="fa fa-quote-left" aria-hidden="true"></i>
        {props.content}
      </p>
      <p id="author">- {props.author}</p>
    </div>
  )
}
