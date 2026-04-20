import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// Custom react manipulation
// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// }
// const anotherElement = (
//   <a href="http://google.com" target='_blank'>Google</a>
// )

// const reactElement = React.createElement(
//   'h1',
//   { type: 'text' },
//   'Welcome to custom manipulate'
// )

createRoot(document.getElementById('root')).render(
  <App />
  // anotherElement
  // reactElement
)
