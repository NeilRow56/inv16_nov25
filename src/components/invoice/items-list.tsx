import { Plus } from 'lucide-react'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import InvoiceItem from './invoice-item'

export default function ItemsList() {
  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between'>
        <CardTitle>Invoice Items</CardTitle>
        <Button size='sm'>
          <Plus className='mr-2 h-4 w-4' />
          Add Item
        </Button>
      </CardHeader>
      <CardContent className='space-y-4'>
        <InvoiceItem />
      </CardContent>
    </Card>
  )
}
