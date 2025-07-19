import React, { CSSProperties, PropsWithChildren } from 'react'
import './styles.scss';

type Props = PropsWithChildren<{
  style?: CSSProperties;
  size?: 'large' | 'medium' | 'small' | string;
}>

const Paragraph = ( { children, style = {}, size = '' }: Props ) => {
  return (
    <p className={`paragraph ${size}`} style={style}>{children}</p>
  )
}

export default Paragraph;