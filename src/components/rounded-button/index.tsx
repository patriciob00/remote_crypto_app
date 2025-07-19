import React, { ButtonHTMLAttributes, CSSProperties, PropsWithChildren } from 'react'
import Button from '../../base-components/button'

import './styles.scss'

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

const RoundedButton = ({ children, className = '', style = {}, onClick = () => {}} : Props ) => {
  return (
    <Button className={`rounded-button ${className}`} style={style} onClick={onClick}>{children}</Button>
  )
}

export default RoundedButton