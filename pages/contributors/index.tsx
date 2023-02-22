import Layout from 'components/Layout'
import { NextPage } from 'next'
import { useState } from 'react'

import TimKang from '../../public/contributors/Tim-Kang.png'
import TylerWard from '../../public/contributors/Tyler-Ward.png'
import TroyMurray from '../../public/contributors/Troy-Murray.png'
import MiladMostavi from '../../public/contributors/Milad-Mostavi.png'
import DragosRizescu from '../../public/contributors/Dragos-Rizescu.png'
import MarkWard from '../../public/contributors/Mark-Ward.png'
import RyanShtirmer from '../../public/contributors/Ryan-Shtirmer.png'
import StanislavTrenev from '../../public/contributors/Stanislav-Trenev.png'
import PavloBendus from '../../public/contributors/Pavlo-Bendus.png'
import IliaAndreev from '../../public/contributors/Ilia-Andreev.png'
import ViacheslavRybak from '../../public/contributors/Viacheslav-Rybak.png'
import AndonMitev from '../../public/contributors/Andon-Mitev.png'
import DmytroDmytrychenko from '../../public/contributors/Dmytro-Dmytrychenko.png'
import DimaDutka from '../../public/contributors/Dima-Dutka.png'
import AlgernonHolmes from '../../public/contributors/Alex-Holmes.png'
import NicholasWard from '../../public/contributors/Nicholas-Ward.png'
import RockoMoran from '../../public/contributors/Rocko-Moran.png'
import MikeProtsenko from '../../public/contributors/Mike-Protsenko.png'
import GeorgeSpasov from '../../public/contributors/George-Spasov.png'
import ZhivkoTodorov from '../../public/contributors/Zhivko-Todorov.png'
import KateHerbert from '../../public/contributors/Kate-Herbert.png'
import CezarParaschiv from '../../public/contributors/Cezar-Paraschiv.png'
import AlexMissivrenko from '../../public/contributors/Alex-Missivrenko.png'
import MariaMosiy from '../../public/contributors/Maria-Mosiy.png'
import IvanMykolaiv from '../../public/contributors/Ivan-Mykolaiv.png'
import VictoriaDutka from '../../public/contributors/Victoria-Dutka.png'
import SergePiven from '../../public/contributors/Serge-Piven.png'
import PavloBabenko from '../../public/contributors/Pavlo-Babenko.png'
import AsenAngelov from '../../public/contributors/Asen-Angelov.png'
import SteriosTaskudis from '../../public/contributors/Sterios-Taskudis.png'
import ViktorTodorov from '../../public/contributors/Viktor-Todorov.png'
import RaduGurau from '../../public/contributors/Radu-Gurau.png'
import ValeriiaGorenich from '../../public/contributors/Valeriia-Gorenich.png'
import AzamZafar from '../../public/contributors/Azam-Zafar.png'
import Justin3LAU from '../../public/contributors/Justin-3LAU.png'
import DillonFrancis from '../../public/contributors/Dillon-Francis.png'
import AndréAnjos from '../../public/contributors/André-Anjos.png'
import WesleyPentz from '../../public/contributors/Wesley-Pentz.png'
import GuyLawrence from '../../public/contributors/Guy-Lawrence.png'
import HowardLawrence from '../../public/contributors/Howard-Lawrence.png'
import AaronMcDonald from '../../public/contributors/Aaron-McDonald.png'
import KainWarwick from '../../public/contributors/Kain-Warwick.png'
import StaniKulechov from '../../public/contributors/Stani-Kulechov.png'
import SantiagoRSantos from '../../public/contributors/Santiago-R-Santos.png'
import MattHunter from '../../public/contributors/Matt-Hunter.png'
import AkinSawyerr from '../../public/contributors/Akin-Sawyer.png'
import QuinnAbraham from '../../public/contributors/Quinn-Abraham.png'
import BillyLuedtke from '../../public/contributors/Billy-Luedtke.png'
import TomShaughnessy from '../../public/contributors/Tom-Shaughnessy.png'
import VitalikCherniak from '../../public/contributors/Vitalik-Cherniak.png'
import AdamDaugelli from '../../public/contributors/Adam-Daugelli.png'
import ChainLinkGod from '../../public/contributors/ChainLinkGod.png'
import NoahJessop from '../../public/contributors/Noah-Jessop.png'
import JamesTodaro from '../../public/contributors/James-Todaro.png'
import RobLeshner from '../../public/contributors/Rob-Leshner.png'
import BenLakoff from '../../public/contributors/Ben-Lakoff.png'
import BogdanGheorghe from '../../public/contributors/Bogdan-Gheorghe.png'
import JordanMomtazi from '../../public/contributors/Jordan-Momtazi.png'
import IgorLilic from '../../public/contributors/Igor-Lilic.png'
import RyanZurrer from '../../public/contributors/Ryan-Zurrer.png'
import EJRodgers from '../../public/contributors/EJ-Rodgers.png'
import KeeganSelby from '../../public/contributors/Keegan-Selby.png'
import AlokVasudev from '../../public/contributors/Alok-Vasudev.png'
import KeiranWarwick from '../../public/contributors/Keiran-Warwick.png'
import KevinXu from '../../public/contributors/Kevin-Xu.png'
import KevinRose from '../../public/contributors/Kevin-Rose.png'
import AaronWright from '../../public/contributors/Aaron-Wright.png'
import ChandlerSong from '../../public/contributors/Chandler-Song.png'
import VanceSpencer from '../../public/contributors/Vance-Spencer.png'
import DeFiDad from '../../public/contributors/DeFi-Dad.png'
import InternetPaul from '../../public/contributors/Internet-Paul.png'
import MiguelNabais from '../../public/contributors/Miguel-Nabais.png'
import MarcWeinstein from '../../public/contributors/Marc-Weinstein.png'
import LesBorsai from '../../public/contributors/Les-Borsai.png'
import ArtiaMoghbel from '../../public/contributors/Artia-Moghbel.png'
import HomerShillson from '../../public/contributors/Homer-Shillson.png'
import AntonBukov from '../../public/contributors/Anton-Bukov.png'
import RahillaZafar from '../../public/contributors/Rahilla-Zafar.png'
import TekinSalimi from '../../public/contributors/Tekin-Salimi.png'
import OlafCarsonWee from '../../public/contributors/Olaf-Carson-Wee.png'
import WhaleShark from '../../public/contributors/WhaleShark.png'
import Gmoney from '../../public/contributors/Gmoney.png'
import RobbieFerguson from '../../public/contributors/Robbie-Ferguson.png'
import AndréNabais from '../../public/contributors/André-Nabais.png'
import LukeLombe from '../../public/contributors/Luke-Lombe.png'
import HarrisonHines from '../../public/contributors/Harrison-Hines.png'
import ScottPlowman from '../../public/contributors/Scott-Plowman.png'
import Masonry from 'react-masonry-css'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

const Contributors: NextPage = () => {
  const [contributors, setContributors] = useState([
    {
      id: 1,
      name: 'Tim Kang',
      avatar: TimKang,
      loaded: false,
    },
    {
      id: 2,
      name: 'Tyler Ward',
      avatar: TylerWard,
      loaded: false,
    },
    {
      id: 3,
      name: 'Troy Murray',
      avatar: TroyMurray,
      loaded: false,
    },
    {
      id: 4,
      name: 'Milad Mostavi',
      avatar: MiladMostavi,
      loaded: false,
    },
    {
      id: 5,
      name: 'Dragos Rizescu',
      avatar: DragosRizescu,
      loaded: false,
    },
    {
      id: 6,
      name: 'Mark Ward',
      avatar: MarkWard,
      loaded: false,
    },
    {
      id: 7,
      name: 'Ryan Shtirmer',
      avatar: RyanShtirmer,
      loaded: false,
    },
    {
      id: 8,
      name: 'Stanislav Trenev',
      avatar: StanislavTrenev,
      loaded: false,
    },
    {
      id: 9,
      name: 'Pavlo Bendus',
      avatar: PavloBendus,
      loaded: false,
    },
    {
      id: 10,
      name: 'Ilia Andreev',
      avatar: IliaAndreev,
      loaded: false,
    },
    {
      id: 11,
      name: 'Viacheslav Rybak',
      avatar: ViacheslavRybak,
      loaded: false,
    },
    {
      id: 12,
      name: 'Andon Mitev',
      avatar: AndonMitev,
      loaded: false,
    },
    {
      id: 13,
      name: 'Dmytro Dmytrychenko',
      avatar: DmytroDmytrychenko,
      loaded: false,
    },
    {
      id: 14,
      name: 'Dima Dutka',
      avatar: DimaDutka,
      loaded: false,
    },
    {
      id: 15,
      name: 'Algernon Holmes',
      avatar: AlgernonHolmes,
      loaded: false,
    },
    {
      id: 16,
      name: 'Nicholas Ward',
      avatar: NicholasWard,
      loaded: false,
    },
    {
      id: 17,
      name: 'Rocko Moran',
      avatar: RockoMoran,
      loaded: false,
    },
    {
      id: 18,
      name: 'Mike Protsenko',
      avatar: MikeProtsenko,
      loaded: false,
    },
    {
      id: 19,
      name: 'George Spasov',
      avatar: GeorgeSpasov,
      loaded: false,
    },
    {
      id: 20,
      name: 'Zhivko Todorov',
      avatar: ZhivkoTodorov,
      loaded: false,
    },
    {
      id: 21,
      name: 'Kate Herbert',
      avatar: KateHerbert,
      loaded: false,
    },
    {
      id: 22,
      name: 'Cezar Paraschiv',
      avatar: CezarParaschiv,
      loaded: false,
    },
    {
      id: 23,
      name: 'Alex Missivrenko',
      avatar: AlexMissivrenko,
      loaded: false,
    },
    {
      id: 24,
      name: 'Maria Mosiy',
      avatar: MariaMosiy,
      loaded: false,
    },
    {
      id: 25,
      name: 'Ivan Mykolaiv',
      avatar: IvanMykolaiv,
      loaded: false,
    },
    {
      id: 26,
      name: 'Victoria Dutka',
      avatar: VictoriaDutka,
      loaded: false,
    },
    {
      id: 27,
      name: 'Serge Piven',
      avatar: SergePiven,
      loaded: false,
    },
    {
      id: 28,
      name: 'Pavlo Babenko',
      avatar: PavloBabenko,
      loaded: false,
    },
    {
      id: 29,
      name: 'Asen Angelov',
      avatar: AsenAngelov,
      loaded: false,
    },
    {
      id: 30,
      name: 'Sterios Taskudis',
      avatar: SteriosTaskudis,
      loaded: false,
    },
    {
      id: 31,
      name: 'Viktor Todorov',
      avatar: ViktorTodorov,
      loaded: false,
    },
    {
      id: 32,
      name: 'Radu Gurău',
      avatar: RaduGurau,
      loaded: false,
    },
    {
      id: 33,
      name: 'Valeriia Gorenich',
      avatar: ValeriiaGorenich,
      loaded: false,
    },
    {
      id: 34,
      name: 'Azam Zafar',
      avatar: AzamZafar,
      loaded: false,
    },
    {
      id: 35,
      name: 'Justin 3LAU',
      avatar: Justin3LAU,
      loaded: false,
    },
    {
      id: 36,
      name: 'Dillon Francis',
      avatar: DillonFrancis,
      loaded: false,
    },
    {
      id: 37,
      name: 'André Anjos - RAC',
      avatar: AndréAnjos,
      loaded: false,
    },
    {
      id: 38,
      name: 'Wesley Pentz - Diplo',
      avatar: WesleyPentz,
      loaded: false,
    },
    {
      id: 39,
      name: 'Guy Lawrence',
      avatar: GuyLawrence,
      loaded: false,
    },
    {
      id: 40,
      name: 'Howard Lawrence',
      avatar: HowardLawrence,
      loaded: false,
    },
    {
      id: 41,
      name: 'Aaron McDonald',
      avatar: AaronMcDonald,
      loaded: false,
    },
    {
      id: 42,
      name: 'Kain Warwick',
      avatar: KainWarwick,
      loaded: false,
    },
    {
      id: 43,
      name: 'Stani Kulechov',
      avatar: StaniKulechov,
      loaded: false,
    },
    {
      id: 44,
      name: 'Santiago R Santos',
      avatar: SantiagoRSantos,
      loaded: false,
    },
    {
      id: 45,
      name: 'Matt Hunter',
      avatar: MattHunter,
      loaded: false,
    },
    {
      id: 46,
      name: 'Rob Leshner',
      avatar: RobLeshner,
      loaded: false,
    },
    {
      id: 47,
      name: 'Quinn Abraham',
      avatar: QuinnAbraham,
      loaded: false,
    },
    {
      id: 48,
      name: 'Billy Luedtke',
      avatar: BillyLuedtke,
      loaded: false,
    },
    {
      id: 49,
      name: 'Tom Shaughnessy',
      avatar: TomShaughnessy,
      loaded: false,
    },
    {
      id: 50,
      name: 'Vitalik Cherniak',
      avatar: VitalikCherniak,
      loaded: false,
    },
    {
      id: 51,
      name: 'Adam D’augelli',
      avatar: AdamDaugelli,
      loaded: false,
    },
    {
      id: 52,
      name: 'ChainLinkGod',
      avatar: ChainLinkGod,
      loaded: false,
    },
    {
      id: 53,
      name: 'Noah Jessop',
      avatar: NoahJessop,
      loaded: false,
    },
    {
      id: 54,
      name: 'Dr. James Todaro',
      avatar: JamesTodaro,
      loaded: false,
    },
    {
      id: 55,
      name: 'Akin Sawyerr',
      avatar: AkinSawyerr,
      loaded: false,
    },
    {
      id: 56,
      name: 'Ben Lakoff',
      avatar: BenLakoff,
      loaded: false,
    },
    {
      id: 57,
      name: 'Bogdan Gheorghe',
      avatar: BogdanGheorghe,
      loaded: false,
    },
    {
      id: 58,
      name: 'Jordan Momtazi',
      avatar: JordanMomtazi,
      loaded: false,
    },
    {
      id: 59,
      name: 'Igor Lilic',
      avatar: IgorLilic,
      loaded: false,
    },
    {
      id: 60,
      name: 'Ryan Zurrer',
      avatar: RyanZurrer,
      loaded: false,
    },
    {
      id: 61,
      name: 'EJ Rodgers',
      avatar: EJRodgers,
      loaded: false,
    },
    {
      id: 62,
      name: 'Keegan Selby',
      avatar: KeeganSelby,
      loaded: false,
    },
    {
      id: 63,
      name: 'Alok Vasudev',
      avatar: AlokVasudev,
      loaded: false,
    },
    {
      id: 64,
      name: 'Keiran Warwick',
      avatar: KeiranWarwick,
      loaded: false,
    },
    {
      id: 65,
      name: 'Fully Allocated',
      avatar: KevinXu,
      loaded: false,
    },
    {
      id: 66,
      name: 'Kevin Rose',
      avatar: KevinRose,
      loaded: false,
    },
    {
      id: 67,
      name: 'Aaron Wright',
      avatar: AaronWright,
      loaded: false,
    },
    {
      id: 68,
      name: 'Chandler Song',
      avatar: ChandlerSong,
      loaded: false,
    },
    {
      id: 69,
      name: 'Vance Spencer',
      avatar: VanceSpencer,
      loaded: false,
    },
    {
      id: 70,
      name: 'DeFi Dad',
      avatar: DeFiDad,
      loaded: false,
    },
    {
      id: 71,
      name: 'Internet Paul',
      avatar: InternetPaul,
      loaded: false,
    },
    {
      id: 72,
      name: 'Miguel Nabais',
      avatar: MiguelNabais,
      loaded: false,
    },
    {
      id: 73,
      name: 'Marc Weinstein',
      avatar: MarcWeinstein,
      loaded: false,
    },
    {
      id: 74,
      name: 'Les Borsai',
      avatar: LesBorsai,
      loaded: false,
    },
    {
      id: 75,
      name: 'Artia Moghbel - Dfinity',
      avatar: ArtiaMoghbel,
      loaded: false,
    },
    {
      id: 76,
      name: 'Homer Shillson',
      avatar: HomerShillson,
      loaded: false,
    },
    {
      id: 77,
      name: 'Anton Bukov',
      avatar: AntonBukov,
      loaded: false,
    },
    {
      id: 78,
      name: 'Rahilla Zafar',
      avatar: RahillaZafar,
      loaded: false,
    },
    {
      id: 79,
      name: 'Tekin Salimi',
      avatar: TekinSalimi,
      loaded: false,
    },
    {
      id: 80,
      name: 'Olaf Carson-Wee',
      avatar: OlafCarsonWee,
      loaded: false,
    },
    {
      id: 81,
      name: 'WhaleShark',
      avatar: WhaleShark,
      loaded: false,
    },
    {
      id: 82,
      name: 'Gmoney',
      avatar: Gmoney,
      loaded: false,
    },
    {
      id: 83,
      name: 'Robbie Ferguson',
      avatar: RobbieFerguson,
      loaded: false,
    },
    {
      id: 84,
      name: 'André Nabais',
      avatar: AndréNabais,
      loaded: false,
    },
    {
      id: 85,
      name: 'Luke Lombe',
      avatar: LukeLombe,
      loaded: false,
    },
    {
      id: 86,
      name: 'Harrison Hines',
      avatar: HarrisonHines,
      loaded: false,
    },
    {
      id: 87,
      name: 'Scott Plowman',
      avatar: ScottPlowman,
      loaded: false,
    },
  ])

  const META_DESCRIPTION = process.env.NEXT_PUBLIC_META_DESCRIPTION
  const META_IMAGE = process.env.NEXT_PUBLIC_META_OG_IMAGE

  return (
    <Layout navbar={{}}>
      <NextSeo
        title="Contributors | UniverseXYZ"
        description={META_DESCRIPTION}
        openGraph={{
          title: 'Contributors | UniverseXYZ',
          description: META_DESCRIPTION,
          images: [
            {
              url: META_IMAGE || 'no image found',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
          ],
        }}
      />
      <div className="item-center col-span-full mx-auto flex w-screen max-w-[1500px] flex-col px-4 py-8 text-center sm:px-12 md:py-16">
        <h1 className="mb-5 text-[36px] leading-[48px] font-semibold font-sharpgrotesk">Meet the Universe Crew</h1>
        <p className="mb-[64px] text-[24px] leading-[48px] text-[#00000099]">
          Our team is full of creators, artists and DeFi minds from all over the
          world with a shared goal in mind, empower artists.
        </p>

        <Masonry
          key="contributorsGridMasonry"
          breakpointCols={{
            default: 6,
            1900: 6,
            1536: 5,
            1280: 4,
            1024: 3,
            768: 2,
            640: 2,
            500: 1,
          }}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {contributors?.map((contributor, index) => {
            return (
              <div key={index} className="min-h-[262px] mb-11 mt-3 ">
                <Image
                  src={contributor.avatar}
                  alt={contributor.name}
                  title={contributor.name}
                  key={contributor.id}
                />
                <h2
                  className="text-left font-semibold font-sharpgrotesk mt-[12px]"
                  style={{ lineHeight: '130%' }}
                >
                  {contributor.name}
                </h2>
              </div>
            )
          })}
        </Masonry>
      </div>
    </Layout>
  )
}

export default Contributors
