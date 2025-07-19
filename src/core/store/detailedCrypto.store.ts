import { create } from 'zustand'
import { DetailedCryptoInfo } from '../types/types'

type DetailedCryptoState = {
  selectedCrypto: DetailedCryptoInfo | null
  isLoading: boolean
  setSelectedCrypto: (crypto: DetailedCryptoInfo) => void
  clearSelectedCrypto: () => void
  setIsLoading: (loading: boolean) => void
}

export const useDetailedCryptoStore = create<DetailedCryptoState>((set) => ({
  selectedCrypto: null,
  isLoading: false,
  setSelectedCrypto: (crypto) => set({ selectedCrypto: crypto }),
  clearSelectedCrypto: () => set({ selectedCrypto: null }),
  setIsLoading: (loading: boolean) => set({ isLoading: loading }),
}))