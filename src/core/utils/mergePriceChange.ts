import { CryptoInfo } from '../types/types'

export function mergePriceChangeWithLastPrices(
  current: CryptoInfo[],
  lastPrices: Record<string, number>
): CryptoInfo[] {
  return current.map((crypto) => {
    const previous = lastPrices[crypto.id]

    const priceChangeDirection: CryptoInfo['priceChangeDirection'] =
      previous === undefined
        ? 'stable'
        : crypto.price > previous
        ? 'up'
        : crypto.price < previous
        ? 'down'
        : 'stable'

    lastPrices[crypto.id] = crypto.price

    return {
      ...crypto,
      priceChangeDirection,
    }
  })
}