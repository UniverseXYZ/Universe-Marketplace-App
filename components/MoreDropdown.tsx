import { FC } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { BiChevronDown } from 'react-icons/bi'
import useMounted from 'hooks/useMounted'

const DARK_MODE = process.env.NEXT_PUBLIC_DARK_MODE

const MoreDropdown: FC = () => {
  const isMounted = useMounted()

  if (!isMounted) {
    return null
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger style={{fontWeight: '500'}} className="flex items-center focus-visible:outline-none hover:text-[#666666]">
        More <BiChevronDown />
      </DropdownMenu.Trigger>


      <DropdownMenu.Content align="center" sideOffset={6}>
        <div
          style={{boxShadow: '0px 4px 32px rgba(0, 0, 0, 0.16)'}}
          className={`w-48 space-y-1  bg-white px-3 py-3 radix-side-bottom:animate-slide-down dark:bg-neutral-900 md:w-[340px] rounded-[16px]`}
        >

          <div className='flex gap-3'>
            {/* Info */}
            <div className='flex-1'>
              <p className='text-[12px] leading-4 text-[#666666] font-semibold pl-2'>INFO</p>
              <div className='py-3 !m-0'>
                <hr className='bg-[#0000000d]'/>
              </div>

              {/* About */}
              <a href='https://www.universe.xyz/about' target="_blank" rel="noreferrer">
                <DropdownMenu.Item asChild>
                  <div className="group flex w-full items-center gap-2 px-3 py-2 outline-none transition hover:bg-neutral-100 focus:bg-neutral-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-pointer rounded-[8px]">
                    <img
                      className="object-fit"
                      src='/icons/main-nav/about.svg'
                      alt={'rarity'}
                      width='24px'
                      height='24px'
                    />
                    <p className='text-[14px] leading-6 font-medium'>About</p>
                </div>
                </DropdownMenu.Item>
              </a>

              {/* Whitepaper */}
              <a href='https://github.com/UniverseXYZ/UniverseXYZ-Whitepaper' target="_blank" rel="noreferrer">
                <DropdownMenu.Item asChild>
                  <div className="group flex w-full items-center gap-2 px-3 py-2 outline-none transition hover:bg-neutral-100 focus:bg-neutral-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-pointer rounded-[8px]">
                    <img
                      className="object-fit"
                      src='/icons/main-nav/whitepaper.svg'
                      alt={'rarity'}
                      width='24px'
                      height='24px'
                    />
                    <p className='text-[14px] leading-6 font-medium'>Whitepaper</p>
                </div>
                </DropdownMenu.Item>
              </a>

              {/* Team */}
              <a href='https://www.universe.xyz/team' target="_blank" rel="noreferrer">
                <DropdownMenu.Item asChild>
                  <div className="group flex w-full items-center gap-2 px-3 py-2 outline-none transition hover:bg-neutral-100 focus:bg-neutral-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-pointer rounded-[8px]">
                    <img
                      className="object-fit"
                      src='/icons/main-nav/team.svg'
                      alt={'rarity'}
                      width='24px'
                      height='24px'
                    />
                    <p className='text-[14px] leading-6 font-medium'>Contributors</p>
                </div>
                </DropdownMenu.Item>
              </a>

              {/* Docs */}
              <a href='https://docs.universe.xyz/' target="_blank" rel="noreferrer">
                <DropdownMenu.Item asChild>
                  <div className="group flex w-full items-center gap-2 px-3 py-2 outline-none transition hover:bg-neutral-100 focus:bg-neutral-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-pointer rounded-[8px]">
                    <img
                      className="object-fit"
                      src='/icons/main-nav/docs.svg'
                      alt={'rarity'}
                      width='24px'
                      height='24px'
                    />
                    <p className='text-[14px] leading-6 font-medium'>Docs</p>
                </div>
                </DropdownMenu.Item>
              </a>

              {/* Support */}
              <a href='https://universe.freshdesk.com/support/home' target="_blank" rel="noreferrer">
                <DropdownMenu.Item asChild>
                  <div className="group flex w-full items-center gap-2 px-3 py-2 outline-none transition hover:bg-neutral-100 focus:bg-neutral-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-pointer rounded-[8px]">
                    <img
                      className="object-fit"
                      src='/icons/main-nav/support.svg'
                      alt={'rarity'}
                      width='24px'
                      height='24px'
                    />
                    <p className='text-[14px] leading-6 font-medium'>Support</p>
                </div>
                </DropdownMenu.Item>
              </a>

            </div>

            {/* DAO */}
            <div className='flex-1'>
              <p className='text-[12px] leading-4 text-[#666666] font-semibold pl-2'>DAO</p>
              <div className='py-3 !m-0'>
                <hr className='bg-[#0000000d]'/>
              </div>

              {/* Governance */}
              <a href='https://gov.universe.xyz/governance' target="_blank" rel="noreferrer">
                <DropdownMenu.Item asChild>
                  <div className="group flex w-full items-center gap-2 px-3 py-2 outline-none transition hover:bg-neutral-100 focus:bg-neutral-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-pointer rounded-[8px]">
                    <img
                      className="object-fit"
                      src='/icons/main-nav/governance.svg'
                      alt={'rarity'}
                      width='24px'
                      height='24px'
                    />
                    <p className='text-[14px] leading-6 font-medium'>Governance</p>
                </div>
                </DropdownMenu.Item>
              </a>

              {/* Yield Farming */}
              <a href='https://gov.universe.xyz/yield-farming' target="_blank" rel="noreferrer">
                <DropdownMenu.Item asChild>
                  <div className="group flex w-full items-center gap-2 px-3 py-2 outline-none transition hover:bg-neutral-100 focus:bg-neutral-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-pointer rounded-[8px]">
                    <img
                      className="object-fit"
                      src='/icons/main-nav/yield-farming.svg'
                      alt={'rarity'}
                      width='24px'
                      height='24px'
                    />
                    <p className='text-[14px] leading-6 font-medium'>Yield Farming</p>
                </div>
                </DropdownMenu.Item>
              </a>

              {/* Forum */}
              <a href='https://forum.universe.xyz/' target="_blank" rel="noreferrer">
                <DropdownMenu.Item asChild>
                  <div className="group flex w-full items-center gap-2 px-3 py-2 outline-none transition hover:bg-neutral-100 focus:bg-neutral-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-pointer rounded-[8px]">
                    <img
                      className="object-fit"
                      src='/icons/main-nav/forum.svg'
                      alt={'rarity'}
                      width='24px'
                      height='24px'
                    />
                    <p className='text-[14px] leading-6 font-medium'>Forum</p>
                </div>
                </DropdownMenu.Item>
              </a>

              {/* Signal */}
              <a href='https://snapshot.org/#/universexyz.eth/' target="_blank" rel="noreferrer">
                <DropdownMenu.Item asChild>
                  <div className="group flex w-full items-center gap-2 px-3 py-2 outline-none transition hover:bg-neutral-100 focus:bg-neutral-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-pointer rounded-[8px]">
                    <img
                      className="object-fit"
                      src='/icons/main-nav/signal.svg'
                      alt={'rarity'}
                      width='24px'
                      height='24px'
                    />
                    <p className='text-[14px] leading-6 font-medium'>Signal</p>
                </div>
                </DropdownMenu.Item>
              </a>

              {/* Airdrop */}
              <a href='https://gov.universe.xyz/airdrop' target="_blank" rel="noreferrer">
                <DropdownMenu.Item asChild>
                  <div className="group flex w-full items-center gap-2 px-3 py-2 outline-none transition hover:bg-neutral-100 focus:bg-neutral-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-pointer rounded-[8px]">
                    <img
                      className="object-fit"
                      src='/icons/main-nav/airdrop.svg'
                      alt={'rarity'}
                      width='24px'
                      height='24px'
                    />
                    <p className='text-[14px] leading-6 font-medium'>Airdrop</p>
                </div>
                </DropdownMenu.Item>
              </a>

            </div>

          </div>

        </div>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default MoreDropdown