import React from 'react'
import SkeletonCard from '../../base-components/skeleton-card';
import Paragraph from '../../base-components/paragraph';
import Image from '../../base-components/image';
import Title from '../../base-components/title';
import { MoveDown, MoveUp } from 'lucide-react';
import { useDetailedCryptoStore } from '../../core/store/detailedCrypto.store';
import DetailedSkeleton from '../crypto-detailed-skeleton';

import './style.scss'

const InfoRow = ({ info = '', label = '' }: { info: string, label: string }) => (
  <div className='info-row'>
    <Title size='small'>{label}</Title>
    <Paragraph size='small'>{info}</Paragraph>
  </div>
)


const CryptoCardHighlight = () => {
  const { selectedCrypto, isLoading } = useDetailedCryptoStore()

  if (isLoading) {
    return <DetailedSkeleton />
  }

  if (!selectedCrypto) {
    return (
      <SkeletonCard className='no-data'>
        <Paragraph>No data to display</Paragraph>
      </SkeletonCard>
    )
  }

  const item = selectedCrypto
  const isPriceUp = item.priceChangePercentage24h > 0
  const isPriceDown = item.priceChangePercentage24h < 0

  return (
    <SkeletonCard className='crypto-card-highlight'>
      <div className='crypto-card-highlight-content'>
        <div className="header">
          <div className='header-side left'>
            <Image src={item.image} alt={`${item.name} logo`} size="large" />
            <div>
              <Paragraph size='large'>{item.name}</Paragraph>
              <Title size="medium">{item.symbol.toUpperCase()}</Title>
            </div>
          </div>
          <div className={`header-side right ${isPriceUp ? 'up' : isPriceDown ? 'down' : ''}`}>
            <Paragraph size='small'>Last 24h</Paragraph>
            <div className='price-info'>
              <Paragraph size='medium'>{item.formattedPrice}</Paragraph>
              <div>
                {isPriceUp && <MoveUp className="icon" />}
                {isPriceDown && <MoveDown className="icon" />}
              </div>
            </div>

          </div>

        </div>

        <div className="details">
          <InfoRow info={item.formattedPriceChangePercentage24h} label='Price Change Percentage last 24h' />
          <InfoRow info={item.formattedMarketCap} label='Market Cap' />
          <InfoRow info={item.formattedTotalVolume} label='24h Volume' />
          <InfoRow info={item.formattedAth} label='ATH' />
          <InfoRow info={item.formattedAtl} label='ATL' />
          <InfoRow info={item.formattedCirculatingSupply} label='Supply' />
          <InfoRow info={item.formattedMarketCapRank} label='Rank' />
        </div>
      </div>
    </SkeletonCard>
  )
}

export default CryptoCardHighlight;