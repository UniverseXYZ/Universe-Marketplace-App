import { FaTwitter, FaDiscord, FaYoutube, FaMedium, FaMediumM } from 'react-icons/fa'
import Link from 'next/link'

const FOOTER_ENABLED = process.env.NEXT_PUBLIC_FOOTER_ENABLED == 'true'

const Footer = () => {
  if (FOOTER_ENABLED)
    return (
      <footer className="col-span-full flex flex-col items-center justify-between px-8 pb-8 pt-8 sm:flex-row md:px-16 border-t border-[#0000001a]">
        <div className="mb-6 flex flex-row flex-wrap items-center justify-between gap-x-6 text-xs sm:mb-0 sm:gap-x-8 sm:text-sm">
          <span>
            Universe.xyz © 2023. Open-sourced.
          </span>
          <Link href="https://app.sushi.com/legacy/add/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48/0x618679df9efcd19694bb1daa8d00718eacfa2883?chainId=1" legacyBehavior={true}>
            <a className="" target="_blank" rel="noreferrer">
              Add liquidity to SushiSwap USDC/XYZ pool
            </a>
          </Link>
          <Link href="https://app.sushi.com/swap?inputCurrency=0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48&outputCurrency=0x618679dF9EfCd19694BB1daa8D00718Eacfa2883&chainId=1" legacyBehavior={true}>
            <a className="min-w-max" target="_blank" rel="noreferrer">
              SushiSwap USDC/XYZ market
            </a>
          </Link>
        </div>
        <div className="flex flex-row items-center gap-x-6">
          <Link href="https://twitter.com/universe_xyz" legacyBehavior={true}>
            <a className="" target="_blank" rel="noreferrer">
              <FaTwitter className="h-[20px] w-[25px]" />
            </a>
          </Link>
          <Link href="https://discord.com/invite/vau77wXCD3" className="ml-5" legacyBehavior={true}>
            <a className="" target="_blank" rel="noreferrer">
              <FaDiscord className="h-[19px] w-[25px]" />
            </a>
          </Link>
          <Link href="https://www.youtube.com/channel/UCWt00md9T2b4iTsHWp_Fapw" className="ml-5" legacyBehavior={true}>
            <a className="" target="_blank" rel="noreferrer">
              <FaYoutube className="h-[19px] w-[25px]" />
            </a>
          </Link>
          <Link href="https://medium.com/universe-xyz" className="ml-5" legacyBehavior={true}>
            <a className="" target="_blank" rel="noreferrer">
              <FaMediumM className="h-[19px] w-[25px]" />
            </a>
          </Link>
        </div>
      </footer>
    )

  return null
}

export default Footer
