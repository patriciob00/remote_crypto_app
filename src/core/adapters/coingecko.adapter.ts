import { CryptoInfo } from '../types/types'

export function adaptFromCoinGecko(data: any[]): CryptoInfo[] {
  return data.map((item) => ({
    id: item.id,
    name: item.name,
    symbol: item.symbol,
    slug: item.id,
    imageUrl: item.image,
    price: item.current_price,
    priceFormatted: `$${item.current_price.toFixed(2)}`,
    priceChangeDirection: 'stable',
  }))
}