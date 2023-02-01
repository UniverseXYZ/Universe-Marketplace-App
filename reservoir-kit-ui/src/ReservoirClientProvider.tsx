import React, { createContext, FC, ReactNode, useState } from 'react'
import {
  ReservoirClientOptions,
  ReservoirClient,
  createClient,
} from '@reservoir0x/reservoir-sdk'
export interface ReservoirClientProviderProps {
  children: ReactNode
  options: ReservoirClientOptions
}

export const ReservoirClientContext = createContext<ReservoirClient | null>(
  null
)

export const ReservoirClientProvider: FC<ReservoirClientProviderProps> =
  function ({ children, options }: ReservoirClientProviderProps) {
    const [clientContext, _] = useState<ReservoirClient | null>(
      createClient({ ...options, uiVersion: "0.8.9" })
    )

    return (
      <ReservoirClientContext.Provider value={clientContext}>
        {children}
      </ReservoirClientContext.Provider>
    )
  }
