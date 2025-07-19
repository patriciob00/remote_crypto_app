import React from 'react'

import './styles.scss'

type Props = {
  size: 'large' | 'medium' | 'small';
  src: string;
  alt: string;
}

const Image = ({ src, alt, size = 'large' }: Props ) => {

  return (
    <img className={`image ${size}`} src={src} alt={alt} />
  )
}

export default Image;