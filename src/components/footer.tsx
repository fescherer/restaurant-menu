import Link from 'next/link'

export function Footer() {
  const today = new Date()

  return (
    <div className="bg-primary/20">
      <footer className="m-auto flex flex-col items-center gap-2 p-6">
        <div>
          <small>
            Copyright © 🞄 AMIGOS DO SUL GRILL 🞄
            {' '}
            {today.getFullYear().toString()}
          </small>
        </div>

        <small className="flex">
          <p>Desenvolvido e mantido por</p>
          <Link className="link ml-1" target="_blank" href="https://felipescherer.com">Felipe Scherer</Link>
        </small>
      </footer>
    </div>
  )
}
