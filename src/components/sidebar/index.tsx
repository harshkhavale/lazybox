"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Tooltip, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { menuOptions } from '@/lib/constant'
import clsx from 'clsx'

type Props = {}

const MenuOptions = (props: Props) => {
    const pathName = usePathname();
  return (
    <nav className=' dark:bg-black h-screen overflow-scroll justify-between flex items-center flex-col gap-10 py-6 px-2'>
        <div className='flex items-center justify-center flex-col gap-8'>
            <Link className=' flex font-bold flex-col' href={"/"}>lazybox</Link>
            <TooltipProvider>
                {menuOptions.map((menuItem)=>(
                    <ul key={menuItem.name}>
                        <Tooltip delayDuration={0}>
                          <TooltipTrigger>
                            <li className=''>
                                <Link href={menuItem.href} className={clsx(`group h-8 w-8 flex items-center justify-center scale-[1.5] rounded-lg p-[3px] cursor-pointer`,{'dark:bg-[#37aa28] bg-[#EEE0FF]' : pathName === menuItem.href})}>
                                <menuItem.Component selected={pathName === menuItem.href}/></Link>
                            </li>
                          </TooltipTrigger>
                        </Tooltip>
                    </ul>
                ))}
            </TooltipProvider>
        </div>
    </nav>
  )
}

export default MenuOptions