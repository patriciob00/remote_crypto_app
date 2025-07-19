export function adaptChartData(prices: [number, number][], days: number) {
  return prices.map(([timestamp, price]) => {
    const date = new Date(timestamp)
    const time = days <= 1
      ? date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      : date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })

    return { time, price }
  })
}