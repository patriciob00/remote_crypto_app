import React from 'react'
import Image from '../../base-components/image';
import Paragraph from '../../base-components/paragraph';
import { CryptoInfo } from '../../core/types/types';

import './styles.scss'

const CryptonameWithLogo = ({ item, size = '' } : { item: CryptoInfo, size?: 'large' | 'medium' | 'small' | string }) => {
  return (
    <div className='crypto-name-with-logo'>
      <Image src={item.imageUrl} alt={`${item.name} logo`} size={ size as 'small' | 'medium' | 'large' ?? 'medium'} />
      <Paragraph size={size}>{item.name}</Paragraph>
    </div>
  )
}

export default CryptonameWithLogo;