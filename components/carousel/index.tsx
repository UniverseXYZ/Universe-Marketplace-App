import Slider from "react-slick";
import { FC } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SETTINGS = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots",
    appendDots: (dots: any) => {
      return (
          <div
            style={{
              // bottom: '-35px',
            }}
          >
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
            `}</style>
          </div>
      )
    }
  };

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
  }

const CustomSlide: FC<SlideProps> = ({index, externalUrl, imageUrl, title, description, iconUrl , titleClassName, descriptionClassName, learnMoreClassName}) => {
  return (
    <a href={externalUrl} target="_blank" rel="noreferrer">
      <div
        style={{
          background: `url(${imageUrl}) center/cover`
        }}
        className="h-[400px] rounded-3xl carousel-image relative"
      >
      {/* Description  */}
      <div className="text-white px-6 h-full flex flex-col justify-end pb-6 carousel-item-description absolute top-[75px]">
        <img
          className="object-fit mb-[24px]"
          src={iconUrl}
          alt={'rarity'}
          width='48px'
          height='48px'
        />
        <p className={`font-bold text-[32px] leading-[40px] ${titleClassName}`}>{title}</p>
        <p className={`text-[16px] leading-[24px] max-w-[480px] mb-5 ${descriptionClassName}`}>{description}</p>
        <button className={`self-start border border-[#ffffff1a] px-[16px] py-[11px] rounded-lg ${learnMoreClassName}`}
        >Learn More</button>
      </div>

      </div>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx global>{`
        a .carousel-image {
          background-size: 105% !important;
          transition:  background-size 0.25s !important;
          overflow: hidden !important;
        }
        a .carousel-image:hover {
          background-size: 100% !important;
        }

        .carousel-item-description {
          transition: top 0.5s !important;
        }
        a .carousel-image:hover .carousel-item-description {
          top: -0px !important;
        }
      `}</style>
    </a>
  );
}

const Carousel: FC = () => {
  return (
    <div>
      <Slider {...SETTINGS}>
        <CustomSlide
          externalUrl="https://graviton.xyz/products/torrent"
          index={1}
          imageUrl="/carousel-images/nft-torrent.jpg"
          title="NFT Torrent"
          description="Safely Mint, Seed, and Store your NFT and get $XYZ royalties for your work using peer-to-peer torrent technology."
          iconUrl='/carousel-images/nft-torrent-icon.svg'
        />
        <CustomSlide
          externalUrl="https://graviton.xyz/products/display"
          index={2}
          imageUrl="/carousel-images/nft-display.jpg"
          title="NFT Display"
          description="NFT Display app connects to your NFT wallet and allows you to showcase your spiffy NFTs on any monitor or TV screen."
          iconUrl="/carousel-images/nft-display-icon.svg"
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
          learnMoreClassName="border-[#0000001a] text-black"
        />
        <CustomSlide
          externalUrl="https://xeenon.xyz/"
          index={4}
          imageUrl="/carousel-images/xeenon.jpg"
          title="Xeenon"
          description="A WEB3 Media Platform. It facilitates collaboration, where communities can interact and engage seamlessly."
          iconUrl="/carousel-images/xeenon-icon.svg"
        />
        <CustomSlide
          externalUrl="https://metaversia.universe.xyz/"
          index={5}
          imageUrl="/carousel-images/metaversian-republic.jpg"
          title="Metaversian Republic"
          description="Polymorph shooter game. The Polymorphs have landed in Metaversia to take part in a special expedition."
          iconUrl="/carousel-images/metaversian-republic-icon.svg"
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
    </div>
  )
}

export default Carousel
