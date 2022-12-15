'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navbar() {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <nav className="sticky left-0 grid h-auto grid-cols-2 gap-2 w-fit">
      <Link
        className={
          'col-span-1' + pathname === '/about'
            ? 'font-semibold'
            : 'transition-all ease-in-out hover:text-blue-600 hover:font-semibold'
        }
        href="/about"
      >
        about
      </Link>
      <Link
        className={
          'col-span-1' + pathname === '/contact'
            ? 'font-semibold'
            : 'transition-all ease-in-out hover:text-blue-600 hover:font-semibold'
        }
        href="/contact"
      >
        contact
      </Link>
    </nav>
  )
}
