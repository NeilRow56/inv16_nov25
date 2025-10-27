import { Plus } from 'lucide-react'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import InvoiceItem from './invoice-item'

// Dummy data so that we can set up the mapping functionality

export const items = [
  {
    id: 1,
    description: 'Website Design',
    quantity: 1,
    rate: 500,
    amount: 500
  },
  {
    id: 2,
    description: 'Hosting (12 months)',
    quantity: 1,
    rate: 120,
    amount: 120
  }
]

export default function ItemsList() {
  const addItem = () => {}
  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between'>
        <CardTitle>Invoice Items</CardTitle>
        <Button onClick={addItem} size='sm'>
          <Plus className='mr-2 h-4 w-4' />
          Add Item
        </Button>
      </CardHeader>
      <CardContent className='space-y-4'>
        {items.map(item => (
          <InvoiceItem key={item.id} />
        ))}
      </CardContent>
    </Card>
  )
}
