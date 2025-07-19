import React from 'react'
import SkeletonCard from '../../base-components/skeleton-card'
import Paragraph from '../../base-components/paragraph'

const DetailedSkeleton = () => (
  <SkeletonCard style={{ width: '50%', minHeight: '48%', alignSelf: 'flex-start' }}>
    <Paragraph style={{ textAlign: 'center' }}>Loading details...</Paragraph>
  </SkeletonCard>
)

export default DetailedSkeleton