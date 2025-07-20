import React from 'react'
import SkeletonCard from '../../base-components/skeleton-card'
import Paragraph from '../../base-components/paragraph'
import { CommonDivProps } from '../../core/types/types'

import './styles.scss'


const DetailedSkeleton = ({ className = '', ...rest} : CommonDivProps ) => (
  <SkeletonCard className={`detailed-skeleton-wrapper ${className}`} { ...rest }>
    <Paragraph>Loading details...</Paragraph>
  </SkeletonCard>
)

export default DetailedSkeleton