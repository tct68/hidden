import { shortenAddress } from '@sushiswap/format'
import React, { FC } from 'react'

import { FuroTableType } from './StreamTable'
import { CellProps } from './types'

export const FromCell: FC<CellProps> = ({ row, tableType }) => {
  const id = tableType === FuroTableType.INCOMING ? row.createdBy.id : row.recipient.id
  return (
    <div className="w-full flex justify-end" onClick={(e) => e.stopPropagation()}>
      {shortenAddress(id)}
    </div>
  )
}
