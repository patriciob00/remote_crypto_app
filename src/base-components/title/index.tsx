import React, { CSSProperties, PropsWithChildren } from 'react'
import './styles.scss';

type Props = PropsWithChildren<{
  size?: 'large' | 'medium' | 'small';
  style?: CSSProperties;
}>

const Title = ({ children, size, style = {} }: Props) => {

  return (
    <h1 className={`title ${size ? size : ''}`} style={style}>
      {children}
    </h1>
  )
}

export default Title;