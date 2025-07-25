import { DetailedCryptoInfo } from "../types/types";
import { formatCurrency, formatDate, formatNumber, formatPercentage } from '../utils/formatters.ts';

export function adaptDetailedFromCoinGecko(raw: any): DetailedCryptoInfo {
  return {
    id: raw.id,
    symbol: raw.symbol,
    name: raw.name,
    image: raw.image,
    currentPrice: raw.current_price,
    formattedPrice: formatCurrency(raw.current_price),
    marketCap: raw.market_cap,
    formattedMarketCap: formatCurrency(raw.market_cap),
    marketCapRank: raw.market_cap_rank,
    formattedMarketCapRank: formatNumber(raw.market_cap_rank),
    totalVolume: raw.total_volume,
    formattedTotalVolume: formatCurrency(raw.total_volume),
    high24h: raw.high_24h,
    formattedHigh24h: formatCurrency(raw.high_24h),
    low24h: raw.low_24h,
    formattedLow24h: formatCurrency(raw.low_24h),
    priceChange24h: raw.price_change_24h,
    formattedPriceChange24h: formatCurrency(raw.price_change_24h),
    priceChangePercentage24h: raw.price_change_percentage_24h,
    formattedPriceChangePercentage24h: formatPercentage(raw.price_change_percentage_24h),
    circulatingSupply: raw.circulating_supply,
    formattedCirculatingSupply: formatNumber(raw.circulating_supply),
    totalSupply: raw.total_supply,
    formattedTotalSupply: formatNumber(raw.total_supply),
    maxSupply: raw.max_supply,
    formattedMaxSupply: formatNumber(raw.max_supply),
    ath: raw.ath,
    formattedAth: formatCurrency(raw.ath),
    athChangePercentage: raw.ath_change_percentage,
    formattedAthChangePercentage: formatPercentage(raw.ath_change_percentage),
    athDate: raw.ath_date,
    formattedAthDate: formatDate(raw.ath_date),
    atl: raw.atl,
    formattedAtl: formatCurrency(raw.atl),
    atlChangePercentage: raw.atl_change_percentage,
    formattedAtlChangePercentage: formatPercentage(raw.atl_change_percentage),
    atlDate: raw.atl_date,
    formattedAtlDate: formatDate(raw.atl_date),
    lastUpdated: raw.last_updated,
    formattedLastUpdated: formatDate(raw.last_updated),
  }
}