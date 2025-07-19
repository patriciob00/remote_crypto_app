import { useEffect, useMemo, useRef } from 'react'
import { getCryptoListFromCoinGecko } from '../services/coingecko.service'
import { useCryptoStore } from '../store/crypto.store'
import { mergePriceChangeWithLastPrices } from '../utils/mergePriceChange'

export function useCryptoTracker(ids: string[], interval = 60000) {
  const { cryptos, setCryptos } = useCryptoStore()
  const lastPrices = useRef<Record<string, number>>({})

  const idsKey = useMemo(() => ids.slice().sort().join(','), [ids])

  const fetchAndCompare = async () => {
    if (ids.length === 0) return
    try {
      const data = await getCryptoListFromCoinGecko(ids)
      const updated = mergePriceChangeWithLastPrices(data, lastPrices.current)
      setCryptos(updated)
    } catch (err) {
      console.error('Tracker error:', err)
    }
  }

  useEffect(() => {
    fetchAndCompare()
    const intervalId = setInterval(fetchAndCompare, interval)
    return () => clearInterval(intervalId)
  }, [idsKey, interval])

  return cryptos
}