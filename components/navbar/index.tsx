import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { useState } from 'react'
import CustomLink from '../link'

const Navbar = () => {
  const [active, setActive] = useState('/')
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="flex flex-row space-x-4 uppercase">
        <NavigationMenu.Item>
          <CustomLink href="/about">About</CustomLink>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <CustomLink href="/contact">Contact</CustomLink>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      {/* NavigationMenu.Content will be rendered here when active */}
      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  )
}

export default Navbar
