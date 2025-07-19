import { create } from 'zustand'
import { CryptoInfo } from '../types/types'

type CryptoState = {
  cryptos: CryptoInfo[]
  setCryptos: (newList: CryptoInfo[]) => void
}

export const useCryptoStore = create<CryptoState>((set) => ({
  cryptos: [],
  setCryptos: (newList) => set({ cryptos: newList }),
}))