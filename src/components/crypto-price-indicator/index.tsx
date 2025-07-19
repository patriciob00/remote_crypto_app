import React from 'react'
import Paragraph from '../../base-components/paragraph';
import { CryptoInfo } from '../../core/types/types';
import { MoveUp, MoveDown, Minus,  } from 'lucide-react';

import './style.scss'

const CryptoPriceIndicator = ({ item } : { item: CryptoInfo }) => {
  const { priceFormatted, priceChangeDirection } = item

  const icon = {
    up: <MoveUp className="price-icon up" />,
    down: <MoveDown className="price-icon down" />,
    stable: <Minus className="price-icon stable" />,
  }[priceChangeDirection]
  
  return (
    <div className={
      `crypto-price-row ${priceChangeDirection}`
    }>
      {icon}
      <Paragraph style={{ color: 'currentColor' }}>{item.priceFormatted}</Paragraph>
    </div>
  )
}

export default CryptoPriceIndicator;