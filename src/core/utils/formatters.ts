export const formatCurrency = (value: number): string =>
  value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export const formatNumber = (value: number | null | undefined): string =>
  value != null ? value.toLocaleString('en-US') : '—'

export const formatPercentage = (value: number): string =>
  `${value.toFixed(2)}%`;

export const formatDate = (iso: string): string =>
  new Date(iso).toLocaleString('en-US');