import React from 'react'

import CryptoItemRow from '../crypto-item-row';
import { CryptoInfo } from '../../core/types/types';

import './styles.scss'

type Props = {
  items: CryptoInfo[];
  onItemClick?: (item: CryptoInfo) => void
}

const CryptoItemsList = ({ items = [], onItemClick } : Props) => {
  return (
    <div className='list-wrapper'>
      {items.map((crypto) => (
        <CryptoItemRow
          key={crypto.id}
          item={crypto}
          onClick={onItemClick}
        />
      ))}
    </div>
  )
}

export default CryptoItemsList;