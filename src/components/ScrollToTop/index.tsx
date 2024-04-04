'use client'

import { useScrollBarPercentage } from '@/hooks/useScrollBarPercentage'
import { ArrowUpCircle } from 'lucide-react'

export function ScrollToTop() {
  const value = useScrollBarPercentage()

  return (
    <div className="fixed bottom-5 right-5 z-50 flex gap-4 rounded p-1 text-primary backdrop-blur">
      {(value !== 0) && (
        <button aria-label="Scroll to top of page" onClick={() => window.scroll(0, 0)} type="button" className="transition-all hover:brightness-90">
          <ArrowUpCircle size={40} />
        </button>
      )}
    </div>
  )
}
