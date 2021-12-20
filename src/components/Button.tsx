import React from 'react'
import '../styles/modules/Button.module.css'

interface ButtonProp {
  children: React.ReactNode
  handleClick: React.MouseEventHandler
}

export var Button = function ({ children, handleClick }: ButtonProp) {
  return <button onClick={handleClick}>{children}</button>
}
