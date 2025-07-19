import React from 'react'
import { CryptoInfo } from '../../core/types/types'

import './styles.scss'
import Paragraph from '../../base-components/paragraph';
import Image from '../../base-components/image';
import CryptonameWithLogo from '../crypto-name-with-logo';
import CryptoPriceIndicator from '../crypto-price-indicator';

type Props = {
  item: CryptoInfo
  onClick?: (crypto: CryptoInfo) => void
}

const CryptoItemRow = ( { item, onClick } : Props ) => {
  return (
    <div className='crypto-item-row' onClick={() => onClick?.(item)}>
      <div>
        <CryptonameWithLogo item={item} size='medium' />
      </div>
      <div>
        <CryptoPriceIndicator item={item} />
      </div>
    </div>
  )
}

export default CryptoItemRow