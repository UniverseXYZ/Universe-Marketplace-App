import { FC } from 'react'
import {
  useAccount,
  useBalance,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
  Address,
} from 'wagmi'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'
import { HiOutlineLogout } from 'react-icons/hi'
import FormatNativeCrypto from './FormatNativeCrypto'
import ConnectWalletButton from 'components/ConnectWalletButton'
import useMounted from 'hooks/useMounted'
import Avatar from './Avatar'
import { truncateAddress, truncateEns } from 'lib/truncateText'

const DARK_MODE = process.env.NEXT_PUBLIC_DARK_MODE
const DISABLE_POWERED_BY_RESERVOIR =
  process.env.NEXT_PUBLIC_DISABLE_POWERED_BY_RESERVOIR

const ConnectWallet: FC = () => {
  const account = useAccount()
  const { data: ensAvatar } = useEnsAvatar({ address: account?.address })
  const { data: ensName } = useEnsName({ address: account?.address })
  const { connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const wallet = connectors[0]
  const isMounted = useMounted()

  if (!isMounted) {
    return null
  }

  if (!account.isConnected)
    return (
      <ConnectWalletButton>
        <img src="/icons/main-nav/wallet.svg" alt="Wallet Icon" />
      </ConnectWalletButton>
    )

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center ml-auto rounded-full focus-visible:outline-none border-transparent p-0 normal-case">
        <Avatar address={account.address} avatar={ensAvatar} size={40} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content align="end" sideOffset={6}>
        <div
          style={{boxShadow: '0px 4px 32px rgba(0, 0, 0, 0.16)'}}
          className="w-[240px] space-y-1 bg-white px-3 py-3 shadow-md radix-side-bottom:animate-slide-down dark:bg-neutral-900 md:w-56 rounded-[8px]"
        >
          {/* Balance and ENS */}
          <div className='border rounded-lg mb-[8px]'>
            <div className="group flex w-full items-center justify-between rounded px-4 pt-4 pb-2 outline-none transition text-base font-semibold">
              {ensName ? (
                <span>{truncateEns(ensName)}</span>
              ) : (
                <span>{truncateAddress(account.address || '')}</span>
              )}
            </div>
            <div className="group flex w-full items-center justify-between rounded px-4 pt-2 pb-4 outline-none transition text-sm font-semibold">
              {account.address && <Balance address={account.address} />}
            </div>
          </div>

          <Link href={`/address/${account.address}`} legacyBehavior={true}>
            <DropdownMenu.Item asChild>
              <div className="group flex w-full items-center gap-3 px-3 py-2 outline-none transition hover:bg-neutral-100 focus:bg-neutral-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-pointer rounded-[8px]">
                <img
                  className="object-fit"
                  src='/icons/main-nav/profile.svg'
                  alt={'rarity'}
                  width='24px'
                  height='24px'
                />
                <p className='text-[14px] leading-6 font-medium'>Portfolio</p>
                </div>
            </DropdownMenu.Item>
          </Link>
          <DropdownMenu.Item asChild>
            <button
              key={wallet.id}
              onClick={() => {
                disconnect()
              }}
              className="group flex w-full cursor-pointer items-center gap-3 rounded-[8px] px-3 py-2 outline-none transition hover:bg-neutral-100 focus:bg-neutral-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            >
              <img
                className="object-fit"
                src='/icons/main-nav/sign-out.svg'
                alt={'rarity'}
                width='24px'
                height='24px'
              />
              <p className='text-[14px] leading-6 font-medium'>Disconnect</p>
            </button>
          </DropdownMenu.Item>
        </div>
        {!DISABLE_POWERED_BY_RESERVOIR && (
          <div className="group mx-auto flex w-full cursor-pointer items-center justify-center gap-3 rounded-b-2xl bg-neutral-100  py-4 px-4 outline-none  transition dark:bg-neutral-800 ">
            <Link href="https://reservoirprotocol.github.io/" legacyBehavior={true}>
              <a
                className="reservoir-tiny flex gap-2 dark:text-white"
                target="_blank"
              >
                Powered by{' '}
                <img
                  src={
                    !!DARK_MODE
                      ? `/reservoir_watermark_dark.svg`
                      : `/reservoir_watermark_light.svg`
                  }
                />
              </a>
            </Link>
          </div>
        )}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default ConnectWallet

type Props = {
  address: string
}

export const Balance: FC<Props> = ({ address }) => {
  const { data: balance } = useBalance({ address: address as Address })
  return <FormatNativeCrypto amount={balance?.value} logoWidth={20}/>
}
