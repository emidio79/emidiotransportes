import { useState } from 'react'

export function useFaqAccordion() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq((currentIndex) =>
      currentIndex === index ? null : index
    )
  }

  return {
    openFaq,
    toggleFaq,
  }
}