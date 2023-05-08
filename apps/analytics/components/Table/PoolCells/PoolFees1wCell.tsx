import { formatUSD } from '@sushiswap/format'
import { Typography } from '@sushiswap/ui'
import { FC } from 'react'
import { Row } from '../types'

export const PoolFees1wCell: FC<Row<{ fees1w: string | number }>> = ({ row }) => {
  const fees1w = formatUSD(row.fees1w)

  return (
    <Typography variant="sm" weight={600} className="text-right text-slate-50">
      {fees1w.includes('NaN') ? '$0.00' : fees1w}
    </Typography>
  )
}
