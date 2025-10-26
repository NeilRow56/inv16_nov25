'use client'

import { useState } from 'react'
import { InvoicePreview } from './invoice-preview'
import { Button } from '../ui/button'
import { Eye } from 'lucide-react'

export function InvoiceForm() {
  const [showPreview, setShowPreview] = useState(false)

  if (showPreview) {
    return <InvoicePreview onBack={() => setShowPreview(false)} />
  }
  return (
    <div className='mx-auto max-w-4xl'>
      <div className='mb-6 flex items-center justify-between'>
        <div>
          <h1 className='text-2xl font-bold'>Invoice Generator</h1>
          <p className='text-gray-600'>Create professional invoices quickly</p>
        </div>
        <Button onClick={() => setShowPreview(true)}>
          <Eye className='mr-2 h-4 w-4' />
          Preview
        </Button>
      </div>
      INVOICE FORM
    </div>
  )
}
