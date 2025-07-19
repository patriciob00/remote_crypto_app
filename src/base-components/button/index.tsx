import React, { ButtonHTMLAttributes, CSSProperties, PropsWithChildren } from 'react'

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

const Button = ({ children, ...props }: Props ) => {
  return (
    <button {...props}>
      {children}
    </button>
  )
}

export default Button;