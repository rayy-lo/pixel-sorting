import React from 'react'
import styles from '../styles/modules/Button.module.css'

interface ButtonProp {
  children: React.ReactNode
  handleClick: React.MouseEventHandler
  type: 'button' | 'submit'
  disabled: boolean
}

const { button } = styles

export const Button = ({ disabled, type, children, handleClick }: ButtonProp) => {
  return (
    <button
      disabled={disabled}
      aria-disabled={disabled}
      className={button}
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
