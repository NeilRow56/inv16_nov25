// "use client";

import { Download } from 'lucide-react'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { useInvoice } from '@/context/invoice-context'
import { formatDate } from '@/utils/formatters'
import { generatePDF } from '@/utils/pdf-generator'
// import { useState } from "react";

interface InvoicePreviewProps {
  onBack: () => void
}

export default function InvoicePreview({ onBack }: InvoicePreviewProps) {
  const { invoice } = useInvoice()
  // const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const handleDownloadPDF = () => {
    generatePDF(invoice)
  }

  return (
    <div className='min-h-screen bg-gray-50 p-4'>
      <div className='mx-auto max-w-4xl'>
        <div className='mb-6 flex items-center justify-between'>
          <h1 className='text-2xl font-bold'>Invoice Preview</h1>
          <div className='space-x-2'>
            <Button variant='outline' onClick={onBack}>
              Back to Edit
            </Button>
            <Button onClick={handleDownloadPDF}>
              <Download className='mr-2 h-4 w-4' />
              Download PDF
            </Button>
          </div>
        </div>

        {/* {pdfUrl && (
          <div className="mt-4 border rounded-lg overflow-hidden">
            <iframe src={pdfUrl} width="100%" height="600px" />
          </div>
        )} */}

        <Card>
          <CardContent className='p-8'>
            {/* Invoice Header */}
            <div className='mb-8 flex items-start justify-between'>
              <div>
                <h2 className='mb-2 text-3xl font-bold'>INVOICE</h2>
                <p className='text-gray-600'>#{invoice.invoiceNumber}</p>
              </div>
              <div className='text-right'>
                <p className='text-sm text-gray-600'>
                  Date: {formatDate(invoice.date)}
                </p>
              </div>
            </div>

            {/* From/To */}
            <div className='mb-8 grid grid-cols-2 gap-8'>
              <div>
                <h3 className='mb-2 font-semibold'>From:</h3>
                <p className='font-medium'>{invoice.fromName}</p>
                <p className='text-gray-600'>{invoice.fromEmail}</p>
              </div>
              <div>
                <h3 className='mb-2 font-semibold'>To:</h3>
                <p className='font-medium'>{invoice.toName}</p>
                <p className='text-gray-600'>{invoice.toEmail}</p>
              </div>
            </div>

            {/* Items Table */}
            <table className='mb-8 w-full'>
              <thead>
                <tr className='border-b-2'>
                  <th className='py-2 text-left'>Description</th>
                  <th className='py-2 text-center'>Qty</th>
                  <th className='py-2 text-right'>Rate</th>
                  <th className='py-2 text-right'>Amount</th>
                </tr>
              </thead>
              <tbody>
                {invoice.items.map(item => (
                  <tr key={item.id} className='border-b'>
                    <td className='py-2'>{item.description}</td>
                    <td className='py-2 text-center'>{item.quantity}</td>
                    <td className='py-2 text-right'>
                      $
                      {typeof item.rate === 'number'
                        ? item.rate.toFixed(2)
                        : '0.00'}
                    </td>
                    <td className='py-2 text-right'>
                      $
                      {typeof item.amount === 'number'
                        ? item.amount.toFixed(2)
                        : '0.00'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Totals */}
            <div className='flex justify-end'>
              <div className='w-64 space-y-2'>
                <div className='flex justify-between'>
                  <span>Subtotal:</span>
                  <span>${invoice.subtotal.toFixed(2)}</span>
                </div>
                <div className='flex justify-between'>
                  <span>
                    Tax (
                    {typeof invoice.taxRate === 'number' ? invoice.taxRate : 0}
                    %):
                  </span>
                  <span>${invoice.taxAmount.toFixed(2)}</span>
                </div>
                <div className='flex justify-between border-t pt-2 text-lg font-bold'>
                  <span>Total:</span>
                  <span>${invoice.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
