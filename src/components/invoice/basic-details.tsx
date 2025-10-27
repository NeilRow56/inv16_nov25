import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { useInvoice } from '@/context/invoice-context'

export default function BasicDetails() {
  const { invoice, updateInvoice } = useInvoice()
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invoice Details</CardTitle>
      </CardHeader>
      <CardContent className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <div>
          <Label className='mb-2 font-bold' htmlFor='invoiceNumber'>
            Invoice Number
          </Label>
          <Input
            value={invoice.invoiceNumber}
            onChange={e => updateInvoice({ invoiceNumber: e.target.value })}
            id='invoiceNumber'
          />
        </div>
        <div>
          <Label className='mb-2 font-bold' htmlFor='date'>
            Date
          </Label>
          <Input
            id='date'
            type='date'
            onChange={e => updateInvoice({ date: e.target.value })}
            value={invoice.date}
          />
        </div>
      </CardContent>
    </Card>
  )
}
