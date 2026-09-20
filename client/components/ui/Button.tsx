import React, { ReactNode } from 'react'

interface ButtonProps {
  type?: "button" | "submit" | "reset"
  className?: string
  handleClick?: () => void
  children?: ReactNode
}

export default function Button({type = "button", className, handleClick, children}: ButtonProps) {
  return (
    <button type={type} onClick={handleClick} className={`cursor-pointer ${className}`}>
      {children}
    </button>
  )
}

