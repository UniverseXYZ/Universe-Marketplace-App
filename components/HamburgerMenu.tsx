import * as Dialog from '@radix-ui/react-dialog'
import ConnectWalletButton from 'components/ConnectWalletButton'
import NavbarLogo from 'components/navbar/NavbarLogo'
import Link from 'next/link'
import { FC, useState, forwardRef } from 'react'
import { FiMenu } from 'react-icons/fi'
import { HiOutlineLogout, HiX } from 'react-icons/hi'
import { FiChevronDown } from 'react-icons/fi'
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from 'wagmi'
import { Balance } from './ConnectWallet'
import EthAccount from './EthAccount'
import ThemeSwitcher from './ThemeSwitcher'
import * as Accordion from '@radix-ui/react-accordion';
import Avatar from './Avatar'

type Props = {
  externalLinks: {
    name: string
    url: string
  }[]
}

const HamburgerMenu: FC<Props> = ({ externalLinks }) => {
  const [open, setOpen] = useState(false)
  const { connectors } = useConnect()
  const accountData = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName()
  const { data: ensAvatar } = useEnsAvatar()
  const wallet = connectors[0]

  // @ts-ignore
  // eslint-disable-next-line react/display-name
  const AccordionTrigger = forwardRef(({ children, className, ...props }, forwardedRef) => {
    return (
      <Accordion.Header className="flex px-[20px]">
        <Accordion.Trigger
          className={`${className} flex items-center justify-between flex-1 py-[16px] data-[state=closed]:border-b`}
          {...props}
          // @ts-ignore
          ref={forwardedRef}
        >
          {children}
          < FiChevronDown />
        </Accordion.Trigger>
      </Accordion.Header>
    )
  });
  // @ts-ignore
  // eslint-disable-next-line react/display-name
  const AccordionContent = forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={`${className} px-[20px]`}
      {...props}
      // @ts-ignore
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  ));

  return (
    <Dialog.Root onOpenChange={setOpen} open={open} modal={false}>
      <Dialog.Trigger className="z-10 block p-1.5 md:hidden">
        <FiMenu className="h-6 w-6" />
      </Dialog.Trigger>

      <Dialog.Content
        className="fixed inset-0 z-20 transform bg-white shadow-md dark:bg-black"
        onInteractOutside={(e) => {
          e.preventDefault()
        }}
      >
      <div className='h-screen overflow-x-scroll pb-[200px]'>
        <div className="flex items-center justify-between gap-3 border-b border-neutral-300 px-6 py-4 dark:border-neutral-600">
          <NavbarLogo variant="desktop" />
          <Dialog.Close className="btn-primary-outline py-1.5 px-[5px] dark:text-white">
            <HiX className="h-6 w-6" />
          </Dialog.Close>
        </div>

        <div className="my-2 px-4">
          <ThemeSwitcher />
        </div>
        {accountData.isConnected && (
          <div className='px-[20px]'>
            <div className="rounded-lg border flex justify-between p-[16px]">
              <EthAccount
                side='left'
                address={accountData.address}
                avatarSize={40}
                ens={{
                  avatar: ensAvatar,
                  name: ensName,
                }}
              />

              {/* Balance */}
              <div className="flex items-center">
                <span>
                  {accountData.address && (
                    <Balance address={accountData.address} />
                  )}
                </span>
              </div>
            </div>

            {/* Portfolio */}
            <Link href={`/address/${accountData.address}`} legacyBehavior={true}>
              <a
                className="text-base font-semibold group flex w-full cursor-pointer items-center border-b py-4 outline-none"
                onClick={() => setOpen(false)}
              >
                Portfolio
              </a>
            </Link>
          </div>
        )}

        <Accordion.Root className="AccordionRoot" type="single" collapsible>
          {/* Products */}
          <Accordion.Item className="AccordionItem" value="item-1">
          {/* @ts-ignore */}
            <AccordionTrigger>
              <p className='text-base font-semibold'>Products</p>
            </AccordionTrigger>
            {/* @ts-ignore */}
            <AccordionContent>
                {/* Marketplace */}
                <Link href={`/`} legacyBehavior={true}>
                    <div className="group flex w-full items-center gap-2 px-2 py-2 outline-none">
                      <Avatar address={''} avatar={'/icons/main-nav/marketplace.svg'} size={40} />
                      <div>
                        <p className='text-[14px] leading-6'>Marketplace</p>
                        <p className='text-[12px] leading-4 text-[#00000066]'>Buy & Sell NFTs</p>
                      </div>
                  </div>
                </Link>

                {/* NFT Embed */}
                <a href='https://www.nftembed.org/' target="_blank" rel="noreferrer">
                    <div className="group flex w-full items-center gap-2 px-2 py-2 outline-none">
                      <Avatar address={''} avatar={'/icons/main-nav/nft-embed.svg'} size={40} />
                      <div>
                        <p className='text-[14px] leading-6'>NFT Embed</p>
                        <p className='text-[12px] leading-4 text-[#00000066]'>Display & sell NFTs on any website</p>
                      </div>
                  </div>
                </a>

              {/* NFT Torrent */}
              <a href='https://graviton.xyz/products/torrent' target="_blank" rel="noreferrer">
                  <div className="group flex w-full items-center gap-2 px-2 py-2 outline-none">
                    <Avatar address={''} avatar={'/icons/main-nav/nft-torrent.svg'} size={40} />
                    <div>
                      <p className='text-[14px] leading-6'>NFT Torrent</p>
                      <p className='text-[12px] leading-4 text-[#00000066]'>Safely mint,seed and store your files</p>
                    </div>
                </div>
              </a>

              {/* NFT Display */}
              <a href='https://graviton.xyz/products/display' target="_blank" rel="noreferrer">
                  <div className="group flex w-full items-center gap-2 px-2 py-2 outline-none">
                    <Avatar address={''} avatar={'/icons/main-nav/nft-display.svg'} size={40} />
                    <div>
                      <p className='text-[14px] leading-6'>NFT Display</p>
                      <p className='text-[12px] leading-4 text-[#00000066]'>Showcase your favorites on any screen</p>
                    </div>
                </div>
              </a>

              {/* Metaversian Republic */}
              <a href='https://metaversia.universe.xyz/' target="_blank" rel="noreferrer">
                  <div className="group flex w-full items-center gap-2 px-2 py-2 outline-none border-b pb-5">
                    <Avatar address={''} avatar={'/icons/main-nav/metaverse-republic.svg'} size={40} />
                    <div>
                      <p className='text-[14px] leading-6'>Metaversian Republic</p>
                      <p className='text-[12px] leading-4 text-[#00000066]'>Polymorph shooter game</p>
                    </div>
                </div>
              </a>
            </AccordionContent>
          </Accordion.Item>

          {/* NFT Drops */}
          <Accordion.Item className="AccordionItem" value="item-2">
            {/* @ts-ignore */}
            <AccordionTrigger>
              <p className='text-base font-semibold'>NFT Drops</p>
            </AccordionTrigger>
            {/* @ts-ignore */}
            <AccordionContent>
              {/* Polymorphs */}
              <a href='https://polymorphs.universe.xyz/' target="_blank" rel="noreferrer">
                <div className="group flex w-full items-center gap-2 px-2 py-2 outline-none">
                  <Avatar address={''} className="min-w-[40px]" avatar={'/icons/main-nav/polymorphs.svg'} size={40} />
                  <div>
                    <p className='text-[14px] leading-6'>Polymorphs</p>
                    <p className='text-[12px] leading-4 text-[#00000066]'>Morphing NFTs, with 11 base skins and 200+ traits</p>
                  </div>
                </div>
              </a>

              {/* Polymorphs Rarity */}
              <a href='https://polymorphs.universe.xyz/polymorph-rarity/' target="_blank" rel="noreferrer">
                <div className="group flex w-full items-center gap-2 px-2 py-[10px] outline-none">
                  <img
                    className="object-fit"
                    src='/icons/main-nav/rarity.svg'
                    alt={'rarity'}
                    width='12px'
                    height='12px'
                  />
                  <p className='text-[12px] leading-4 font-medium'>Rarity Chart</p>
                </div>
              </a>

              <div className='py-2 !m-0'>
                <hr className='bg-[#0000000d]'/>
              </div>

              {/* Lobsters */}
              <a href='https://www.universe.xyz/lobby-lobsters' target="_blank" rel="noreferrer">
                <div className="group flex w-full items-center gap-2 px-2 py-2 outline-none">
                  <Avatar address={''} className="min-w-[40px]" avatar={'/icons/main-nav/lobsters.svg'} size={40} />
                  <div>
                    <p className='text-[14px] leading-6'>Lobby Lobsters</p>
                    <p className='text-[12px] leading-4 text-[#00000066]'>10,000 rarity based NFTs lobbying crypto interests </p>
                  </div>
                </div>
              </a>

              {/* Lobsters Rarity */}
              <a href='https://rarity.tools/lobby-lobsters' target="_blank" rel="noreferrer">
                <div className="group flex w-full items-center gap-2 px-2 py-[10px] outline-none border-b pb-5">
                  <img
                    className="object-fit"
                    src='/icons/main-nav/rarity.svg'
                    alt={'rarity'}
                    width='12px'
                    height='12px'
                  />
                  <p className='text-[12px] leading-4 font-medium'>Rarity Chart</p>
                </div>
              </a>
            </AccordionContent>
          </Accordion.Item>

          {/* Info */}
          <Accordion.Item className="AccordionItem" value="item-3">
            {/* @ts-ignore */}
            <AccordionTrigger>
              <p className='text-base font-semibold'>Info</p>
            </AccordionTrigger>
            {/* @ts-ignore */}
            <AccordionContent>
              {/* About */}
              <a href='https://www.universe.xyz/about' target="_blank" rel="noreferrer">
                <div className="group flex w-full items-center gap-3 px-3 py-[12px] outline-none">
                  <img
                    className="object-fit"
                    src='/icons/main-nav/about.svg'
                    alt={'rarity'}
                    width='14px'
                    height='14px'
                  />
                  <p className='text-[14px] leading-6 font-medium'>About</p>
                </div>
              </a>

              {/* Whitepaper */}
              <a href='https://github.com/UniverseXYZ/UniverseXYZ-Whitepaper' target="_blank" rel="noreferrer">
                <div className="group flex w-full items-center gap-3 px-3 py-[12px] outline-none">
                  <img
                    className="object-fit"
                    src='/icons/main-nav/whitepaper.svg'
                    alt={'rarity'}
                    width='14px'
                    height='14px'
                  />
                  <p className='text-[14px] leading-6 font-medium'>Whitepaper</p>
                </div>
              </a>

              {/* Team */}
              <a href='https://www.universe.xyz/team' target="_blank" rel="noreferrer">
                <div className="group flex w-full items-center gap-3 px-3 py-[12px] outline-none">
                  <img
                    className="object-fit"
                    src='/icons/main-nav/team.svg'
                    alt={'rarity'}
                    width='14px'
                    height='14px'
                  />
                  <p className='text-[14px] leading-6 font-medium'>Contributors</p>
                </div>
              </a>

              {/* Docs */}
              <a href='https://docs.universe.xyz/' target="_blank" rel="noreferrer">
                <div className="group flex w-full items-center gap-3 px-3 py-[12px] outline-none">
                  <img
                    className="object-fit"
                    src='/icons/main-nav/docs.svg'
                    alt={'rarity'}
                    width='14px'
                    height='14px'
                  />
                  <p className='text-[14px] leading-6 font-medium'>Docs</p>
                </div>
              </a>

              {/* Support */}
              <a href='https://universe.freshdesk.com/support/home' target="_blank" rel="noreferrer">
                <div className="group flex w-full items-center gap-3 px-3 py-[12px] outline-none border-b pb-5">
                  <img
                    className="object-fit"
                    src='/icons/main-nav/support.svg'
                    alt={'rarity'}
                    width='14px'
                    height='14px'
                  />
                  <p className='text-[14px] leading-6 font-medium'>Support</p>
                </div>
              </a>
            </AccordionContent>
          </Accordion.Item>

          {/* DAO */}
          <Accordion.Item className="AccordionItem" value="item-4">
            {/* @ts-ignore */}
            <AccordionTrigger>
              <p className='text-base font-semibold'>DAO</p>
            </AccordionTrigger>
            {/* @ts-ignore */}
            <AccordionContent>
              {/* Governance */}
              <a href='https://gov.universe.xyz/governance' target="_blank" rel="noreferrer">
                <div className="group flex w-full items-center gap-3 px-3 py-[12px] outline-none">
                  <img
                    className="object-fit"
                    src='/icons/main-nav/governance.svg'
                    alt={'rarity'}
                    width='14px'
                    height='14px'
                  />
                  <p className='text-[14px] leading-6 font-medium'>Governance</p>
                </div>
              </a>

              {/* Yield Farming */}
              <a href='https://gov.universe.xyz/yield-farming' target="_blank" rel="noreferrer">
                <div className="group flex w-full items-center gap-3 px-3 py-[12px] outline-none">
                  <img
                    className="object-fit"
                    src='/icons/main-nav/yield-farming.svg'
                    alt={'rarity'}
                    width='14px'
                    height='14px'
                  />
                  <p className='text-[14px] leading-6 font-medium'>Yield Farming</p>
                </div>
              </a>

              {/* Forum */}
              <a href='https://forum.universe.xyz/' target="_blank" rel="noreferrer">
                <div className="group flex w-full items-center gap-3 px-3 py-[12px] outline-none">
                  <img
                    className="object-fit"
                    src='/icons/main-nav/forum.svg'
                    alt={'rarity'}
                    width='14px'
                    height='14px'
                  />
                  <p className='text-[14px] leading-6 font-medium'>Forum</p>
                </div>
              </a>

              {/* Signal */}
              <a href='https://snapshot.org/#/universexyz.eth/' target="_blank" rel="noreferrer">
                <div className="group flex w-full items-center gap-3 px-3 py-[12px] outline-none">
                  <img
                    className="object-fit"
                    src='/icons/main-nav/signal.svg'
                    alt={'rarity'}
                    width='14px'
                    height='14px'
                  />
                  <p className='text-[14px] leading-6 font-medium'>Signal</p>
                </div>
              </a>

              {/* Airdrop */}
              <a href='https://gov.universe.xyz/airdrop' target="_blank" rel="noreferrer">
                <div className="group flex w-full items-center gap-3 px-3 py-[12px] outline-none cursor-pointer border-b pb-5">
                  <img
                    className="object-fit"
                    src='/icons/main-nav/airdrop.svg'
                    alt={'rarity'}
                    width='14px'
                    height='14px'
                  />
                  <p className='text-[14px] leading-6 font-medium'>Airdrop</p>
                </div>
              </a>
            </AccordionContent>
          </Accordion.Item>
        </Accordion.Root>

        {accountData.isConnected && (
          <div className='px-[20px]'>
            <button
              key={wallet.id}
              onClick={() => disconnect()}
              className="group flex w-full cursor-pointer rounded py-4 outline-none"
            >
              <span className='text-base font-semibold'>Disconnect</span>
            </button>
          </div>
        )}

        {/* Footer */}
        <div
          className='absolute bottom-0 w-full z-5 bg-white'
        >
          {accountData.isConnected ?
            (
              <div className='mb-4 pt-4 border-t px-4'>
                <div className={`items-center justify-center flex bg-gradient-to-r from-[#BCEB00] to-[#00EAEA] rounded-lg cursor-pointer shadow-md`}>
                  <Link href={`/sell`} legacyBehavior={true}>
                    <p className='text-[16px] leading-[20px] font-medium px-[16px] py-[11px]'>Sell</p>
                  </Link>
                </div>
              </div>

            )
            :
            (
              <div className="mb-4 pt-4 border-t px-4">
                <ConnectWalletButton className="w-full shadow-md">
                  <span>Connect Wallet</span>
                </ConnectWalletButton>
              </div>
            )
          }
        </div>

      </div>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default HamburgerMenu
