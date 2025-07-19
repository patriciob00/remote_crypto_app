import React from 'react'
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts'
import Paragraph from '../../base-components/paragraph'

import { formatCurrency } from '../../core/utils/formatters'

import './styles.scss'

type Props = {
  data: { time: string, price: number }[]
}

const CryptoPriceChart = ({ data }: Props) => {
  if (data.length === 0) {
    return ''
  }

  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis
            dataKey="time"
            tick={{ fill: '#bbb', fontSize: 12 }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#bbb', fontSize: 12 }}
            tickFormatter={(value) => formatCurrency(value)}
            tickLine={false}
          />
          <Tooltip
            content={({ active, payload, label }) => {
              if (!active || !payload || payload.length === 0) return null
              const price = payload[0].value

              return (
                <div className="custom-tooltip">
                  <p className="label">{label}</p>
                  <p className="price">{formatCurrency(price)}</p>
                </div>
              )
            }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CryptoPriceChart