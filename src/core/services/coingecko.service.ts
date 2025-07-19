import { CryptoInfo, DetailedCryptoInfo } from '../types/types'
import { adaptFromCoinGecko } from '../adapters/coingecko.adapter'
import { adaptDetailedFromCoinGecko } from '../adapters/coingeckoDetailed.adapter'

export async function getCryptoListFromCoinGecko(ids: string[]): Promise<CryptoInfo[]> {
  if (ids.length === 0) return []

  const params = new URLSearchParams({
    vs_currency: 'usd',
    ids: ids.join(','),
    order: 'market_cap_desc',
    per_page: ids.length.toString(),
    page: '1',
    sparkline: 'false',
  })

  const url = `https://api.coingecko.com/api/v3/coins/markets?${params.toString()}`

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Error fetching data from CoinGecko')
  }

  const data = await response.json()
  return adaptFromCoinGecko(data)
}

export async function getCryptoDetailsFromCoinGecko(id: string): Promise<DetailedCryptoInfo> {
  try {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}`)
    const data = await res.json()

    if (!Array.isArray(data) || data.length === 0) {
      throw new Error(`CriptoCurrency '${id}' not found.`)
    }

    return adaptDetailedFromCoinGecko(data[0])
  } catch (error) {
    console.error(`Error fetching detailed info of ${id} from CoinGecko:`, error)
    throw error
  }
}