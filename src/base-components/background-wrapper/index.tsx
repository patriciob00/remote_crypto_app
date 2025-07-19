import React, { PropsWithChildren, CSSProperties } from 'react'
import './styles.scss'

type Props = PropsWithChildren<{
  style?: CSSProperties;
}>;

const BackgroundWrapper = ({ children, style = {} }: Props) => {
  return (
    <div className='background-wrapper' style={style}>{children}</div>
  )
}

export default BackgroundWrapper;