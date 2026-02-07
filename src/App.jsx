import { useState, useEffect } from 'react'
import './App.css'
import gdgIcon from '../gdg-icon.svg'

const questions = [
  {
    id: 1,
    name: 'Borze',
    code: '32B',
    link: 'https://codeforces.com/problemset/problem/32/B',
    difficulty: 800,
    tag: 'Easy',
    color: 'blue',
  },
  {
    id: 2,
    name: 'Reconnaissance',
    code: '32A',
    link: 'https://codeforces.com/problemset/problem/32/A',
    difficulty: 800,
    tag: 'Easy',
    color: 'red',
  },
  {
    id: 3,
    name: 'Patrick and Shopping',
    code: '599A',
    link: 'https://codeforces.com/problemset/problem/599/A',
    difficulty: 800,
    tag: 'Easy',
    color: 'yellow',
  },
  {
    id: 4,
    name: 'Die Roll',
    code: '9A',
    link: 'https://codeforces.com/problemset/problem/9/A',
    difficulty: 800,
    tag: 'Easy',
    color: 'green',
  },
  {
    id: 5,
    name: 'Taymyr is calling you',
    code: '764A',
    link: 'https://codeforces.com/problemset/problem/764/A',
    difficulty: 800,
    tag: 'Easy',
    color: 'blue',
  },
]

function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('codeclash-theme')
    return saved ? saved === 'dark' : true
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('codeclash-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div className="app">
      {/* GDG Brand Accent */}
      <div className="accent-bar">
        <span /><span /><span /><span />
      </div>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-brand">
            <img src={gdgIcon} alt="GDG" className="nav-gdg-icon" />
            <div className="nav-brand-text">
              <span className="nav-title">CodeClash</span>
              <span className="nav-edition">GDG KLH On Campus</span>
            </div>
          </div>
          <div className="nav-right">
            <a
              href="https://codeforces.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Codeforces ↗
            </a>
            <button
              className="theme-toggle"
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle theme"
              title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {dark ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14 9.68A6.5 6.5 0 016.32 2 7 7 0 1014 9.68z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-badge">
            <span className="badge-dot" />
            <span className="badge-text">Round 1 — Active</span>
          </div>
          <h1 className="hero-title">
            Code<span className="hero-highlight">Clash</span>
          </h1>
          <p className="hero-subtitle">
            Competitive Programming Contest by GDG KLH On Campus
          </p>
        </div>
      </header>

      {/* Problems */}
      <main className="main">
        <div className="section-header">
          <div>
            <h2 className="section-title">Problem Set</h2>
            <p className="section-desc">
              5 problems · All rated 800 · Sourced from Codeforces
            </p>
          </div>
        </div>

        <div className="table-card">
          <table className="table">
            <thead>
              <tr>
                <th className="th-num">#</th>
                <th>Problem</th>
                <th className="th-diff">Rating</th>
                <th className="th-action">Action</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((q) => (
                <tr key={q.id} className="table-row">
                  <td className="td-num">
                    <span className="row-number">{String(q.id).padStart(2, '0')}</span>
                  </td>
                  <td className="td-name">
                    <span className={`code-badge code-${q.color}`}>{q.code}</span>
                    <span className="problem-name">{q.name}</span>
                  </td>
                  <td className="td-diff">
                    <span className="rating-badge">{q.difficulty}</span>
                  </td>
                  <td className="td-action">
                    <a
                      href={q.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="solve-btn"
                    >
                      Solve
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src={gdgIcon} alt="GDG" className="footer-icon" />
            <span>CodeClash · GDG KLH On Campus</span>
          </div>
          <p className="footer-sub">Competitive programming, simplified.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
