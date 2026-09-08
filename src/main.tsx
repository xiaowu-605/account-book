import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// 屏幕宽 375px 时 html font-size = 37.5px，与 rootValue 对应
document.documentElement.style.fontSize =
  document.documentElement.clientWidth / 10 + 'px'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
