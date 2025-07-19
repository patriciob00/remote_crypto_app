import React, { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react';
import './styles.scss';

type Props = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const SkeletonCard = ({ children, className = '', ...rest }: Props) => {
  return (
    <div className={`card ${className}`} {...rest}>
      {children}
    </div>
  )
}

export default SkeletonCard;