import { formatUSD } from '@sushiswap/format'
import { Typography } from '@sushiswap/ui'
import { FC } from 'react'
import { Row } from '../types'

export const PoolVolume1wCell: FC<Row<{ volume1w: string | number }>> = ({ row }) => {
  const volume = formatUSD(row.volume1w)

  return (
    <Typography variant="sm" weight={600} className="text-right text-slate-50">
      {volume.includes('NaN') ? '$0.00' : volume}
    </Typography>
  )
}
