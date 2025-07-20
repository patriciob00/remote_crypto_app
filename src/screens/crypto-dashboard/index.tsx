import React from 'react'
import BackgroundWrapper from '../../base-components/background-wrapper'
import CryptoItemsListWithinBox from '../../components/crypto-items-list-within-box'
import CryptoCardHighlight from '../../components/crypto-card-highlight'

import './styles.scss'
import CryptoPriceChart from '../../components/crypto-price-chart'
import { useDetailedCryptoStore } from '../../core/store/detailedCrypto.store'
import { useCryptoHistory } from '../../core/hooks/useCryptoHistory'
import ChartSkeleton from '../../base-components/chart-skeleton'

const CryptoDashboard = () => {
  const { selectedCrypto } = useDetailedCryptoStore()
  const { history, loading } = useCryptoHistory(selectedCrypto?.id || '')

  return (
    <div className="dashboard-wrapper">
      <div className="left-panel">
        <CryptoItemsListWithinBox />
      </div>

      <div className="right-panel">
        <CryptoCardHighlight />
        {loading ? (
          <ChartSkeleton />
        ) : (
          <CryptoPriceChart data={history} />
        )}
      </div>
    </div>
  )
}

export default CryptoDashboard