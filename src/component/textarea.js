function LimitedTextarea({ value, limit }) {
  const [content, setContent] = React.useState(value);
  const setFormattedContent = (text) => {
    text.length > limit ? setContent(text.slice(0, limit)) : setContent(text);
  };
  React.useEffect(() => {
    setFormattedContent(content);
  }, []);
  return (
    <div>
      <textarea
        rows="8"
        cols="8"
        onChange={(event) => setFormattedContent(event.target.value)}
        value={content}
      />
      <label>
        {content.length}/{limit}
      </label>
      <style jsx>{`
        div {
          padding-bottom: 10px;
          textalight: left;
        }
        label,
        textarea {
          font-size: 0.8rem;
          letter-spacing: 1px;
        }
        textarea {
          padding: 10px;
          line-height: 1.5;
          border-radius: 5px;
          border: 1px solid #ccc;
          box-shadow: 1px 1px 1px #999;
          width: 100%;
        }
        label {
          display: block;
          margin-top: 10px;
          padding-left: 10px;
        }
      `}</style>
    </div>
  );
}
export default LimitedTextarea;
