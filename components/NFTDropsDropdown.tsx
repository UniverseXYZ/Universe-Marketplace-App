import { FC } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'
import { BiChevronDown } from 'react-icons/bi'
import useMounted from 'hooks/useMounted'
import Avatar from './Avatar'

const DARK_MODE = process.env.NEXT_PUBLIC_DARK_MODE

const NFTDropsDropdown: FC = () => {
  const isMounted = useMounted()

  if (!isMounted) {
    return null
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center">
        NFT Drops <BiChevronDown />
      </DropdownMenu.Trigger>


      <DropdownMenu.Content align="center" sideOffset={6}>
        <div
          style={{boxShadow: '0px 4px 32px rgba(0, 0, 0, 0.16)'}}
          className={`w-48 space-y-1  bg-white px-3 py-3 radix-side-bottom:animate-slide-down dark:bg-neutral-900 md:w-[268px] rounded-[12px]`}
        >
          {/* Polymorphs */}
          <a href='https://polymorphs.universe.xyz/' target="_blank" rel="noreferrer">
            <DropdownMenu.Item asChild>
              <div className="group flex w-full items-center gap-2 px-2 py-2 outline-none transition hover:bg-neutral-100 focus:bg-neutral-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-pointer rounded-[12px]">
                <Avatar address={''} className="min-w-[40px]" avatar={'/icons/main-nav/polymorphs.svg'} size={40} />
                <div>
                  <p className='text-[14px] leading-6'>Polymorphs</p>
                  <p className='text-[12px] leading-4 text-[#00000066]'>Morphing NFTs, with 11 base skins and 200+ traits</p>
                </div>
            </div>
            </DropdownMenu.Item>
          </a>

          {/* Polymorphs Rarity */}
          <a href='https://polymorphs.universe.xyz/polymorph-rarity/' target="_blank" rel="noreferrer">
            <DropdownMenu.Item asChild>
              <div className="group flex w-full items-center gap-2 px-2 py-[10px] outline-none transition hover:bg-neutral-100 focus:bg-neutral-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-pointer rounded-[12px]">
                <img
                  className="object-fit"
                  src='/icons/main-nav/rarity.svg'
                  alt={'rarity'}
                  width='12px'
                  height='12px'
                />
                <p className='text-[12px] leading-4 font-medium'>Rarity Chart</p>
            </div>
            </DropdownMenu.Item>
          </a>

          <div className='py-2 !m-0'>
            <hr className='bg-[#0000000d]'/>
          </div>

          {/* Lobsters */}
          <a href='https://www.universe.xyz/lobby-lobsters' target="_blank" rel="noreferrer">
            <DropdownMenu.Item asChild>
              <div className="group flex w-full items-center gap-2 px-2 py-2 outline-none transition hover:bg-neutral-100 focus:bg-neutral-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-pointer rounded-[12px]">
                <Avatar address={''} className="min-w-[40px]" avatar={'/icons/main-nav/lobsters.svg'} size={40} />
                <div>
                  <p className='text-[14px] leading-6'>Lobby Lobsters</p>
                  <p className='text-[12px] leading-4 text-[#00000066]'>10,000 rarity based NFTs lobbying crypto interests </p>
                </div>
            </div>
            </DropdownMenu.Item>
          </a>

          {/* Lobsters Rarity */}
          <a href='https://rarity.tools/lobby-lobsters' target="_blank" rel="noreferrer">
            <DropdownMenu.Item asChild>
              <div className="group flex w-full items-center gap-2 px-2 py-[10px] outline-none transition hover:bg-neutral-100 focus:bg-neutral-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-pointer rounded-[12px]">
                <img
                  className="object-fit"
                  src='/icons/main-nav/rarity.svg'
                  alt={'rarity'}
                  width='12px'
                  height='12px'
                />
                <p className='text-[12px] leading-4 font-medium'>Rarity Chart</p>
            </div>
            </DropdownMenu.Item>
          </a>

        </div>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default NFTDropsDropdown