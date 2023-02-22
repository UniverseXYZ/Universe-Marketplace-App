import { NextPage } from 'next'
import Layout from 'components/Layout'


const About: NextPage = () => {
  return (
    <Layout navbar={{}}>
      <div className='h-[613px] bg-[#000000] col-span-full relative flex items-center justify-center'>
        <img
          className="absolute left-0 top-[27px]"
          src='/about/left.svg'
          alt={'rarity'}
          width='130px'
          height='390px'
        />

        <img
          className="absolute right-0 bottom-[23px]"
          src='/about/right.svg'
          alt={'rarity'}
          width='130px'
          height='390px'
        />

        <div className='flex flex-col-reverse lg:flex-row items-center lg:justify-between max-w-[1110px]'>
          <div className='max-w-[627px] px-5 pb-5 lg:px-0 lg:pb-0'>
            <p className='text-[24px] leading-[32px] lg:text-[48px] lg:leading-[58px] font-semibold text-[#FFFFFF] mb-[24px] font-sharpgrotesk'>Welcome to the NFT Universe Built on Ethereum</p>
            <p className='text-[14px] leading-[20px] lg:text-[18px] lg:leading-[150%] text-[#ffffff99] max-w-[475px]'>
              Launch your own community-driven NFT universe baked with social tools, media services, and distribution - underpinned by the native $XYZ token.
            </p>
          </div>
          <div className='max-w-[285px] max-h-[285px] lg:max-w-[538px] lg:max-h-[485px]'>
            <video width="100%" height="100%" autoPlay loop muted>
              <source src="/about/hero_video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className='col-span-full flex items-center justify-center relative'>
        <img
          className="absolute left-[-5%] bottom-[-5%] z-[-1]"
          src='/about/ellipse-left.svg'
          alt={'rarity'}
          width='508px'
          height='508px'
        />

        <img
          className="absolute top-[-5%] right-[-5%] z-[-1]"
          src='/about/ellipse-right.svg'
          alt={'rarity'}
          width='508px'
          height='508px'
        />
        <div className='max-w-[1110px] my-[64px] about-description backdrop-blur-[20px] py-[25px] lg:py-[64px] px-[20px] lg:px-[95px] rounded-[20px] opacity-90'>
          <p className='text-[32px] leading-[40px] font-semibold pb-[16px] font-sharpgrotesk'>Universe Protocol and the xyzDAO</p>
          <p className='text-[18px] leading-[150%] font-semibold pb-[16px]'>Meta: To create a system that doesn’t live off the backs of artists and creates a sustainable ecosystem for artists and fans alike.</p>
          <p className='text-[16px] leading-[24px] pb-[20px] text-[#00000099]'>Welcome to the world of Universe, the ultimate NFT marketplace designed exclusively for the creative minds! Our platform was meticulously crafted with one idea in mind: to empower the artistic community and showcase their incredible talent to the world.</p>
          <p className='text-[16px] leading-[24px] pb-[20px] text-[#00000099]'>We are proud to be the go-to platform for artists looking to monetize their creations, and that&apos;s why we take artist royalties very seriously. We make sure that every Universe contract includes the fair compensation that artists deserve. Because we believe that every artist&apos;s unique vision and creativity are essential to the very fabric of our Universe.</p>
          <p className='text-[16px] leading-[24px] pb-[20px] text-[#00000099]'>But we know that supporting artists isn&apos;t just about compensating them fairly. It&apos;s about creating an environment that fosters innovation, promotes creativity, and enables artists to reach their full potential. That&apos;s why we are more than just an NFT marketplace. We are a community of like-minded people who share a passion for art and are committed to supporting one another.</p>
          <p className='text-[16px] leading-[24px] pb-[20px] text-[#00000099]'>We understand that as an artist, your focus should be on creating and sharing your work, not on worrying about high transaction fees. That&apos;s why we only take a tiny 0.3% fee on trades that take place on our platform. It&apos;s just enough to keep the wheels of our decentralized autonomous organization (DAO) turning and the platform running smoothly. So you can focus on what matters most: your art.</p>
          <p className='text-[16px] leading-[24px] pb-[20px] text-[#00000099]'>At Universe, we are dedicated to making sure that artists have the resources they need to thrive. We provide a platform that is intuitive, secure, and easy to use. And we offer unparalleled support to our users, ensuring that every step of the NFT creation and selling process is as smooth and hassle-free as possible.</p>
          <p className='text-[16px] leading-[24px] text-[#00000099]'>So what are you waiting for? Join the Universe community today and let us help you take your artistic vision to the next level!</p>
        </div>
          {/* eslint-disable-next-line react/no-unknown-property */}
          <style jsx global>{`
            .about-description {
              background: linear-gradient(#fff,#fff) padding-box,linear-gradient(90deg,#2ad0ca,#e1f664,#feb0fe,#abb3fc,#5df7a4,#58c4f6) border-box;
              border: 1px solid transparent;
            }
          `}</style>
      </div>
    </Layout>
  )
}

export default About

