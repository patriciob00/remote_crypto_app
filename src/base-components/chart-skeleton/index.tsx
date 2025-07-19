import React from 'react'
import SkeletonCard from '../skeleton-card'
import './styles.scss'


const ChartSkeleton = () => {
  return (
    <SkeletonCard className="chart-skeleton" style={{ height: 300, width: '100%' }}>
      <div className="skeleton-line" />
    </SkeletonCard>
  )
}

export default ChartSkeleton