import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";  
const App = () => {
  const [markdownText, setMarkdownText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [markdownText]); 

  const handleMarkdownChange = (event) => {
    setMarkdownText(event.target.value);
  };

  return (
    <div className="app">
      <div className="markdown-container">
        <div className="textarea">
          <h2>Markdown Editor</h2>
          <textarea
            value={markdownText}
            onChange={handleMarkdownChange}
            placeholder="Write your markdown here..."
            rows="15"
            cols="50"
          />
        </div>
        <div className="preview">
          <h2>Preview</h2>
          {loading ? (
            <div className="loading">Loading preview...</div>
          ) : (
            <ReactMarkdown>{markdownText}</ReactMarkdown>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
