import { styled } from '../../../stitches.config'
import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from 'react'

import {
  Flex,
  Box,
  Text,
  Button,
  Loader,
  Select,
  SelectCurrency,
  ErrorWell,
  CryptoCurrencyIcon,
} from '../../primitives'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal } from '../Modal'
import { ListingData, ListModalRenderer, ListStep } from './ListModalRenderer'
import { ModalSize } from '../Modal'
import { faChevronLeft, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import TokenStats from './TokenStats'
import MarketplaceToggle from './MarketplaceToggle'
import MarketplacePriceInput from './MarketplacePriceInput'
import TokenListingDetails from './TokenListingDetails'
import { useFallbackState, useReservoirClient } from '../../hooks'
import TransactionProgress from '../../modal/TransactionProgress'
import ProgressBar from '../../modal/ProgressBar'
import InfoTooltip from '../InfoTooltip'
import { Marketplace } from '../../hooks/useMarketplaces'
import { Currency } from '../../types/Currency'
import { constants } from 'ethers'

type ListingCallbackData = {
  listings?: ListingData[]
  tokenId?: string
  collectionId?: string
}

type Props = Pick<Parameters<typeof Modal>['0'], 'trigger'> & {
  openState?: [boolean, Dispatch<SetStateAction<boolean>>]
  tokenId?: string
  collectionId?: string
  currencies?: Currency[]
  nativeOnly?: boolean
  normalizeRoyalties?: boolean
  onGoToToken?: () => any
  onListingComplete?: (data: ListingCallbackData) => void
  onListingError?: (error: Error, data: ListingCallbackData) => void
  onClose?: () => void
}

const Image = styled('img', {})
const Span = styled('span', {})
const ContentContainer = styled(Flex, {
  width: '100%',
  flexDirection: 'column',
  '@bp1': {
    flexDirection: 'row',
  },
})

const MainContainer = styled(Flex, {
  flex: 1,
  borderColor: '$borderColor',
  borderTopWidth: 1,
  borderLeftWidth: 0,
  '@bp1': {
    borderTopWidth: 0,
    borderLeftWidth: 1,
  },

  defaultVariants: {
    direction: 'column',
  },
})

export function ListModal({
  openState,
  trigger,
  tokenId,
  collectionId,
  currencies,
  nativeOnly,
  normalizeRoyalties,
  onGoToToken,
  onListingComplete,
  onListingError,
  onClose,
}: Props): ReactElement {
  const [open, setOpen] = useFallbackState(
    openState ? openState[0] : false,
    openState
  )
  const [stepTitle, setStepTitle] = useState('')
  const client = useReservoirClient()
  const [marketplacesToApprove, setMarketplacesToApprove] = useState<
    Marketplace[]
  >([])

  return (
    <ListModalRenderer
      open={open}
      tokenId={tokenId}
      collectionId={collectionId}
      currencies={currencies}
      normalizeRoyalties={normalizeRoyalties}
    >
      {({
        token,
        quantityAvailable,
        collection,
        usdPrice,
        listStep,
        expirationOption,
        expirationOptions,
        marketplaces,
        unapprovedMarketplaces,
        localMarketplace,
        listingData,
        transactionError,
        stepData,
        currencies,
        currency,
        quantity,
        setListStep,
        listToken,
        setMarketPrice,
        setCurrency,
        toggleMarketplace,
        setExpirationOption,
        setQuantity,
      }) => {
        const tokenImage =
          token && token.token?.image
            ? token.token.image
            : (collection?.image as string)

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
          if (stepData) {
            const isNativeOrder =
              stepData.listingData.marketplace.orderbook === 'reservoir'
            const isSeaportOrder =
              stepData.listingData.marketplace.orderKind === 'seaport'
            const marketplaceName =
              isNativeOrder && isSeaportOrder
                ? `${stepData.listingData.marketplace.name} (on Seaport)`
                : stepData.listingData.marketplace.name

            switch (stepData.currentStep.kind) {
              case 'transaction': {
                setStepTitle(
                  `Approve ${marketplaceName} to access item\nin your wallet`
                )
                break
              }
              case 'signature': {
                setStepTitle(
                  `Confirm listing on ${marketplaceName}\nin your wallet`
                )
                break
              }
            }
          }
        }, [stepData])

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
          if (unapprovedMarketplaces.length > 0) {
            const unapprovedNames = unapprovedMarketplaces.reduce(
              (names, marketplace) => {
                if (
                  marketplace.name &&
                  localMarketplace?.orderKind !== marketplace.orderKind
                ) {
                  names.push(marketplace.name)
                }
                return names
              },
              [] as string[]
            )
            setMarketplacesToApprove(
              marketplaces.filter(
                (marketplace) =>
                  marketplace.isSelected &&
                  marketplace.name &&
                  unapprovedNames.includes(marketplace.name)
              )
            )
          } else {
            setMarketplacesToApprove([])
          }
        }, [unapprovedMarketplaces, marketplaces, localMarketplace])

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
          if (listStep === ListStep.Complete && onListingComplete) {
            const data: ListingCallbackData = {
              tokenId: tokenId,
              collectionId: collectionId,
              listings: listingData,
            }
            onListingComplete(data)
          }
        }, [listStep])

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
          if (transactionError && onListingError) {
            const data: ListingCallbackData = {
              tokenId: tokenId,
              collectionId: collectionId,
              listings: listingData,
            }
            onListingError(transactionError, data)
          }
        }, [transactionError])

        const availableMarketplaces = marketplaces.filter((market) => {
          const isNative = market.orderbook === 'reservoir'
          return nativeOnly
            ? market.listingEnabled && isNative
            : market.listingEnabled
        })

        const selectedMarketplaces = availableMarketplaces.filter(
          (marketplace) => marketplace.isSelected
        )
        const quantitySelectionAvailable = selectedMarketplaces.every(
          (marketplace) =>
            marketplace.orderbook === 'reservoir' ||
            marketplace.orderbook === 'opensea'
        )

        return (
          <Modal
            trigger={trigger}
            size={ModalSize.LG}
            title="List Item for sale"
            open={open}
            onOpenChange={(open) => {
              setOpen(open)
            }}
            loading={!token}
          >
            {token && listStep == ListStep.SelectMarkets && (
              <ContentContainer>
                <TokenStats token={token} collection={collection} />

                <MainContainer>
                  <Box css={{ p: '$4', flex: 1 }}>
                    {currencies.length > 1 ? (
                      <Text
                        style="subtitle1"
                        as={Flex}
                        css={{ mb: '$4', gap: '$2', alignItems: 'center' }}
                      >
                        List item in
                        <SelectCurrency
                          trigger={
                            <SelectCurrency.Trigger
                              css={{
                                width: 'auto',
                                p: 0,
                                backgroundColor: 'transparent',
                              }}
                            >
                              <SelectCurrency.Value asChild>
                                <Flex align="center">
                                  <CryptoCurrencyIcon
                                    address={currency.contract}
                                    css={{ height: 18 }}
                                  />
                                  <Text
                                    style="subtitle1"
                                    color="subtle"
                                    css={{ ml: '$1' }}
                                  >
                                    {currency.symbol}
                                  </Text>
                                  <SelectCurrency.DownIcon style={{ marginLeft: 6 }} />
                                </Flex>
                              </SelectCurrency.Value>
                            </SelectCurrency.Trigger>
                          }
                          value={currency.contract}
                          onValueChange={(value: string) => {
                            const option = currencies.find(
                              (option) => option.contract == value
                            )
                            if (option) {
                              setCurrency(option)
                            }
                          }}
                        >
                          {currencies.map((option) => (
                            <SelectCurrency.Item
                              key={option.contract}
                              value={option.contract}
                            >
                              <SelectCurrency.ItemText>
                                <Flex align="center" css={{ gap: '$1' }}>
                                  <CryptoCurrencyIcon
                                    address={option.contract}
                                    css={{ height: 18 }}
                                  />
                                  {option.symbol}
                                </Flex>
                              </SelectCurrency.ItemText>
                            </SelectCurrency.Item>
                          ))}
                        </SelectCurrency>
                      </Text>
                    ) : (
                      <></>
                      // <Text style="subtitle1" as="h3" css={{ mb: '$4' }}>
                      //   {availableMarketplaces.length > 1
                      //     ? 'Select Marketplaces'
                      //     : 'Available Marketplace'}
                      // </Text>
                    )}

                      {/* <Text style="subtitle2" as="p" color="subtle">
                        Default
                      </Text> */}
                    <Flex align="center" css={{ mb: '$4', mt: '$2' }}>
                      <Box css={{ mr: '$2' }}>
                        <img
                          alt=''
                          src={localMarketplace?.imageUrl || ''}
                          style={{
                            height: 32,
                            width: 32,
                            borderRadius: 4,
                            visibility: localMarketplace?.imageUrl
                              ? 'visible'
                              : 'hidden',
                          }}
                        />
                      </Box>
                      <Box css={{ mr: '$2', flex: 1 }}>
                        <Text style="body3">{localMarketplace?.name}</Text>
                        {/* <Flex css={{ alignItems: 'center', gap: 8 }}>
                          <Text style="body3" color="subtle" as="div">
                            on Reservoir
                          </Text>
                          <InfoTooltip
                            side="bottom"
                            width={200}
                            content={
                              'Listings made on this marketplace will be distributed across the reservoir ecosystem'
                            }
                          />
                        </Flex> */}
                      </Box>
                      <Text style="subtitle2" color="subtle" css={{ mr: '$2' }}>
                        Marketplace fee:{' '}
                        {((localMarketplace?.fee?.bps || 0) / 10000) * 100}%
                      </Text>
                    </Flex>
                    {availableMarketplaces.length > 1 && (
                      <Text
                        style="subtitle2"
                        color="subtle"
                        as="p"
                        css={{ mb: '$2' }}
                      >
                        Select other marketplaces to list on
                      </Text>
                    )}
                    {availableMarketplaces
                      .filter(
                        (marketplace) => marketplace.orderbook !== 'reservoir'
                      )
                      .map((marketplace) => (
                        <Box key={marketplace.name} css={{ mb: '$3' }}>
                          <MarketplaceToggle
                            marketplace={marketplace}
                            onSelection={() => {
                              toggleMarketplace(marketplace)
                            }}
                          />
                        </Box>
                      ))}
                  </Box>
                  <Box css={{ p: '$4', width: '100%' }}>
                    {marketplacesToApprove.length > 0 && (
                      <Text
                        color="accent"
                        style="subtitle2"
                        css={{
                          my: 10,
                          width: '100%',
                          textAlign: 'center',
                          display: 'block',
                        }}
                      >
                        {`Additional Gas fee required to approve listing (${marketplacesToApprove
                          .map((marketplace) => marketplace.name)
                          .join(', ')})`}
                      </Text>
                    )}
                    <Button
                      onClick={() => setListStep(ListStep.SetPrice)}
                      css={{ width: '100%', backgroundImage: 'linear-gradient(to right, #BCEB00, #00EAEA)', color: "#000000", borderRadius: '8px'}}
                      className="setPriceButton"
                    >
                      Set your price
                    </Button>
                    {/* eslint-disable-next-line react/no-unknown-property */}
                    <style jsx global>{`
                      .setPriceButton:hover {
                        background-image: linear-gradient(to right, #bceb00cc, #00eaeacc);
                        transition-duration: 100s;
                      }
                    `}</style>
                  </Box>
                </MainContainer>
              </ContentContainer>
            )}
            {token && listStep == ListStep.SetPrice && (
              <ContentContainer>
                <TokenStats token={token} collection={collection} />

                <MainContainer>
                  <Box css={{ p: '$4', flex: 1 }}>
                    <Flex align="center" css={{ mb: '$4' }}>
                      <Button
                        color="ghost"
                        size="none"
                        css={{ mr: '$2', color: '$neutralText' }}
                        onClick={() => setListStep(ListStep.SelectMarkets)}
                      >
                        <FontAwesomeIcon
                          icon={faChevronLeft}
                          width={16}
                          height={16}
                        />
                      </Button>
                      <Text style="subtitle1" as="h3">
                        Set Your Price
                      </Text>
                    </Flex>
                    {quantityAvailable > 1 && quantitySelectionAvailable && (
                      <>
                        <Box css={{ mb: '$2' }}>
                          <Text
                            as="div"
                            css={{ mb: '$2' }}
                            style="subtitle2"
                            color="subtle"
                          >
                            Quantity
                          </Text>
                          <Select
                            value={`${quantity}`}
                            onValueChange={(value: string) => {
                              setQuantity(Number(value))
                            }}
                          >
                            {[...Array(quantityAvailable)].map((_a, i) => (
                              <Select.Item key={i} value={`${i + 1}`}>
                                <Select.ItemText>{i + 1}</Select.ItemText>
                              </Select.Item>
                            ))}
                          </Select>
                        </Box>
                        <Text
                          style="body2"
                          css={{ mb: 24, display: 'inline-block' }}
                        >
                          {quantityAvailable} items available
                        </Text>
                      </>
                    )}
                    <Flex css={{ mb: '$2' }} justify="between">
                      <Text style="subtitle2" color="subtle" as="p">
                        {quantityAvailable > 1 && quantitySelectionAvailable
                          ? 'Unit Price'
                          : 'Price'}
                      </Text>
                      <Flex css={{ alignItems: 'center', gap: 8 }}>
                        <Text style="subtitle2" color="subtle" as="p">
                          {quantityAvailable > 1 && quantitySelectionAvailable
                            ? 'Total Profit'
                            : 'Profit'}
                        </Text>
                        <InfoTooltip
                          side="left"
                          width={200}
                          content={`How much ${currency.symbol} you will receive after marketplace fees and creator royalties are subtracted.`}
                        />
                      </Flex>
                    </Flex>

                    {selectedMarketplaces.map((marketplace) => (
                      <Box key={marketplace.name} css={{ mb: '$3' }}>
                        <MarketplacePriceInput
                          marketplace={marketplace}
                          collection={collection}
                          currency={currency}
                          usdPrice={usdPrice}
                          quantity={quantity}
                          onChange={(e) => {
                            setMarketPrice(e.target.value, marketplace)
                          }}
                          onBlur={() => {
                            if (marketplace.price === '') {
                              setMarketPrice(0, marketplace)
                            }
                          }}
                        />
                        {collection &&
                          collection?.floorAsk?.price?.amount?.native !==
                            undefined &&
                          marketplace.truePrice !== '' &&
                          marketplace.truePrice !== null &&
                          currency.contract === constants.AddressZero &&
                          marketplace.truePrice <
                            collection?.floorAsk?.price.amount.native && (
                            <Box>
                              <Text style="body2" color="error">
                                Price is{' '}
                                {Math.round(
                                  ((collection.floorAsk.price.amount.native -
                                    +marketplace.truePrice) /
                                    ((collection.floorAsk.price.amount.native +
                                      +marketplace.truePrice) /
                                      2)) *
                                    100 *
                                    1000
                                ) / 1000}
                                % below the floor
                              </Text>
                            </Box>
                          )}
                      </Box>
                    ))}
                    <Box css={{ mb: '$3', mt: '$4' }}>
                      <Text
                        as="div"
                        css={{ mb: '$2' }}
                        style="subtitle2"
                        color="subtle"
                      >
                        Expiration Date
                      </Text>
                      <Select
                        value={expirationOption?.text || ''}
                        onValueChange={(value: string) => {
                          const option = expirationOptions.find(
                            (option) => option.value == value
                          )
                          if (option) {
                            setExpirationOption(option)
                          }
                        }}
                      >
                        {expirationOptions.map((option) => (
                          <Select.Item key={option.text} value={option.value}>
                            <Select.ItemText>{option.text}</Select.ItemText>
                          </Select.Item>
                        ))}
                      </Select>
                    </Box>
                  </Box>
                  <Box css={{ p: '$4', width: '100%' }}>
                    <Button
                      disabled={selectedMarketplaces.some(
                        (marketplace) =>
                          marketplace.price === '' || marketplace.price == 0
                      )}
                      onClick={listToken}
                      className="listForSaleButton"
                      css={{ width: '100%', backgroundImage: 'linear-gradient(to right, #BCEB00, #00EAEA)', color: "#000000", borderRadius: '8px' }}
                    >
                      List for sale
                    </Button>
                    {/* eslint-disable-next-line react/no-unknown-property */}
                    <style jsx global>{`
                      .listForSaleButton:hover {
                        background-image: linear-gradient(to right, #bceb00cc, #00eaeacc);
                        transition-duration: 100s;
                      }
                    `}</style>
                  </Box>
                </MainContainer>
              </ContentContainer>
            )}
            {token && listStep == ListStep.ListItem && (
              <ContentContainer>
                <TokenListingDetails
                  token={token}
                  collection={collection}
                  listingData={listingData}
                  currency={currency}
                />
                <MainContainer css={{ p: '$4' }}>
                  <ProgressBar
                    value={stepData?.stepProgress || 0}
                    max={stepData?.totalSteps || 0}
                  />
                  {transactionError && <ErrorWell css={{ mt: 24 }} />}
                  {stepData && (
                    <>
                      <Text
                        css={{ textAlign: 'center', mt: 48, mb: 28 }}
                        style="subtitle1"
                      >
                        {stepTitle}
                      </Text>
                      <TransactionProgress
                        justify="center"
                        fromImg={tokenImage}
                        toImg={stepData?.listingData.marketplace.imageUrl || ''}
                      />
                      <Text
                        css={{
                          textAlign: 'center',
                          mt: 24,
                          maxWidth: 395,
                          mx: 'auto',
                          mb: '$4',
                        }}
                        style="body3"
                        color="subtle"
                      >
                        {stepData?.currentStep.description}
                      </Text>
                    </>
                  )}
                  {!stepData && (
                    <Flex
                      css={{ height: '100%' }}
                      justify="center"
                      align="center"
                    >
                      <Loader />
                    </Flex>
                  )}
                  {!transactionError && (
                    <Button css={{ width: '100%', mt: 'auto' }} disabled={true}>
                      <Loader />
                      Waiting for Approval
                    </Button>
                  )}
                  {transactionError && (
                    <Flex css={{ mt: 'auto', gap: 10 }}>
                      <Button
                        color="secondary"
                        css={{ flex: 1 }}
                        onClick={() => setListStep(ListStep.SetPrice)}
                      >
                        Edit Listing
                      </Button>
                      <Button className='retryButton' css={{ flex: 1, backgroundImage: 'linear-gradient(to right, #BCEB00, #00EAEA)', color: "#000000", borderRadius: '8px' }} onClick={() => listToken()}>
                        Retry
                      </Button>
                      {/* eslint-disable-next-line react/no-unknown-property */}
                      <style jsx global>{`
                        .retryButton:hover {
                          background-image: linear-gradient(to right, #bceb00cc, #00eaeacc);
                          transition-duration: 100s;
                        }
                      `}</style>
                    </Flex>
                  )}
                </MainContainer>
              </ContentContainer>
            )}
            {token && listStep == ListStep.Complete && (
              <ContentContainer>
                <TokenListingDetails
                  token={token}
                  collection={collection}
                  listingData={listingData}
                  currency={currency}
                />
                <MainContainer css={{ p: '$4' }}>
                  <ProgressBar
                    value={stepData?.totalSteps || 0}
                    max={stepData?.totalSteps || 0}
                  />
                  <Flex
                    align="center"
                    justify="center"
                    direction="column"
                    css={{ flex: 1, textAlign: 'center', py: '$5' }}
                  >
                    <Box css={{ color: '$successAccent', mb: 24 }}>
                      <FontAwesomeIcon icon={faCheckCircle} size="3x" />
                    </Box>
                    <Text style="h5" css={{ mb: '$2' }} as="h5">
                      Your item has been listed!
                    </Text>
                    <Text
                      style="body3"
                      color="subtle"
                      as="p"
                      css={{ mb: 24, maxWidth: 300, overflow: 'hidden' }}
                    >
                      <Text color="accent" ellipsify style="body3">
                        {token?.token?.name
                          ? token?.token?.name
                          : `#${token?.token?.tokenId}`}
                      </Text>{' '}
                      from{' '}
                      <Span css={{ color: '$accentText' }}>
                        {token?.token?.collection?.name}
                      </Span>{' '}
                      has been listed for sale
                    </Text>
                  </Flex>

                  <Flex
                    css={{
                      flexDirection: 'column',
                      gap: '$3',
                      '@bp1': {
                        flexDirection: 'row',
                      },
                    }}
                  >
                    {!!onGoToToken ? (
                      <>
                        <Button
                          onClick={() => {
                            setOpen(false)
                            if (onClose) {
                              onClose()
                            }
                          }}
                          css={{ flex: 1, backgroundImage: 'linear-gradient(to right, #BCEB00, #00EAEA)', color: "#000000", borderRadius: '8px' } }
                          color="secondary"
                        >
                          Close
                        </Button>
                        <Button
                          style={{ flex: 1 }}
                          color="primary"
                          onClick={() => {
                            onGoToToken()
                            if (onClose) {
                              onClose()
                            }
                          }}
                        >
                          Go to Token
                        </Button>
                      </>
                    ) : (
                      <Button
                        onClick={() => {
                          setOpen(false)
                          if (onClose) {
                            onClose()
                          }
                        }}
                        style={{ flex: 1, backgroundImage: 'linear-gradient(to right, #BCEB00, #00EAEA)', color: "#000000", borderRadius: '8px' } }
                        color="primary"
                      >
                        Close
                      </Button>
                    )}
                  </Flex>
                </MainContainer>
              </ContentContainer>
            )}
          </Modal>
        )
      }}
    </ListModalRenderer>
  )
}

ListModal.Custom = ListModalRenderer
