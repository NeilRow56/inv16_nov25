export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

export const formatCurrency = (amount: number) => {
  return `£${amount.toFixed(2)}`
}
