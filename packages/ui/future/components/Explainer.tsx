import React, { FC, ReactNode, useState } from 'react'
import { Menu } from '@headlessui/react'
import { usePopper } from 'react-popper'
import { InformationCircleIcon } from '@heroicons/react/24/solid'
import { Placement } from '@popperjs/core'
import ReactDOM from 'react-dom'
import { useIsMounted } from '@sushiswap/hooks'
import classNames from 'classnames'

export const Explainer: FC<{
  children: ReactNode
  iconSize: number
  placement: Placement
  className?: string
  hover?: boolean
}> = ({ children, iconSize, placement, className, hover = false }) => {
  const [open, setOpen] = useState(false)
  const isMounted = useIsMounted()
  const [referenceElement, setReferenceElement] = useState<HTMLLabelElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null)
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
  })

  if (typeof window === 'undefined' || !isMounted) return <></>

  if (hover)
    return (
      <div className="flex justify-center">
        <label
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          ref={setReferenceElement}
          onClick={(e) => e.stopPropagation()}
        >
          <InformationCircleIcon
            width={iconSize}
            height={iconSize}
            className={classNames(className, 'text-gray-400 dark:text-slate-500')}
          />
        </label>
        {open &&
          ReactDOM.createPortal(
            <div
              ref={setPopperElement}
              style={styles.popper}
              {...attributes.popper}
              className="z-[2000] w-[240px] bg-white dark:bg-slate-900 rounded-xl shadow-hover-card shadow-black/10 text-xs mt-0.5"
            >
              <div className="flex flex-col gap-3 rounded-md px-4 py-3 bg-white dark:bg-slate-800 text-gray-600 dark:text-slate-400">
                {children}
              </div>
            </div>,
            document.body
          )}
      </div>
    )

  return (
    <Menu as="div" className="flex justify-center">
      <Menu.Button as="label" ref={setReferenceElement}>
        <InformationCircleIcon
          width={iconSize}
          height={iconSize}
          className={classNames(className, 'text-gray-400 dark:text-slate-500')}
        />
      </Menu.Button>
      {ReactDOM.createPortal(
        <Menu.Items
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className="z-[2000] w-[240px] rounded-xl shadow-md shadow-black/20 text-xs mt-0.5"
        >
          <div className="flex flex-col gap-3 rounded-md px-4 py-3 bg-white/50 paper dark:bg-slate-800/50">
            {children}
          </div>
        </Menu.Items>,
        document.body
      )}
    </Menu>
  )
}
