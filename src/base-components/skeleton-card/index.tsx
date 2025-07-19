import React, { CSSProperties, PropsWithChildren } from 'react';
import './styles.scss';

type Props = PropsWithChildren<{
  style?: CSSProperties
}>

const SkeletonCard = ({ children, style = {} }: Props) => {
  return (
    <div className='card' style={style}>
      {children}
    </div>
  )
}

export default SkeletonCard;