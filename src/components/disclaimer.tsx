'use client'

import { APP_CONFIG } from '@/utils/app-config'
import { } from '@heroicons/react/16/solid'

import { useEffect, useState } from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'
import { Divider } from './Divider'

export function Disclaimer() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const showDisclaimerTime = window.localStorage.getItem(`${APP_CONFIG.slug}:showDisclaimerTime`) || ''

    if (showDisclaimerTime) {
      try {
        const showDisclaimerTimeParsed = JSON.parse(showDisclaimerTime)
        const today = new Date()

        if (showDisclaimerTimeParsed < today.getTime()) {
          setOpen(true)
        } else {
          setOpen(false)
        }
      } catch (e) {
        setOpen(true)
      }
    } else {
      setOpen(true)
    }
  }, [])

  function setLocalhostDisclaimer(value: boolean) {
    setOpen(value)
    const date = new Date()
    window.localStorage.setItem(
      `${APP_CONFIG.slug}:showDisclaimerTime`,
      `${date.getTime() + 1000 * 60 * 60 * 24 * 30}`,
    )
  }

  if (open)
    return (
      <>
        <div className="absolute inset-x-0 size-full bg-[#000]/40" />

        <div className="fixed left-1/2 top-1/2 flex min-w-80 max-w-lg -translate-x-1/2 -translate-y-1/2 flex-col gap-8 rounded bg-warning-bg p-4 shadow-[rgba(0,0,0,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
          <div className="flex flex-1 flex-col gap-2">
            <RiErrorWarningFill className="absolute -inset-4 size-10 rounded-full bg-warning-bg text-warning-icon" />

            <div className="flex flex-col items-center gap-2 md:flex-row">
              <h2 className="text-2xl font-semibold">Verificar disponibilidade do produto</h2>
            </div>

            <Divider />
            <p>Por favor, entenda que devido a alta demanda, pode ser que alguns dos itens desse cardápio não estejam disponíveis.</p>
          </div>

          <button className="rounded bg-warning-action p-2 transition-all hover:brightness-90 focus:brightness-90" onClick={() => setLocalhostDisclaimer(false)} type="button">Ok</button>
        </div>
      </>
    )
  else return <></>
}
