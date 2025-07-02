import React, { useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    document.body.className = theme ? "light" : "dark";
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => !prev);
  }

  function handleInput(e) {
    const text = e.target.value;
    const textLength = text.length;
    setCount(() => textLength);
  }

  return (
    <>
      <div className="app-container">
        <header>
          <h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
              width="40px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
            MemoWise
          </h1>
          <button
            className={theme ? "light" : "dark"}
            id="theme-toggle"
            title="Toggle Theme"
            onClick={toggleTheme}
          >
            {theme ? "🌞" : "🌙"}
          </button>
        </header>
        <main>
          <form id="note-form">
            <textarea
              id="note-input"
              maxLength="300"
              placeholder="Write something smart..."
              onChange={handleInput}
            ></textarea>
            <div className="form-footer">
              <span id="char-count">{count}/300</span>
              <button type="submit">➕ Add Note</button>
            </div>
          </form>

          <div id="notes-list"></div>
        </main>
      </div>
    </>
  );
}

export default App;
