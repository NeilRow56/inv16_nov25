export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Invoice - 25'
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  'A modern application built with Next.js'

import type { InvoiceData } from '../types/invoice'

export const initialInvoiceData: InvoiceData = {
  invoiceNumber: `INV-${Date.now()}`,
  date: new Date().toISOString().split('T')[0],
  fromName: '',
  fromEmail: '',
  toName: '',
  toEmail: '',
  items: [{ id: '1', description: '', quantity: 1, rate: 0, amount: 0 }],
  taxRate: 10,
  subtotal: 0,
  taxAmount: 0,
  total: 0
}
