import React, { PropsWithChildren, CSSProperties, HTMLAttributes } from 'react'
import './styles.scss'

type Props = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const BackgroundWrapper = ({ children, className = '', ...rest }: Props) => {
  return (
    <div className={`background-wrapper ${className}`} {...rest}>
      {children}
    </div>
  )
}

export default BackgroundWrapper;