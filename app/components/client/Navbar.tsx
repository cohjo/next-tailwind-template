'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navbar() {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <nav className="sticky grid h-auto grid-cols-2 gap-2 w-fit">
      <Link
        className={
          pathname === '/about'
            ? 'font-semibold col-span-1'
            : 'transition-all ease-in-out hover:text-blue-600 hover:font-semibold col-span-1'
        }
        href="/about"
      >
        about
      </Link>
      <Link
        className={
          pathname === '/contact'
            ? 'font-semibold col-span-1'
            : 'transition-all ease-in-out hover:text-blue-600 hover:font-semibold col-span-1'
        }
        href="/contact"
      >
        contact
      </Link>
    </nav>
  )
}
