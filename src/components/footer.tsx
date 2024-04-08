import { LucideMapPin } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const today = new Date()

  return (
    <div className="bg-text text-textOnPrimary">
      <footer className="m-auto flex flex-col items-center gap-2 p-6">

        <Link href="https://maps.app.goo.gl/7h7u53r5nR3koNsN9" target="_blank" className="link flex items-center gap-1">
          <LucideMapPin size={14} />
          <small>Av Prefeito Erasmo Chrispim nº100, Itatiba, SP, Brasil</small>
        </Link>

        <div>
          <small>
            Copyright © 🞄 AMIGOS DO SUL GRILL 🞄
            {' '}
            {today.getFullYear().toString()}
          </small>
        </div>

        <small className="flex">
          <p>Desenvolvido e mantido por</p>
          <Link className="link ml-1" target="_blank" href="https://felipescherer.com">Felipe Scherer </Link>
        </small>
      </footer>
    </div>
  )
}
