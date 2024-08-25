function Editor({ text, onTextInput }) {
  return (
    <section className="markdown-editor">
      <div className="markdown-editor__header">
        <h1 className="markdown-editor__title">Markdown Previewer</h1>
        <span className="markdown-editor__subtitle">
          Made with ❤️ by Veerendra!
        </span>
      </div>
      <textarea
        className="markdown-editor__textarea"
        name="editor"
        id="editor"
        placeholder="Editor..."
        value={text}
        onChange={onTextInput}
      ></textarea>
    </section>
  )
}

export default Editor
