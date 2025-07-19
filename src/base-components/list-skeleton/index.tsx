import React from 'react'
import './styles.scss'

const ListSkeleton = ({ count = 10 }: { count?: number }) => {
  return (
    <div className="list-skeleton-wrapper">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="list-skeleton-item">
          <div className="skeleton logo" />
          <div className="skeleton name" />
          <div className="skeleton price" />
        </div>
      ))}
    </div>
  )
}

export default ListSkeleton