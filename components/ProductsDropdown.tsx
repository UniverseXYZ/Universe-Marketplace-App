import { FC } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'
import { BiChevronDown } from 'react-icons/bi'
import useMounted from 'hooks/useMounted'
import Avatar from './Avatar'

const DARK_MODE = process.env.NEXT_PUBLIC_DARK_MODE

const ProductsDropdown: FC = () => {
  const isMounted = useMounted()

  if (!isMounted) {
    return null
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger style={{fontWeight: '500'}} className="flex items-center focus-visible:outline-none hover:text-[#666666]">
        Products <BiChevronDown />
      </DropdownMenu.Trigger>


      <DropdownMenu.Content align="center" sideOffset={6}>
        <div
          style={{boxShadow: '0px 4px 32px rgba(0, 0, 0, 0.16)'}}
          className={`w-48 space-y-1 bg-white px-3 py-3 radix-side-bottom:animate-slide-down dark:bg-neutral-900 md:w-[320px] rounded-[16px]`}
        >
          {/* Marketplace */}
          <Link href={`/`} legacyBehavior={true}>
            <DropdownMenu.Item asChild>
              <div className="group flex w-full items-center gap-2 px-2 py-2 outline-none transition hover:bg-neutral-100 focus:bg-neutral-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-pointer rounded-[8px]">
                <Avatar address={''} avatar={'/icons/main-nav/marketplace.svg'} size={40} />
                <div>
                  <p className='text-[14px] leading-6 font-medium'>Marketplace</p>
                  <p className='text-[12px] leading-4 text-[#00000066]'>Buy & Sell NFTs</p>
                </div>
            </div>
            </DropdownMenu.Item>
          </Link>

          {/* NFT Embed */}
          <a href='https://www.nftembed.org/' target="_blank" rel="noreferrer">
            <DropdownMenu.Item asChild>
              <div className="group flex w-full items-center gap-2 px-2 py-2 outline-none transition hover:bg-neutral-100 focus:bg-neutral-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-pointer rounded-[8px]">
                <Avatar address={''} avatar={'/icons/main-nav/nft-embed.svg'} size={40} />
                <div>
                  <p className='text-[14px] leading-6 font-medium'>NFT Embed</p>
                  <p className='text-[12px] leading-4 text-[#00000066]'>Display & sell NFTs on any website</p>
                </div>
            </div>
            </DropdownMenu.Item>
          </a>

          {/* NFT Torrent */}
          <a href='https://graviton.xyz/products/torrent' target="_blank" rel="noreferrer">
            <DropdownMenu.Item asChild>
              <div className="group flex w-full items-center gap-2 px-2 py-2 outline-none transition hover:bg-neutral-100 focus:bg-neutral-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-pointer rounded-[8px]">
                <Avatar address={''} avatar={'/icons/main-nav/nft-torrent.svg'} size={40} />
                <div>
                  <p className='text-[14px] leading-6 font-medium'>NFT Torrent</p>
                  <p className='text-[12px] leading-4 text-[#00000066]'>Safely mint, seed and store your files</p>
                </div>
            </div>
            </DropdownMenu.Item>
          </a>

          {/* NFT Display */}
          <a href='https://graviton.xyz/products/display' target="_blank" rel="noreferrer">
            <DropdownMenu.Item asChild>
              <div className="group flex w-full items-center gap-2 px-2 py-2 outline-none transition hover:bg-neutral-100 focus:bg-neutral-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-pointer rounded-[8px]">
                <Avatar address={''} avatar={'/icons/main-nav/nft-display.svg'} size={40} />
                <div>
                  <p className='text-[14px] leading-6 font-medium'>NFT Display</p>
                  <p className='text-[12px] leading-4 text-[#00000066]'>Showcase your favorites on any screen</p>
                </div>
            </div>
            </DropdownMenu.Item>
          </a>

          {/* Xeenon */}
          <a href='https://xeenon.xyz/' target="_blank" rel="noreferrer">
            <DropdownMenu.Item asChild>
              <div className="group flex w-full items-center gap-2 px-2 py-2 outline-none transition hover:bg-neutral-100 focus:bg-neutral-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-pointer rounded-[8px]">
                <Avatar address={''} avatar={'/icons/main-nav/xeenon.svg'} size={40} />
                <div>
                  <p className='text-[14px] leading-6 font-medium'>Xeenon</p>
                  <p className='text-[12px] leading-4 text-[#00000066]'>A WEB3 Media Platform</p>
                </div>
            </div>
            </DropdownMenu.Item>
          </a>

          {/* Metaversian Republic */}
          <a href='https://metaversia.universe.xyz/' target="_blank" rel="noreferrer">
            <DropdownMenu.Item asChild>
              <div className="group flex w-full items-center gap-2 px-2 py-2 outline-none transition hover:bg-neutral-100 focus:bg-neutral-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-pointer rounded-[8px]">
                <Avatar address={''} avatar={'/icons/main-nav/metaverse-republic.svg'} size={40} />
                <div>
                  <p className='text-[14px] leading-6 font-medium'>Metaversian Republic</p>
                  <p className='text-[12px] leading-4 text-[#00000066]'>Polymorph shooter game</p>
                </div>
            </div>
            </DropdownMenu.Item>
          </a>

          {/* Feta */}
          <a href='https://linktr.ee/fetamarket' target="_blank" rel="noreferrer">
            <DropdownMenu.Item asChild>
              <div className="group flex w-full items-center gap-2 px-2 py-2 outline-none transition hover:bg-neutral-100 focus:bg-neutral-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-pointer rounded-[8px]">
                <Avatar address={''} avatar={'/icons/main-nav/feta.svg'} size={40} />
                <div>
                  <p className='text-[14px] leading-6 font-medium'>Feta</p>
                  <p className='text-[12px] leading-4 text-[#00000066]'>The NFT Options Marketplace</p>
                </div>
            </div>
            </DropdownMenu.Item>
          </a>

        </div>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default ProductsDropdown