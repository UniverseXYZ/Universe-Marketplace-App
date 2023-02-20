import Slider from "react-slick";
import { FC } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SETTINGS = {
    dots: true,
    infinite: true,
    speed: 2000,
    // autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots",
    appendDots: (dots: any) => {
      return (
          <div>
            <ul className="flex items-center justify-center gap-5 carousel">
              {dots}
            </ul>
            {/* eslint-disable-next-line react/no-unknown-property */}
            <style jsx global>{`
              div.slick-dots {
                bottom: 0 !important;
                position: relative !important;
                margin-top: 0.8rem !important;
             }
              div.slick-dots ul > li {
                background: #D9D9D9 !important;
                border-radius: 50% !important;
                width: 8px !important;
                height: 8px !important;
             }
              div.slick-dots ul > li.slick-active {
                background: linear-gradient(135deg, #BCEB00 15.57%, #00EAEA 84.88%) !important;
                width: 14px !important;
                height: 14px !important;
             }
              div.slick-dots ul > li > button {
                position: absolute !important;
                width: 100% !important;
                height: 100% !important;
                border-radius: 50% !important;
                -webkit-appearance: none !important;
                -moz-appearance: none !important;
                background: transparen !importantt;
                border: none !important;
             }
              div.slick-dots ul > li > button:before {
                content: none !important;
             }
             div.slick-slide {
              border-radius: 24px;
              overflow: hidden;
             }
             div.slick-list {
              border-radius: 24px;
              box-shadow: 0px 0px 80px rgba(91, 23, 85, 0.4);
              background: black;
             }
             .slick-arrow {
              display: none !important;
             }
            `}</style>
          </div>
      )
    }
  };

type SupportedPlatforms = {
  apple?: boolean;
  android?: boolean;
  linux?: boolean;
  windows?: boolean;
}

type SlideProps = {
    index: number,
    imageUrl: string,
    title: string,
    description: string,
    iconUrl: string,
    titleClassName?: string;
    descriptionClassName?: string;
    externalUrl: string;
    learnMoreClassName?: string;
    supportedPlatforms?: SupportedPlatforms
  }

const CustomSlide: FC<SlideProps> = ({
    index,
    externalUrl,
    imageUrl,
    title,
    description,
    iconUrl,
    titleClassName = "",
    descriptionClassName = "",
    learnMoreClassName = "",
    supportedPlatforms
  }) => {
  return (
      <div
        style={{
          background: `url(${imageUrl})`,
        }}
        className="h-[400px] rounded-3xl carousel-image relative bg-no-repeat"
      >
        {/* Description  */}
        <div className="text-white px-10 h-full z-10 flex flex-col justify-end pb-7 carousel-item-description absolute top-[75px]">
          <img
            className="object-fit mb-[24px]"
            src={iconUrl}
            alt={'rarity'}
            width='48px'
            height='48px'
          />
          <p className={`font-bold text-[32px] leading-[40px] ${titleClassName}`}>{title}</p>
          <p className={`text-[16px] leading-[24px] max-w-[480px] mb-5 ${descriptionClassName}`}>{description}</p>
          {supportedPlatforms && (
            <div className="mb-6 mr-6 w-[112px] h-[42px] bg-[#00000066] rounded-lg justify-center items-center gap-3 flex lg:hidden">
              {supportedPlatforms?.apple && (
                <img
                  className="object-fit"
                  src='/carousel-images/apple.svg'
                  alt={'rarity'}
                  width='24px'
                  height='24px'
                />
              )}
              {supportedPlatforms.android && (
                <img
                  className="object-fit"
                  src='/carousel-images/android.svg'
                  alt={'rarity'}
                  width='24px'
                  height='24px'
                />
              )}
              {supportedPlatforms.linux && (
                <img
                  className="object-fit"
                  src='/carousel-images/linux.svg'
                  alt={'rarity'}
                  width='24px'
                  height='24px'
                />
              )}
              {supportedPlatforms.windows && (
                <img
                  className="object-fit"
                  src='/carousel-images/windows.svg'
                  alt={'rarity'}
                  width='24px'
                  height='24px'
                />
              )}
            </div>
          )}
          <a href={externalUrl} target="_blank" rel="noreferrer" className="w-fit">
            <button
              className={`self-start border border-[#ffffff1a] hover:bg-[#191919] font-medium px-[16px] py-[11px] rounded-lg ${learnMoreClassName}`}
            >
              Learn More
            </button>
          </a>
        </div>
        {supportedPlatforms && (
          <div className="z-10 absolute right-0 bottom-0 mb-6 mr-6 w-[112px] h-[42px] bg-[#00000066] rounded-lg justify-center items-center gap-3 hidden lg:flex">
            {supportedPlatforms?.apple && (
              <img
                className="object-fit"
                src='/carousel-images/apple.svg'
                alt={'rarity'}
                width='24px'
                height='24px'
              />
            )}
            {supportedPlatforms.android && (
              <img
                className="object-fit"
                src='/carousel-images/android.svg'
                alt={'rarity'}
                width='24px'
                height='24px'
              />
            )}
            {supportedPlatforms.linux && (
              <img
                className="object-fit"
                src='/carousel-images/linux.svg'
                alt={'rarity'}
                width='24px'
                height='24px'
              />
            )}
            {supportedPlatforms.windows && (
              <img
                className="object-fit"
                src='/carousel-images/windows.svg'
                alt={'rarity'}
                width='24px'
                height='24px'
              />
            )}
          </div>
        )}
        {/* eslint-disable-next-line react/no-unknown-property */}
        <style jsx global>{`
          .carousel-image {
            position: relative;
            overflow: hidden !important;
            background-position: center center !important;
            background-size: cover !important;
            background-repeat: no-repeat !important;
          }
          .carousel-image::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: inherit;
            background-size: cover;
            transform-origin: center;
            transition: transform .4s ease-in-out;
          }
          .carousel-image::after {
              transform: scale(1.05);
          }
          .carousel-image::focus {
            transform: scale(1);
          }
          .carousel-image:hover:after {
            transform: scale(1);
          }
          .carousel-item-description {
            transition: top 0.5s !important;
          }
          .carousel-image:hover .carousel-item-description {
            top: -0px !important;
          }

          @media (max-width: 768px) {
            .carousel-image::after {
              background-position: bottom left !important;
            }
          }
        `}</style>
      </div>
  );
}

const Carousel: FC = () => {
  return (
    <Slider {...SETTINGS}>
      <CustomSlide
        externalUrl="https://graviton.xyz/products/torrent"
        index={1}
        imageUrl="/carousel-images/nft-torrent.jpg"
        title="NFT Torrent"
        description="Safely Mint, Seed, and Store your NFT and get $XYZ royalties for your work using peer-to-peer torrent technology."
        iconUrl='/carousel-images/nft-torrent-icon.svg'
        supportedPlatforms={{apple: true, linux: true, windows: true}}
      />
      <CustomSlide
        externalUrl="https://graviton.xyz/products/display"
        index={2}
        imageUrl="/carousel-images/nft-display.jpg"
        title="NFT Display"
        description="NFT Display app connects to your NFT wallet and allows you to showcase your spiffy NFTs on any monitor or TV screen."
        iconUrl="/carousel-images/nft-display-icon.svg"
        supportedPlatforms={{apple: true, android: true}}
      />
      <CustomSlide
        externalUrl="https://www.nftembed.org/"
        index={3}
        imageUrl="/carousel-images/nft-embed.jpg"
        title="NFT Embed"
        description="Embed an NFT widget with marketplace functionality and wallet connection out of the box."
        iconUrl="/carousel-images/nft-embed-icon.svg"
        titleClassName="text-black"
        descriptionClassName="text-black"
        learnMoreClassName="border-[#0000001a] text-black hover:bg-[#F2F2F2]"
      />
      <CustomSlide
        externalUrl="https://xeenon.xyz/"
        index={4}
        imageUrl="/carousel-images/xeenon.jpg"
        title="Xeenon"
        description="A WEB3 Media Platform. It facilitates collaboration, where communities can interact and engage seamlessly."
        iconUrl="/carousel-images/xeenon-icon.svg"
        supportedPlatforms={{apple: true, android: true}}
      />
      <CustomSlide
        externalUrl="https://metaversia.universe.xyz/"
        index={5}
        imageUrl="/carousel-images/metaversian-republic.jpg"
        title="Metaversian Republic"
        description="Polymorph shooter game. The Polymorphs have landed in Metaversia to take part in a special expedition."
        iconUrl="/carousel-images/metaversian-republic-icon.svg"
        supportedPlatforms={{apple: true, android: true}}
      />
      <CustomSlide
        externalUrl="https://linktr.ee/fetamarket"
        index={6}
        imageUrl="/carousel-images/feta.jpg"
        title="Feta"
        description="The NFT Options Marketplace. Trade for the Top 20 NFT collections and get paid to write your own option contracts."
        iconUrl="/carousel-images/feta-icon.svg"
      />
    </Slider>
  )
}

export default Carousel
