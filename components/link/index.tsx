import {
  NavigationMenuLink,
  NavigationMenuLinkProps,
} from '@radix-ui/react-navigation-menu'
import Link from 'next/link'

const CustomLink: React.FC<NavigationMenuLinkProps> = ({
  children,
  active,
  href,
  ...props
}) => {
  return href ? (
    <Link href={href}>
      <NavigationMenuLink
        className={active ? 'text-sky-600 font-semibold' : 'font-semibold'}
        {...props}
      >
        {children}
      </NavigationMenuLink>
    </Link>
  ) : (
    <NavigationMenuLink {...props}>{children}</NavigationMenuLink>
  )
}

export default CustomLink
