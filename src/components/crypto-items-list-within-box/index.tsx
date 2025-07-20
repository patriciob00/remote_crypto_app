import React from 'react'
import CryptoItemsList from '../crypto-items-list'
import SkeletonCard from '../../base-components/skeleton-card'
import { DEFAULT_CRYPTO_IDS } from '../../core/constants/cryptoIds'
import { useCryptoTracker } from '../../core/hooks/useCryptoTracker'
import { useSelectedCrypto } from '../../core/hooks/useSelectedCrypto'
import ListSkeleton from '../../base-components/list-skeleton'

type Props = {
  style?: React.CSSProperties
}

const CryptoItemsListWithinBox = ({ style }: Props) => {
  const cryptos = useCryptoTracker(DEFAULT_CRYPTO_IDS)
  const { fetchAndSelectCrypto } = useSelectedCrypto()

  const isLoading = cryptos.length === 0

  return (
    <SkeletonCard style={{ width: '35%',  overflow: 'hidden', ...style }}>
      {isLoading ? (
        <ListSkeleton />
      ) : (
        <CryptoItemsList 
          items={cryptos} 
          onItemClick={(crypto) => fetchAndSelectCrypto(crypto.id)} 
        />
      )}
    </SkeletonCard>
  )
}

export default CryptoItemsListWithinBox