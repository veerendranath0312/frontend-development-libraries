import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import DOMPurify from 'dompurify'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css' // Import a highlight.js theme

function Previewer({ text }) {
  const marked = new Marked(
    markedHighlight({
      langPrefix: 'hljs language-',
      highlight: function (code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'javascript'
        const highlightedCode = hljs.highlight(code, {
          language,
        }).value

        return highlightedCode
      },
    })
  )

  const getMarkdownText = (text) => {
    const rawMarkup = marked.parse(text, { breaks: true })
    const sanitizedMarkup = DOMPurify.sanitize(rawMarkup)
    return { __html: sanitizedMarkup }
  }

  return (
    <article className="markdown-previewer">
      <h3 className="markdown-previewer__title">Preview</h3>
      <div
        className="markdown-previewer__content"
        id="editor"
        dangerouslySetInnerHTML={getMarkdownText(text)}
      />
    </article>
  )
}

export default Previewer
