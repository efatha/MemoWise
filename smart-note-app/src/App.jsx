import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="app-container">
    <header>
      <h1>📝 Smart Notes</h1>
      <button id="theme-toggle" title="Toggle Theme">🌙</button>
    </header>

    <main>
      <form id="note-form">
        <textarea id="note-input" maxlength="300" placeholder="Write something smart..."></textarea>
        <div class="form-footer">
          <span id="char-count">0/300</span>
          <button type="submit">➕ Add Note</button>
        </div>
      </form>

      <div id="notes-list"></div>
    </main>
  </div>

    </>
  )
}

export default App
