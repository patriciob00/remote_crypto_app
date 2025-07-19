import { useDetailedCryptoStore } from '../store/detailedCrypto.store'
import { getCryptoDetailsFromCoinGecko } from '../services/coingecko.service'

export function useSelectedCrypto() {
  const { selectedCrypto, setSelectedCrypto, clearSelectedCrypto } = useDetailedCryptoStore()
  const setIsLoading = useDetailedCryptoStore(s => s.setIsLoading)


  const fetchAndSelectCrypto = async (id: string) => {
    
    if (selectedCrypto?.id === id) return
    
    try {
      setIsLoading(true)
      const data = await getCryptoDetailsFromCoinGecko(id)
      setSelectedCrypto(data)
    } catch (error) {
      console.error(`Failed to fetch details for ${id}:`, error)
      clearSelectedCrypto()
    }
    finally {
      setIsLoading(false)
    }
  }

  return {
    selectedCrypto,
    fetchAndSelectCrypto,
    clearSelectedCrypto,
  }
}