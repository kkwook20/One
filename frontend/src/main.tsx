import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// 다크모드 설정
document.documentElement.classList.add('dark')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)