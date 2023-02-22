import { FaTwitter, FaDiscord, FaYoutube, FaMedium, FaMediumM } from 'react-icons/fa'
import Link from 'next/link'
import { CoingeckoIcon } from 'public/icons/footer/CoingeckoIcon'
import { MediumIcon } from 'public/icons/footer/MediumIcon'

const FOOTER_ENABLED = process.env.NEXT_PUBLIC_FOOTER_ENABLED == 'true'

const Footer = () => {
  if (FOOTER_ENABLED)
    return (
      <footer className="flex w-full items-center flex-col xl:flex-row xl:justify-between px-8 py-5 md:px-16 border-t bg-white border-[#0000001a]">
        {/* Links */}
        <div className="mb-6 flex flex-col gap-3 md:flex-row items-center xl:justify-between gap-x-6 text-xs xl:mb-0 sm:gap-x-8 text-[#00000099]">
          <span>
            Universe.xyz © 2023. Open-sourced.
          </span>
          <Link href="https://app.sushi.com/legacy/add/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48/0x618679df9efcd19694bb1daa8d00718eacfa2883?chainId=1" legacyBehavior={true}>
            <a className="hover:text-[#000000]" target="_blank" rel="noreferrer">
              Add liquidity to SushiSwap USDC/XYZ pool
            </a>
          </Link>
          <Link href="https://app.sushi.com/swap?inputCurrency=0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48&outputCurrency=0x618679dF9EfCd19694BB1daa8D00718Eacfa2883&chainId=1" legacyBehavior={true}>
            <a className="min-w-max hover:text-[#000000]" target="_blank" rel="noreferrer">
              SushiSwap USDC/XYZ market
            </a>
          </Link>
        </div>

        {/* Social */}
        <div className="flex flex-row items-center gap-x-2">
          <Link href="https://twitter.com/universe_xyz" legacyBehavior={true}>
            <a className="flex items-center justify-center w-[40px] h-[40px] rounded-lg bg-[#00000008] hover:bg-[#0000001a]" target="_blank" rel="noreferrer">
              <FaTwitter className="h-[20px] w-[25px]" />
            </a>
          </Link>
          <Link href="https://discord.com/invite/vau77wXCD3" className="ml-5" legacyBehavior={true}>
            <a className="flex items-center justify-center w-[40px] h-[40px] rounded-lg bg-[#00000008] hover:bg-[#0000001a]" target="_blank" rel="noreferrer">
              <FaDiscord className="h-[19px] w-[25px]" />
            </a>
          </Link>
          <Link href="https://www.coingecko.com/en/coins/universe-xyz" className="ml-5" legacyBehavior={true}>
            <a className="flex items-center justify-center w-[40px] h-[40px] rounded-lg bg-[#00000008] hover:bg-[#0000001a]" target="_blank" rel="noreferrer">
              <CoingeckoIcon />
            </a>
          </Link>
          <Link href="https://www.youtube.com/channel/UCWt00md9T2b4iTsHWp_Fapw" className="ml-5" legacyBehavior={true}>
            <a className="flex items-center justify-center w-[40px] h-[40px] rounded-lg bg-[#00000008] hover:bg-[#0000001a]" target="_blank" rel="noreferrer">
              <FaYoutube className="h-[19px] w-[25px]" />
            </a>
          </Link>
          <Link href="https://medium.com/universe-xyz" className="ml-5" legacyBehavior={true}>
            <a className="flex items-center justify-center w-[40px] h-[40px] rounded-lg bg-[#00000008] hover:bg-[#0000001a]" target="_blank" rel="noreferrer">
              <MediumIcon />
            </a>
          </Link>
        </div>
      </footer>
    )

  return null
}

export default Footer
