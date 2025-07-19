import { CryptoInfo, DetailedCryptoInfo } from '../types/types'
import { adaptFromCoinGecko } from '../adapters/coingecko.adapter'
import { adaptDetailedFromCoinGecko } from '../adapters/coingeckoDetailed.adapter'

const API_KEY = import.meta.env.COINGECKO_API_KEY;

const BASE_URL = 'https://api.coingecko.com/api/v3/coins';

const headers = {
    'x-cg-demo-api-key': API_KEY,
}

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

  const url = `${BASE_URL}/markets?${params.toString()}`

  const response = await fetch(url, { headers })
  if (!response.ok) {
    throw new Error('Error fetching data from CoinGecko')
  }

  const data = await response.json()
  return adaptFromCoinGecko(data)
}

export async function getCryptoDetailsFromCoinGecko(id: string): Promise<DetailedCryptoInfo> {
  try {
    const res = await fetch(`${BASE_URL}/markets?vs_currency=usd&ids=${id}`, { headers })
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

export async function getCryptoPriceHistoryFromCoinGecko(id: string, days = 7) {
  const params = new URLSearchParams({
    vs_currency: 'usd',
    days: days.toString(),
  })

  const url = `${BASE_URL}/${id}/market_chart?${params}`

  const response = await fetch(url, { headers })
  if (!response.ok) throw new Error('Failed to fetch price history')

  const data = await response.json()
  return data.prices as [number, number][]
}