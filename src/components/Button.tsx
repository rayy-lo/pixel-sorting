import React from 'react'
import styles from '../styles/modules/Button.module.css'

interface ButtonProp {
  children: React.ReactNode
  handleClick: React.MouseEventHandler
  type: 'button' | 'submit'
}

const { button } = styles

export const Button = ({ type, children, handleClick }: ButtonProp) => {
  return (
    <button className={button} type={type === 'button' ? 'button' : 'submit'} onClick={handleClick}>
      {children}
    </button>
  )
}
