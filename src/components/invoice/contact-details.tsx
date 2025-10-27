'use client'

import { useInvoice } from '@/context/invoice-context'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

export default function ContactDetails() {
  const { invoice, updateInvoice } = useInvoice()
  return (
    <Card>
      <CardHeader>
        <CardTitle>From & To</CardTitle>
      </CardHeader>
      <CardContent className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <div className='space-y-4'>
          <h3 className='font-medium'>From (Your Details)</h3>
          <div>
            <Label className='mb-2 font-bold' htmlFor='fromName'>
              Name
            </Label>
            <Input
              id='fromName'
              placeholder='Your name or company'
              value={invoice.fromName}
              onChange={e => updateInvoice({ fromName: e.target.value })}
            />
          </div>
          <div>
            <Label className='mb-2 font-bold' htmlFor='fromEmail'>
              Email
            </Label>
            <Input
              id='fromEmail'
              placeholder='your@email.com'
              type='email'
              value={invoice.fromEmail}
              onChange={e => updateInvoice({ fromEmail: e.target.value })}
            />
          </div>
        </div>
        <div className='space-y-4'>
          <h3 className='font-medium'>To (Client Details)</h3>
          <div>
            <Label className='mb-2 font-bold' htmlFor='toName'>
              Name
            </Label>
            <Input
              id='toName'
              placeholder='Client name or company'
              value={invoice.toName}
              onChange={e => updateInvoice({ toName: e.target.value })}
            />
          </div>
          <div>
            <Label className='mb-2 font-bold' htmlFor='toEmail'>
              Email
            </Label>
            <Input
              id='toEmail'
              placeholder='client@email.com'
              type='email'
              value={invoice.toEmail}
              onChange={e => updateInvoice({ toEmail: e.target.value })}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
