import { useEffect, useState } from 'react'
import { getCryptoPriceHistoryFromCoinGecko } from '../services/coingecko.service'
import { adaptChartData } from '../adapters/coingeckoChart.adapter'
import { ChartDataPoint } from '../types/types'

export function useCryptoHistory(id: string, days = 1) {
  const [history, setHistory] = useState<ChartDataPoint[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!id) return

    const fetchHistory = async () => {
      setLoading(true)
      try {
        const prices = await getCryptoPriceHistoryFromCoinGecko(id, days)
        setHistory(adaptChartData(prices, days))
      } catch (err) {
        console.error('Error when searching history:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchHistory()
  }, [id, days])

  return { history, loading }
}