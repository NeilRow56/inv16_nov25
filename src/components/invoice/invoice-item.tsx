import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Trash2 } from 'lucide-react'

interface InvoiceItemProps {}

export default function InvoiceItem() {
  return (
    <div className='grid grid-cols-12 gap-4 rounded-lg border p-4'>
      <div className='col-span-5'>
        <Label className='mb-2 font-bold'>Description</Label>
        <Input placeholder='Item description' />
      </div>
      <div className='col-span-2'>
        <Label className='mb-2 font-bold'>Quantity</Label>
        <Input type='number' min='1' />
      </div>
      <div className='col-span-2'>
        <Label className='mb-2 font-bold'>Rate ($)</Label>
        <Input type='number' min='0' step='0.01' />
      </div>
      <div className='col-span-2'>
        <Label className='mb-2 font-bold'>Amount</Label>
        <div className='flex h-10 items-center rounded-md border bg-gray-50 px-3 py-2'>
          ${'0.00'}
        </div>
      </div>
      <div className='col-span-1 flex items-end'>
        <Button variant='outline' size='icon'>
          <Trash2 className='h-4 w-4' />
        </Button>
      </div>
    </div>
  )
}
