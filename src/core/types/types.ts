import { HTMLAttributes, PropsWithChildren } from "react"

export type CryptoInfo = {
  id: string
  name: string
  symbol: string
  slug: string
  imageUrl: string
  price: number
  priceFormatted: string
  priceChangeDirection: 'up' | 'down' | 'stable'
}

export type DetailedCryptoInfo = {
  id: string
  symbol: string
  name: string
  image: string
  currentPrice: number
  formattedPrice: string
  marketCap: number
  formattedMarketCap: string
  marketCapRank: number
  formattedMarketCapRank: string
  totalVolume: number
  formattedTotalVolume: string
  high24h: number
  formattedHigh24h: string
  low24h: number
  formattedLow24h: string
  priceChange24h: number
  formattedPriceChange24h: string
  priceChangePercentage24h: number
  formattedPriceChangePercentage24h: string
  circulatingSupply: number
  formattedCirculatingSupply: string
  totalSupply: number
  formattedTotalSupply: string
  maxSupply: number
  formattedMaxSupply: string
  ath: number
  formattedAth: string
  athChangePercentage: number
  formattedAthChangePercentage: string
  athDate: string
  formattedAthDate: string
  atl: number
  formattedAtl: string
  atlChangePercentage: number
  formattedAtlChangePercentage: string
  atlDate: string
  formattedAtlDate: string
  lastUpdated: string
  formattedLastUpdated: string
}

export type ChartDataPoint = {
  time: string
  price: number
}

export type CommonDivProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>