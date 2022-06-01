import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { useState } from 'react'
import CustomLink from '../link'

const Navbar = () => {
  const [active, setActive] = useState('/')

  const isActive = (path: string) => {
    return path === active
  }

  return (
    <NavigationMenu.Root className="h-fit w-full border-gray-200 border-b-[1px]">
      <NavigationMenu.List className="flex flex-row space-x-4 uppercase py-2 px-2">
        <NavigationMenu.Item onClick={() => setActive('/')}>
          <CustomLink active={isActive('/')} href="/">
            Home
          </CustomLink>
        </NavigationMenu.Item>
        <NavigationMenu.Item onClick={() => setActive('/collections')}>
          <CustomLink active={isActive('/collections')} href="/collections">
            Collections
          </CustomLink>
        </NavigationMenu.Item>
        <NavigationMenu.Item onClick={() => setActive('/contact')}>
          <CustomLink active={isActive('/contact')} href="/contact">
            Contact
          </CustomLink>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

export default Navbar
