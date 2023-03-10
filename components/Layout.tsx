import { ComponentProps, FC, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'
import Footer from './Footer'
import Navbar from './Navbar'
import NetworkWarning from './NetworkWarning'
import { useNetwork, useSigner } from 'wagmi'
const chainId = process.env.NEXT_PUBLIC_CHAIN_ID

type Props = {
  navbar: ComponentProps<typeof Navbar>
  children: ReactNode
}

const Layout: FC<Props> = ({ children, navbar }) => {
  const { chain: activeChain } = useNetwork()
  const { data: signer } = useSigner()

  const showWrongNetwork = chainId && signer && activeChain?.id !== +chainId;

  return (
    <div>
      {showWrongNetwork && <NetworkWarning />}

      <div className={`${showWrongNetwork ? 'h-[calc(100vh-74px)]' : 'h-screen'} flex flex-col justify-between`}>
        <Toaster
          position={'top-right'}
          containerStyle={{ zIndex: 100000000000 }}
        />
        <main className="min-[2560px]:mx-auto min-[2560px]:min-w-[2560px] grid max-w-[2560px] grid-cols-4 gap-x-4 pb-4 md:grid-cols-8 lg:grid-cols-12 3xl:grid-cols-16 4xl:grid-cols-21">
          <Navbar {...navbar} />
          {children}
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout
